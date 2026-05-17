import Container from '../../components/Container.jsx'
import { galleryImages } from '../../data/labs.js'

export default function Gallery() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Inside the lab</h1>
      <p className="mt-2 text-gray-600">A look at our facility, equipment, and students at work.</p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-[var(--color-brand-gray)]">
            <img src={src} alt={`Lab ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
          </div>
        ))}
      </div>
    </Container>
  )
}
