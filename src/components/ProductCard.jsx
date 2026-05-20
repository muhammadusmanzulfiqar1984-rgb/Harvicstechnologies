import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, GitCompareArrows, Eye } from 'lucide-react'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'
import { useT } from '../context/LanguageContext.jsx'
import { ratingSummary } from '../data/reviews.js'
import Stars from './Stars.jsx'
import QuickView from './QuickView.jsx'

/**
 * Product card used across the shop, brand landings and home.
 *
 * Adds (on top of the original):
 *  - Wishlist toggle (top-right heart)
 *  - Compare toggle (next to heart)
 *  - Quick-view modal (eye icon → opens QuickView)
 *  - Star rating + review count under the title
 */
export default function ProductCard({ product }) {
  const { add } = useCart()
  const wl  = useWishlist()
  const cmp = useCompare()
  const t = useT()

  const [quick, setQuick] = useState(false)

  const summary = ratingSummary(product.slug)
  const isWish = wl.has(product.id)
  const isCmp  = cmp.has(product.id)

  return (
    <>
      <div className="card-lift group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {/* Top-right action cluster */}
        <div className="absolute right-2 top-2 z-10 flex flex-col gap-1.5 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            aria-label={isWish ? 'Remove from wishlist' : t('product.addToWishlist')}
            aria-pressed={isWish}
            onClick={(e) => { e.preventDefault(); wl.toggle(product.id) }}
            className={`rounded-full p-2 shadow-sm transition ${
              isWish
                ? 'bg-[var(--color-accent-red)] text-white'
                : 'bg-white/95 text-gray-700 hover:text-[var(--color-accent-red)]'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWish ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            aria-label={isCmp ? 'Remove from compare' : 'Add to compare'}
            aria-pressed={isCmp}
            disabled={!isCmp && cmp.isFull}
            onClick={(e) => { e.preventDefault(); cmp.toggle(product.id) }}
            className={`rounded-full p-2 shadow-sm transition disabled:opacity-40 ${
              isCmp
                ? 'bg-[var(--color-accent-blue)] text-white'
                : 'bg-white/95 text-gray-700 hover:text-[var(--color-accent-blue)]'
            }`}
          >
            <GitCompareArrows className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Quick view"
            onClick={(e) => { e.preventDefault(); setQuick(true) }}
            className="rounded-full bg-white/95 p-2 text-gray-700 shadow-sm transition hover:text-[var(--color-brand-black)]"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        <Link to={`/shop/${product.slug}`} className="block">
          <div className="aspect-square overflow-hidden bg-[var(--color-brand-gray)]">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-4">
          {product.badge && (
            <span className="mb-2 inline-block w-fit rounded-full bg-[var(--color-brand-gray)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-700">
              {product.badge}
            </span>
          )}
          <Link
            to={`/shop/${product.slug}`}
            className="line-clamp-2 text-sm font-medium text-[var(--color-brand-black)] hover:text-[var(--color-accent-blue)]"
          >
            {product.name}
          </Link>
          {product.tagline && <p className="mt-1 line-clamp-1 text-xs text-gray-500">{product.tagline}</p>}

          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-gray-500">
            <Stars value={summary.average} size={11} />
            <span>{summary.average} · {summary.count}</span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-semibold">{formatPrice(product.price)}</span>
            <button
              type="button"
              aria-label={t('product.addToCart')}
              onClick={() => add(product)}
              className="rounded-full bg-[var(--color-brand-black)] p-2 text-white transition hover:bg-[var(--color-accent-blue)]"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {quick && <QuickView product={product} onClose={() => setQuick(false)} />}
    </>
  )
}
