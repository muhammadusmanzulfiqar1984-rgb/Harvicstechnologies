import { Star } from 'lucide-react'

/**
 * Tiny star-rating renderer. Renders 5 stars and fills `value` of them
 * with the brand-gold colour. Pass `size` to scale (default 14px).
 */
export default function Stars({ value = 0, size = 14, className = '' }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {stars.map((i) => {
        const filled = i <= Math.round(value)
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={filled ? 'fill-[var(--color-accent-blue)] text-[var(--color-accent-blue)]' : 'text-gray-300'}
            strokeWidth={1.6}
          />
        )
      })}
    </span>
  )
}
