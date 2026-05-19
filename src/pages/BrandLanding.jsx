import { useEffect, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ChevronUp, ChevronRight, ChevronLeft,
  ArrowRight, Plus, Minus,
} from 'lucide-react'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import FlyingPhoneHero, { ColorFan } from '../components/FlyingPhoneHero.jsx'
import { brandLandings } from '../data/brandLandings.js'
import { formatPrice } from '../data/products.js'

/* ─────────────────────────────────────────────────────────
 *  Horizontal scroller with prev/next push buttons
 * ──────────────────────────────────────────────────────── */
function PushScroller({ children, itemWidth = 280, ariaLabel, dark = false }) {
  const ref = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = () => {
    const el = ref.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    update()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const push = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * (itemWidth + 16), behavior: 'smooth' })
  }

  const btnBase = dark
    ? 'bg-white/10 text-white hover:bg-white hover:text-black'
    : 'bg-white text-gray-800 hover:bg-[var(--color-accent-blue)] hover:text-white border border-gray-200 shadow-md'

  return (
    <div className="relative" aria-label={ariaLabel}>
      <button
        type="button" aria-label="Previous" onClick={() => push(-1)} disabled={!canPrev}
        className={`absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 sm:flex ${btnBase}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button" aria-label="Next" onClick={() => push(1)} disabled={!canNext}
        className={`absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 sm:flex ${btnBase}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
        {children}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
 *  FAQ accordion item
 * ──────────────────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        type="button" onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-[var(--color-brand-black)] sm:text-lg">{q}</span>
        {open ? <Minus className="h-5 w-5 text-gray-500" /> : <Plus className="h-5 w-5 text-gray-500" />}
      </button>
      <div className={`grid overflow-hidden text-sm leading-relaxed text-gray-600 transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0">{a}</div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
 *  Main page
 * ──────────────────────────────────────────────────────── */
export default function BrandLanding() {
  const { category } = useParams()
  const cfg = brandLandings[category]
  const [dockOpen, setDockOpen] = useState(false)
  const [activeColor, setActiveColor] = useState(0)
  const dockRef = useRef(null)

  if (!cfg) return <Navigate to={`/shop`} replace />

  const accent = cfg.heroAccent || 'var(--color-accent-blue)'
  const accent15 = `${cfg.heroAccent || '#C3A35E'}18`

  const pushDock = (dir) => {
    const el = dockRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <div className="pb-28">
      {/* ─── HERO — flying / floating phone ──────────────── */}
      <FlyingPhoneHero cfg={cfg} category={category} accent={accent} />

      {/* ─── GET THE HIGHLIGHTS (BENTO) ───────────────────── */}
      <section id="highlights" className="bg-white py-20 reveal">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
              Get the highlights
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              All the reasons to love {cfg.title}.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.highlightsBento.map((h, i) => (
              <div
                key={h.title}
                className={`feat-tile card-lift group relative overflow-hidden rounded-3xl p-8 ${
                  h.span === 'lg' ? 'sm:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ background: i % 2 === 0 ? '#fafafa' : accent15 }}
              >
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: accent, color: '#fff' }}
                >
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{h.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base">{h.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── DESIGN block ─────────────────────────────────── */}
      <section className="bg-black py-20 text-white reveal">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
                {cfg.design.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cfg.design.title}</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-gray-300">{cfg.design.body}</p>

              {/* color picker */}
              {cfg.colors?.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Colors — <span className="text-white">{cfg.colors[activeColor].name}</span>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {cfg.colors.map((c, i) => (
                      <button
                        key={c.name}
                        aria-label={c.name}
                        onClick={() => setActiveColor(i)}
                        className={`h-8 w-8 rounded-full border-2 transition ${i === activeColor ? 'scale-110 border-white' : 'border-white/30 hover:border-white/70'}`}
                        style={{ background: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="feat-tile relative aspect-square overflow-hidden rounded-3xl bg-gray-900">
              <img src={cfg.design.image} alt={cfg.design.title} loading="lazy" decoding="async" className="feat-tile-img absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* ─── COLOR FAN ────────────────────────────────────── */}
      <ColorFan cfg={cfg} accent={accent} />

      {/* ─── CAMERAS — title + sub-tiles + front camera ──── */}
      <section className="bg-[var(--color-brand-gray)] py-20 reveal">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>{cfg.cameras.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cfg.cameras.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">{cfg.cameras.body}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.cameras.tiles.map((t) => (
              <div key={t.title} className="card-lift rounded-2xl bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Front camera spotlight */}
          {cfg.cameras.front && (
            <div className="mt-12 rounded-3xl bg-white p-8 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{cfg.cameras.front.title}</h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">{cfg.cameras.front.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cfg.cameras.front.chips.map((c) => (
                      <span key={c} className="rounded-full px-3 py-1.5 text-xs font-medium"
                        style={{ background: accent15, color: accent }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="feat-tile relative aspect-video overflow-hidden rounded-2xl"
                  style={{ background: accent15 }}>
                  <img src={cfg.heroImage} alt="Front camera" loading="lazy" decoding="async" className="feat-tile-img absolute inset-0 h-full w-full object-cover opacity-90" />
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ─── CHIP + BATTERY stats ────────────────────────── */}
      <section className="py-20 text-white reveal" style={{ background: 'linear-gradient(180deg, #0b0b0e 0%, #1a1a20 100%)' }}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>{cfg.chip.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cfg.chip.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">{cfg.chip.body}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cfg.chip.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: accent }}>{s.value}</p>
                <p className="mt-2 text-xs text-gray-300 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SOFTWARE tiles ───────────────────────────────── */}
      <section className="py-20 reveal">
        <Container>
          <SectionHeading eyebrow={cfg.software.eyebrow} title={cfg.software.title} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.software.tiles.map((t) => (
              <div key={t.title} className="card-lift rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── AI tiles ─────────────────────────────────────── */}
      <section className="bg-[var(--color-brand-gray)] py-20 reveal">
        <Container>
          <SectionHeading eyebrow={cfg.ai.eyebrow} title={cfg.ai.title} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.ai.tiles.map((t) => (
              <div key={t.title} className="card-lift rounded-2xl bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SAFETY / CONNECTIVITY tiles ─────────────────── */}
      <section className="py-20 reveal">
        <Container>
          <SectionHeading eyebrow={cfg.safety.eyebrow} title={cfg.safety.title} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.safety.tiles.map((t) => (
              <div key={t.title} className="card-lift rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── COMPARE BENTO ───────────────────────────────── */}
      <section className="bg-black py-20 text-white reveal">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>{cfg.compareBento.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cfg.compareBento.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cfg.compareBento.tiles.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: accent }}>{t.kicker}</p>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">{t.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── COMPARE row with push-scroller ──────────────── */}
      <section className="py-20 reveal">
        <Container>
          <SectionHeading
            eyebrow="Keep exploring"
            title={`Every ${cfg.brand} model.`}
            viewAll={`/product-category/${category}`}
          />
          <p className="-mt-4 mb-6 text-sm text-gray-500">{cfg.compareNote}</p>

          <PushScroller itemWidth={280} ariaLabel={`${cfg.brand} models`}>
            {cfg.products.map((p) => (
              <div key={p.id} className="w-[260px] shrink-0 snap-start sm:w-[280px]">
                <ProductCard product={p} />
              </div>
            ))}
          </PushScroller>
        </Container>
      </section>

      {/* ─── ACCESSORIES ─────────────────────────────────── */}
      <section className="bg-[var(--color-brand-gray)] py-20 reveal">
        <Container>
          <SectionHeading eyebrow={cfg.accessories.eyebrow} title={cfg.accessories.title} />
          <div className="grid gap-4 sm:grid-cols-3">
            {cfg.accessories.tiles.map((t) => (
              <div key={t.title} className="feat-tile card-lift rounded-3xl bg-white p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: accent, color: '#fff' }}>
                  <t.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── WHY BUY FROM US ─────────────────────────────── */}
      <section className="py-20 reveal">
        <Container>
          <SectionHeading eyebrow="Why Harvyoice" title={`The best place to buy ${cfg.brand}.`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.reasons.map((r) => (
              <div key={r.title} className="card-lift rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── ENVIRONMENT ─────────────────────────────────── */}
      <section className="bg-[var(--color-brand-gray)] py-20 reveal">
        <Container>
          <SectionHeading eyebrow="Environment" title={`${cfg.title} and the planet.`} />
          <div className="grid gap-4 sm:grid-cols-3">
            {cfg.environment.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: accent15, color: accent }}>
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{e.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 reveal">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Questions" title="Answers." />
            <div className="mt-4">
              {cfg.faq.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/contact-us"
                className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium text-white transition hover:-translate-y-0.5"
                style={{ background: accent }}
              >
                Talk to a specialist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── STICKY DOCK ──────────────────────────────────── */}
      <aside className={`brand-dock ${dockOpen ? 'is-open' : ''}`} aria-label={`Quick shop ${cfg.brand}`}>
        <div className="border-t border-white/10 text-white shadow-[0_-14px_44px_rgba(0,0,0,0.3)]"
          style={{ background: 'var(--color-brand-black)' }}>
          <button type="button" onClick={() => setDockOpen((v) => !v)} className="brand-dock-handle w-full" aria-expanded={dockOpen}>
            <span>Shop all {cfg.brand}</span>
            <ChevronUp className="chev h-4 w-4" />
          </button>

          <div className="relative mx-auto max-w-7xl px-3 pb-4 sm:px-12">
            <button type="button" aria-label="Scroll left" onClick={() => pushDock(-1)}
              className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-white hover:text-black sm:flex">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Scroll right" onClick={() => pushDock(1)}
              className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-white hover:text-black sm:flex">
              <ChevronRight className="h-5 w-5" />
            </button>

            <div ref={dockRef} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1">
              {cfg.products.map((p) => (
                <Link key={p.id} to={`/shop/${p.slug}`}
                  className="brand-dock-item group flex w-[148px] shrink-0 snap-start flex-col items-center rounded-2xl bg-white/5 p-3 text-center hover:bg-white/10">
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-white/10">
                    <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition group-hover:scale-110" />
                  </div>
                  <p className="mt-2 line-clamp-1 text-[11px] font-medium">{p.name}</p>
                  <p className="text-[11px] opacity-70">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
