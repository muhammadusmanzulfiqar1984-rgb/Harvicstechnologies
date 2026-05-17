import { Link } from 'react-router-dom'
import { formatPKR } from '../data/labs.js'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/labs/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="text-3xl">{service.icon}</span>
      <h3 className="mt-4 font-semibold text-[var(--color-brand-black)] group-hover:text-[var(--color-accent-blue)]">
        {service.title}
      </h3>
      <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
      <p className="mt-4 text-sm">
        From <span className="font-semibold">{formatPKR(service.from)}</span>
      </p>
    </Link>
  )
}
