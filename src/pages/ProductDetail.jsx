import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heart, Shield, Truck, RotateCcw, GitCompareArrows } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reviews from '../components/Reviews.jsx'
import Stars from '../components/Stars.jsx'
import { products, formatPrice } from '../data/products.js'
import { ratingSummary } from '../data/reviews.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { add } = useCart()
  const wl  = useWishlist()
  const cmp = useCompare()
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-[var(--color-accent-blue)] hover:underline">
          Back to shop
        </Link>
      </Container>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageLg || product.image]
  const summary = ratingSummary(product.slug)

  const isWish = wl.has(product.id)
  const isCmp  = cmp.has(product.id)

  return (
    <>
      <Container className="py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-[var(--color-accent-blue)]">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/product-category/${product.category}`} className="capitalize hover:text-[var(--color-accent-blue)]">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-[var(--color-brand-gray)]">
              <img
                src={gallery[activeImg]}
                alt={product.name}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full object-cover transition"
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      i === activeImg ? 'border-[var(--color-accent-blue)]' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={src} alt="" loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {product.badge && (
              <span className="mb-3 inline-block rounded-full bg-[var(--color-brand-gray)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
            {product.tagline && <p className="mt-2 text-gray-600">{product.tagline}</p>}

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <Stars value={summary.average} />
              <span className="font-medium text-gray-700">{summary.average}</span>
              <span>·</span>
              <a href="#reviews" className="hover:text-[var(--color-accent-blue)]">{summary.count} reviews</a>
            </div>

            <p className="mt-6 text-3xl font-semibold">{formatPrice(product.price)}</p>
            <p className="mt-1 text-sm text-gray-500">Inclusive of all taxes</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="dark" size="lg" onClick={() => add(product)}>
                Add to Cart
              </Button>
              <Button variant="primary" size="lg" to="/cart" onClick={() => add(product)}>
                Buy Now
              </Button>
              <button
                type="button"
                aria-label={isWish ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={isWish}
                onClick={() => wl.toggle(product.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                  isWish
                    ? 'border-[var(--color-accent-red)] bg-[var(--color-accent-red)] text-white'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${isWish ? 'fill-current' : ''}`} />
              </button>
              <button
                type="button"
                aria-label={isCmp ? 'Remove from compare' : 'Add to compare'}
                aria-pressed={isCmp}
                disabled={!isCmp && cmp.isFull}
                onClick={() => cmp.toggle(product.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition disabled:opacity-40 ${
                  isCmp
                    ? 'border-[var(--color-accent-blue)] bg-[var(--color-accent-blue)] text-white'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <GitCompareArrows className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 space-y-4 border-t border-gray-200 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 text-[var(--color-accent-blue)]" />
                <div>
                  <p className="font-medium">1-year warranty</p>
                  <p className="text-gray-500">Official manufacturer warranty included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 text-[var(--color-accent-blue)]" />
                <div>
                  <p className="font-medium">Free nationwide delivery</p>
                  <p className="text-gray-500">Dispatched same day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="mt-0.5 h-5 w-5 text-[var(--color-accent-blue)]" />
                <div>
                  <p className="font-medium">7-day easy returns</p>
                  <p className="text-gray-500">Unopened items only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div id="reviews" className="mt-16">
          <Reviews slug={product.slug} />
        </div>
      </Container>

      {related.length > 0 && (
        <section className="py-14">
          <Container>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">You may also like</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
