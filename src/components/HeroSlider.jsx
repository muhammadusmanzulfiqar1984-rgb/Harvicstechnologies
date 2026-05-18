import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/products.js'

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-black">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-4 pb-20 sm:px-6 lg:items-center lg:pb-0 lg:px-8">
            <div className={`max-w-xl text-white ${s.align === 'right' ? 'lg:ml-auto lg:text-right' : ''}`}>
              {s.eyebrow && <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--color-accent-blue)]">{s.eyebrow}</p>}
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{s.title}</h1>
              <p className="mt-3 text-lg text-gray-200">{s.subtitle}</p>
              <div className={`mt-6 flex flex-wrap gap-3 ${s.align === 'right' ? 'lg:justify-end' : ''}`}>
                <Link
                  to={s.cta.to}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-accent-blue)] px-6 text-sm font-medium text-[var(--color-brand-black)] transition hover:opacity-90"
                >
                  {s.cta.label}
                </Link>
                <Link
                  to={s.secondary.to}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/80 px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  {s.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
