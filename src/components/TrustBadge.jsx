export default function TrustBadge({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
      <div className="rounded-full bg-[var(--color-brand-gray)] p-3 text-[var(--color-accent-blue)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-semibold text-[var(--color-brand-black)]">{title}</h4>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  )
}
