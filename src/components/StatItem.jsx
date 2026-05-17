export default function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  )
}
