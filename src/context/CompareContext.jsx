import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Compare — at most COMPARE_MAX product IDs the user wants to compare side-by-side.
 *
 * A small drawer (rendered globally) shows the current selections and a
 * "Compare" button navigates to /compare.
 */
const KEY = 'harvyoice.compare.v1'
export const COMPARE_MAX = 3

const CompareContext = createContext(null)

function readInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed)
      ? parsed.filter((id) => typeof id === 'string').slice(0, COMPARE_MAX)
      : []
  } catch {
    return []
  }
}

export function CompareProvider({ children }) {
  const [ids, setIds] = useState(readInitial)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(ids))
    } catch {
      /* ignore */
    }
  }, [ids])

  const has = useCallback((id) => ids.includes(id), [ids])
  const isFull = ids.length >= COMPARE_MAX

  const add = useCallback((id) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev
      if (prev.length >= COMPARE_MAX) return prev
      return [...prev, id]
    })
    setOpen(true)
  }, [])

  const remove = useCallback((id) => setIds((prev) => prev.filter((x) => x !== id)), [])
  const clear  = useCallback(() => setIds([]), [])
  const toggle = useCallback((id) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= COMPARE_MAX) return prev
      return [...prev, id]
    })
    setOpen(true)
  }, [])

  const value = useMemo(
    () => ({ ids, count: ids.length, has, isFull, max: COMPARE_MAX, add, remove, toggle, clear, open, setOpen }),
    [ids, has, isFull, add, remove, toggle, clear, open],
  )

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
}

export function useCompare() {
  const ctx = useContext(CompareContext)
  if (!ctx) throw new Error('useCompare must be used within CompareProvider')
  return ctx
}
