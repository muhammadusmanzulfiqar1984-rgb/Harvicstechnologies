import { Link, useParams } from 'react-router-dom'
import Container from '../../components/Container.jsx'
import Button from '../../components/Button.jsx'
import { services, formatPKR } from '../../data/labs.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Service not found</h1>
        <Link to="/labs/services" className="mt-4 inline-block text-[var(--color-accent-blue)] hover:underline">
          Back to services
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/labs" className="hover:text-[var(--color-accent-blue)]">Labs</Link>
        <span className="mx-2">/</span>
        <Link to="/labs/services" className="hover:text-[var(--color-accent-blue)]">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{service.title}</span>
      </nav>

      <div className="max-w-3xl">
        <span className="text-4xl">{service.icon}</span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{service.title}</h1>
        <p className="mt-3 text-gray-600">{service.desc}</p>

        <p className="mt-6 text-2xl font-semibold">From {formatPKR(service.from)}</p>
        <p className="text-sm text-gray-500">Final price depends on model & damage assessment.</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {['Standard', 'Express (24 hr)', 'On-site pickup'].map((tier) => (
            <div key={tier} className="rounded-2xl border border-gray-200 p-5 text-center">
              <p className="font-semibold">{tier}</p>
              <p className="mt-1 text-sm text-gray-500">Quoted on diagnosis</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="dark" size="lg" to="/labs/book">Book this repair</Button>
          <Button variant="secondary" size="lg" href="https://wa.me/923224525052">Get a quick quote</Button>
        </div>
      </div>
    </Container>
  )
}
