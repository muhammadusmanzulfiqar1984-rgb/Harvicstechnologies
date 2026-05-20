import { useMemo, useState } from 'react'
import { reviewsFor } from '../data/reviews.js'
import Stars from './Stars.jsx'

const RATING_FILTERS = [5, 4, 3]

/**
 * Reviews block for the product detail page. Shows the average rating,
 * a histogram, filter chips and the review list.
 *
 * All review data is sourced from the synthetic generator in
 * `src/data/reviews.js` so the UI behaves deterministically per slug.
 */
export default function Reviews({ slug }) {
  const all = useMemo(() => reviewsFor(slug, 12), [slug])
  const [filter, setFilter] = useState(0) // 0 = all

  const list = filter === 0 ? all : all.filter((r) => r.rating === filter)
  const average = (all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(1)

  const counts = RATING_FILTERS.reduce((acc, r) => {
    acc[r] = all.filter((x) => x.rating === r).length
    return acc
  }, {})

  return (
    <section className="border-t border-gray-200 py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        {/* Summary */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Customer reviews</h2>
          <div className="mt-4 flex items-end gap-3">
            <p className="text-5xl font-semibold">{average}</p>
            <div className="pb-1">
              <Stars value={Number(average)} size={18} />
              <p className="mt-1 text-xs text-gray-500">{all.length} verified reviews</p>
            </div>
          </div>

          {/* Histogram */}
          <ul className="mt-6 space-y-2">
            {RATING_FILTERS.map((r) => {
              const c = counts[r] || 0
              const pct = Math.round((c / all.length) * 100)
              return (
                <li key={r} className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="w-3">{r}</span>
                  <Stars value={r} size={10} />
                  <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="absolute inset-y-0 left-0 bg-[var(--color-accent-blue)]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right">{c}</span>
                </li>
              )
            })}
          </ul>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(0)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                filter === 0
                  ? 'bg-[var(--color-brand-black)] text-white'
                  : 'border border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              All ({all.length})
            </button>
            {RATING_FILTERS.map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  filter === r
                    ? 'bg-[var(--color-brand-black)] text-white'
                    : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {r}★ ({counts[r] || 0})
              </button>
            ))}
          </div>
        </div>

        {/* Review list */}
        <div className="space-y-5">
          {list.length === 0 && (
            <p className="text-sm text-gray-500">No reviews match that filter.</p>
          )}
          {list.map((r) => (
            <article key={r.id} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.city} · {r.daysAgo} day{r.daysAgo !== 1 ? 's' : ''} ago</p>
                </div>
                <Stars value={r.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
