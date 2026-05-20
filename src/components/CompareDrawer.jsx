import { Link } from 'react-router-dom'
import { GitCompareArrows, X, ChevronUp, ChevronDown, Plus } from 'lucide-react'
import { useCompare, COMPARE_MAX } from '../context/CompareContext.jsx'
import { products } from '../data/products.js'

/**
 * Sticky bottom drawer showing the current "Compare" selection.
 *
 * - Hidden completely when nothing is selected.
 * - Up to {COMPARE_MAX} slots, with empty slots shown as dashed placeholders.
 * - "Compare" button links to /compare. Disabled until there are 2+ items.
 */
export default function CompareDrawer() {
  const { ids, count, remove, clear, open, setOpen } = useCompare()
  if (count === 0) return null

  const selected = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <aside
      aria-label="Compare drawer"
      className="fixed inset-x-0 bottom-0 z-30"
    >
      <div className="mx-auto max-w-7xl px-3 pb-3 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between gap-3 border-b border-gray-100 bg-[var(--color-brand-black)] px-4 py-2 text-left text-sm font-medium text-white"
            aria-expanded={open}
          >
            <span className="inline-flex items-center gap-2">
              <GitCompareArrows className="h-4 w-4" />
              Compare ({count}/{COMPARE_MAX})
            </span>
            {open ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>

          {open && (
            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 gap-3 overflow-x-auto">
                {selected.map((p) => (
                  <div key={p.id} className="relative flex w-[140px] shrink-0 flex-col items-center rounded-xl border border-gray-200 p-2">
                    <button
                      aria-label={`Remove ${p.name}`}
                      onClick={() => remove(p.id)}
                      className="absolute right-1 top-1 rounded-full bg-white/95 p-0.5 text-gray-600 shadow hover:text-[var(--color-accent-red)]"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-[var(--color-brand-gray)]">
                      <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-[11px] font-medium text-center">{p.name}</p>
                  </div>
                ))}
                {Array.from({ length: COMPARE_MAX - selected.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex w-[140px] shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-2 text-gray-400">
                    <Plus className="h-5 w-5" />
                    <p className="mt-1 text-[10px]">Add product</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 sm:flex-col sm:items-stretch">
                <Link
                  to="/compare"
                  className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-white transition ${
                    count >= 2
                      ? 'bg-[var(--color-accent-blue)] hover:opacity-90'
                      : 'pointer-events-none bg-gray-300'
                  }`}
                >
                  Compare {count} item{count !== 1 ? 's' : ''}
                </Link>
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
