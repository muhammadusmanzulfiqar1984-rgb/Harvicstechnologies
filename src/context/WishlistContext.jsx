import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Wishlist — a simple set of product IDs the user has hearted.
 *
 * Persisted to localStorage so the list survives reloads. The provider
 * deliberately stores only IDs (not full product objects) so that price
 * or image changes in `products.js` are picked up automatically when the
 * list is rendered.
 */
const KEY = 'harvyoice.wishlist.v1'

const WishlistContext = createContext(null)

function readInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(readInitial)

  // Persist on every change.
  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(ids))
    } catch {
      /* quota or private-mode — ignore */
    }
  }, [ids])

  const has    = useCallback((id) => ids.includes(id), [ids])
  const add    = useCallback((id) => setIds((prev) => (prev.includes(id) ? prev : [...prev, id])), [])
  const remove = useCallback((id) => setIds((prev) => prev.filter((x) => x !== id)), [])
  const toggle = useCallback((id) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])), [])
  const clear  = useCallback(() => setIds([]), [])

  const value = useMemo(
    () => ({ ids, count: ids.length, has, add, remove, toggle, clear }),
    [ids, has, add, remove, toggle, clear],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
