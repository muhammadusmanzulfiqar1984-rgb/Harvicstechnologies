import { Link, useParams } from 'react-router-dom'
import { Heart, Shield, Truck, RotateCcw } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { add } = useCart()

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
          <div className="overflow-hidden rounded-3xl bg-[var(--color-brand-gray)]">
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          </div>

          <div>
            {product.badge && (
              <span className="mb-3 inline-block rounded-full bg-[var(--color-brand-gray)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
            {product.tagline && <p className="mt-2 text-gray-600">{product.tagline}</p>}

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
                aria-label="Wishlist"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 space-y-4 border-t border-gray-200 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 text-[var(--color-accent-blue)]" />
                <div>
                  <p className="font-medium">1-year warranty</p>
                  <p className="text-gray-500">Official Apple warranty included</p>
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
