import Container from '../../components/Container.jsx'
import ServiceCard from '../../components/ServiceCard.jsx'
import { services } from '../../data/labs.js'

export default function ServicesList() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Lab Services</h1>
      <p className="mt-2 text-gray-600">Certified repairs, genuine parts, transparent pricing.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </div>
    </Container>
  )
}
