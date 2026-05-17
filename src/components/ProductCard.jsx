import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { add } = useCart()

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg">
      <button
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-gray-700 opacity-0 shadow-sm transition group-hover:opacity-100 hover:text-[var(--color-accent-red)]"
      >
        <Heart className="h-4 w-4" />
      </button>

      <Link to={`/shop/${product.slug}`} className="block">
        <div className="aspect-square overflow-hidden bg-[var(--color-brand-gray)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
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
        <Link to={`/shop/${product.slug}`} className="line-clamp-2 text-sm font-medium text-[var(--color-brand-black)] hover:text-[var(--color-accent-blue)]">
          {product.name}
        </Link>
        {product.tagline && <p className="mt-1 line-clamp-1 text-xs text-gray-500">{product.tagline}</p>}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-semibold">{formatPrice(product.price)}</span>
          <button
            aria-label="Add to cart"
            onClick={() => add(product)}
            className="rounded-full bg-[var(--color-brand-black)] p-2 text-white transition hover:bg-[var(--color-accent-blue)]"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
