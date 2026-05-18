import { useEffect, useRef } from 'react'

/** Adds the `in-view` class to any element with `reveal` when it scrolls into view. */
export default function useRevealOnScroll() {
  const observed = useRef(false)
  useEffect(() => {
    if (observed.current) return
    observed.current = true
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    // Re-scan on route change
    const mo = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => io.observe(el))
    })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
