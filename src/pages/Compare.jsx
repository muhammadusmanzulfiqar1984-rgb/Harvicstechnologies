import { Link } from 'react-router-dom'
import { GitCompareArrows, X, ArrowRight, Check } from 'lucide-react'
import Container from '../components/Container.jsx'
import { useCompare } from '../context/CompareContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products, formatPrice } from '../data/products.js'
import { ratingSummary } from '../data/reviews.js'
import Stars from '../components/Stars.jsx'

/**
 * Synthetic spec sheet. In a real store this comes from the product schema.
 * Here we derive a few rows from the existing product data so the compare
 * grid is meaningful without a separate spec catalogue.
 */
function specsFor(p) {
  if (!p) return {}
  const brand = (
    p.category === 'iphone' || p.category === 'mac' || p.category === 'ipad' || p.category === 'watch' || p.category === 'airpods' || p.category === 'accessories'
      ? 'Apple'
      : p.category.charAt(0).toUpperCase() + p.category.slice(1)
  )
  return {
    Brand: brand,
    Category: p.category.charAt(0).toUpperCase() + p.category.slice(1),
    'Launch year': '2025',
    'PTA Approved': 'Yes',
    Warranty: '1 year',
    Tagline: p.tagline || '—',
  }
}

const ROWS = ['Brand', 'Category', 'Launch year', 'PTA Approved', 'Warranty', 'Tagline']

export default function Compare() {
  const { ids, remove, clear } = useCompare()
  const { add } = useCart()
  const items = ids.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <Container className="py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">Compare</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Side by side</h1>
          <p className="mt-1 text-sm text-gray-500">
            {items.length} product{items.length !== 1 ? 's' : ''} selected
          </p>
        </div>
        {items.length > 0 && (
          <button onClick={clear} className="text-sm text-gray-500 hover:text-[var(--color-accent-red)]">
            Clear all
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <GitCompareArrows className="mx-auto h-10 w-10 text-gray-300" />
          <p className="mt-4 text-base text-gray-600">No products to compare yet.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-black)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Browse the shop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-x-3">
            <thead>
              <tr>
                <th className="w-32 text-left text-xs uppercase tracking-wider text-gray-500" />
                {items.map((p) => {
                  const summary = ratingSummary(p.slug)
                  return (
                    <th key={p.id} className="align-top">
                      <div className="relative rounded-2xl border border-gray-200 bg-white p-4 text-left">
                        <button
                          aria-label={`Remove ${p.name}`}
                          onClick={() => remove(p.id)}
                          className="absolute right-2 top-2 rounded-full bg-white p-1 text-gray-500 shadow hover:text-[var(--color-accent-red)]"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                        <div className="aspect-square overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                          <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                        </div>
                        <Link to={`/shop/${p.slug}`} className="mt-3 block text-sm font-semibold text-gray-900 hover:text-[var(--color-accent-blue)]">
                          {p.name}
                        </Link>
                        <p className="mt-1 text-base font-semibold">{formatPrice(p.price)}</p>
                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <Stars value={summary.average} size={12} />
                          <span>{summary.average} · {summary.count} reviews</span>
                        </div>
                        <button
                          onClick={() => add(p)}
                          className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-full bg-[var(--color-brand-black)] text-xs font-medium text-white hover:opacity-90"
                        >
                          Add to cart
                        </button>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody className="text-sm">
              {ROWS.map((row) => (
                <tr key={row} className="align-top">
                  <td className="py-3 pr-2 text-xs font-semibold uppercase tracking-wider text-gray-500">{row}</td>
                  {items.map((p) => (
                    <td key={p.id} className="py-3">
                      <div className="rounded-xl bg-[var(--color-brand-gray)] px-3 py-2 text-sm text-gray-800">
                        {row === 'PTA Approved' ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600">
                            <Check className="h-3.5 w-3.5" /> Yes
                          </span>
                        ) : (
                          specsFor(p)[row]
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  )
}
