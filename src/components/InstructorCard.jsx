export default function InstructorCard({ instructor }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-[var(--color-brand-gray)]">
        <img src={instructor.image} alt={instructor.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
      <h4 className="mt-4 font-semibold">{instructor.name}</h4>
      <p className="text-xs text-gray-600">{instructor.role}</p>
      <p className="mt-1 text-xs text-gray-400">{instructor.years}+ years experience</p>
    </div>
  )
}
