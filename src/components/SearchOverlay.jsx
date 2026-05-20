import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowRight } from 'lucide-react'
import { products, formatPrice } from '../data/products.js'

/**
 * Header search overlay. Opens as a sheet beneath the navbar with a
 * focused input. Results filter live across product name, tagline and
 * category. Up to 8 results are shown; selecting one navigates.
 */
export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)

  // Focus the input as soon as the overlay opens.
  useEffect(() => {
    if (!open) return
    setQ('')
    const t = setTimeout(() => inputRef.current?.focus(), 30)
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  // Filter products by name / tagline / category.
  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return products
      .filter((p) => {
        const hay = `${p.name} ${p.tagline || ''} ${p.category}`.toLowerCase()
        return hay.includes(term)
      })
      .slice(0, 8)
  }, [q])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <button
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
      />

      <div className="relative z-10 bg-white shadow-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-3 px-4 sm:px-6">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search iPhone, Samsung, Mac…"
            className="h-full flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
          />
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto max-h-[70vh] max-w-5xl overflow-y-auto border-t border-gray-100 px-4 pb-6 sm:px-6">
          {q.trim() === '' && (
            <div className="py-10 text-center text-sm text-gray-500">
              Start typing to search products. Try <em>iPhone</em>, <em>Galaxy</em> or <em>foldable</em>.
            </div>
          )}

          {q.trim() !== '' && results.length === 0 && (
            <div className="py-10 text-center text-sm text-gray-500">
              No matches for <span className="font-medium text-gray-800">"{q}"</span>.
            </div>
          )}

          {results.length > 0 && (
            <ul className="divide-y divide-gray-100">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/shop/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 py-3 transition hover:bg-gray-50"
                  >
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                      <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">{p.name}</p>
                      <p className="text-xs capitalize text-gray-500">{p.category}</p>
                    </div>
                    <span className="hidden text-sm font-semibold text-gray-800 sm:inline">{formatPrice(p.price)}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  to={`/shop?q=${encodeURIComponent(q.trim())}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-blue)] hover:underline"
                >
                  See all results <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
