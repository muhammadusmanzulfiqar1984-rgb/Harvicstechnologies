import Container from '../../components/Container.jsx'
import TestimonialCard from '../../components/TestimonialCard.jsx'
import { labTestimonials } from '../../data/labs.js'

export default function Testimonials() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Testimonials</h1>
      <p className="mt-2 text-gray-600">Real feedback from students and repair customers.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {labTestimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
      </div>
    </Container>
  )
}
