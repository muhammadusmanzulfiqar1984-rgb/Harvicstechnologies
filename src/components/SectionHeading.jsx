import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ eyebrow, title, viewAll }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="text-sm font-medium text-[var(--color-accent-blue)]">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {viewAll && (
        <Link to={viewAll} className="hidden items-center gap-1 text-sm font-medium text-[var(--color-accent-blue)] hover:underline sm:inline-flex">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
