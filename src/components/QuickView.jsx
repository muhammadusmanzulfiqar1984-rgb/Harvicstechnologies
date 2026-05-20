import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ShoppingBag, Heart, GitCompareArrows, ArrowRight } from 'lucide-react'
import { formatPrice } from '../data/products.js'
import { ratingSummary } from '../data/reviews.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'
import Stars from './Stars.jsx'

/**
 * Quick-view modal — opens from a product card without leaving the listing.
 * Shows the gallery, key facts, and Add-to-cart / Wishlist / Compare buttons.
 *
 * Renders nothing when `product` is null so it can be safely mounted at the
 * top level.
 */
export default function QuickView({ product, onClose }) {
  const { add } = useCart()
  const wl = useWishlist()
  const cmp = useCompare()

  // Lock body scroll while open + ESC to close.
  useEffect(() => {
    if (!product) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  if (!product) return null

  const summary = ratingSummary(product.slug)
  const isWish = wl.has(product.id)
  const isCmp  = cmp.has(product.id)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <button
        aria-label="Close quick view"
        onClick={onClose}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid sm:grid-cols-[1.05fr_1fr]">
          {/* Image */}
          <div className="aspect-square bg-[var(--color-brand-gray)] sm:aspect-auto">
            <img
              src={product.imageLg || product.image}
              alt={product.name}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 sm:p-8">
            {product.badge && (
              <span className="mb-2 inline-block w-fit rounded-full bg-[var(--color-brand-gray)] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-700">
                {product.badge}
              </span>
            )}
            <h2 className="text-2xl font-semibold tracking-tight">{product.name}</h2>
            {product.tagline && <p className="mt-1 text-sm text-gray-500">{product.tagline}</p>}

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <Stars value={summary.average} />
              <span className="font-medium text-gray-700">{summary.average}</span>
              <span>·</span>
              <span>{summary.count} reviews</span>
            </div>

            <p className="mt-5 text-3xl font-semibold">{formatPrice(product.price)}</p>
            <p className="mt-1 text-xs text-gray-500">Inclusive of all taxes · PTA approved</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => { add(product); onClose() }}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-brand-black)] px-5 text-sm font-medium text-white transition hover:opacity-90"
              >
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
              <button
                onClick={() => wl.toggle(product.id)}
                aria-pressed={isWish}
                title={isWish ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                  isWish
                    ? 'border-[var(--color-accent-red)] bg-[var(--color-accent-red)] text-white'
                    : 'border-gray-300 text-gray-700 hover:border-[var(--color-accent-red)] hover:text-[var(--color-accent-red)]'
                }`}
              >
                <Heart className={`h-4 w-4 ${isWish ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => cmp.toggle(product.id)}
                aria-pressed={isCmp}
                disabled={!isCmp && cmp.isFull}
                title={isCmp ? 'Remove from compare' : 'Add to compare'}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition disabled:opacity-40 ${
                  isCmp
                    ? 'border-[var(--color-accent-blue)] bg-[var(--color-accent-blue)] text-white'
                    : 'border-gray-300 text-gray-700 hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]'
                }`}
              >
                <GitCompareArrows className="h-4 w-4" />
              </button>
            </div>

            <Link
              to={`/shop/${product.slug}`}
              onClick={onClose}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-blue)] hover:underline"
            >
              See full details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
