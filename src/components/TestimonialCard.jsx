import { Star } from 'lucide-react'

export default function TestimonialCard({ t }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-3 flex gap-0.5 text-yellow-500">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">&ldquo;{t.text}&rdquo;</p>
      <p className="mt-4 text-sm font-medium text-[var(--color-brand-black)]">
        {t.name} <span className="text-gray-500">— {t.city}</span>
      </p>
    </div>
  )
}
