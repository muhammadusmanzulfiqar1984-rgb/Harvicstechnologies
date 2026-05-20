import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { products } from '../data/products.js'

/**
 * Wishlist page — shows every product the user has hearted. Empty state
 * nudges the user back to the shop. Items are rendered using the same
 * ProductCard so the heart toggle stays consistent.
 */
export default function Wishlist() {
  const { ids, clear, count } = useWishlist()
  const items = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <Container className="py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">Saved</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Your wishlist</h1>
          <p className="mt-1 text-sm text-gray-500">
            {count > 0 ? `${count} product${count !== 1 ? 's' : ''} saved.` : 'Save the products you love to come back later.'}
          </p>
        </div>
        {count > 0 && (
          <button
            onClick={clear}
            className="text-sm text-gray-500 hover:text-[var(--color-accent-red)]"
          >
            Clear all
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <Heart className="mx-auto h-10 w-10 text-gray-300" />
          <p className="mt-4 text-base text-gray-600">Your wishlist is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-black)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Browse the shop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </Container>
  )
}
