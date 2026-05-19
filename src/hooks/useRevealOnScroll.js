import { useEffect } from 'react'

/** Adds the `in-view` class to any element with `reveal` when it scrolls into view. */
export default function useRevealOnScroll() {
  useEffect(() => {
    const reveal = (el) => el.classList.add('in-view')

    // Fallback for browsers without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target)
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
        io.observe(el)
        // Immediately reveal anything already in the viewport on mount
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) reveal(el)
      })
    }

    observeAll()

    // Re-scan when the DOM changes (route changes, lazy content)
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
