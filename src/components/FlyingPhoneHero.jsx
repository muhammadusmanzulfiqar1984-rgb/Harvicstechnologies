import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { formatPrice } from '../data/products.js'

/**
 * Apple-style "flying / floating phone" hero.
 * - The phone floats up & down and gently tilts toward the cursor (3D parallax).
 * - Click "Spin" to make it rotate 360° (Apple's iPhone-17 intro effect).
 * - Cycles through brand colors with a fade swap.
 */
export default function FlyingPhoneHero({ cfg, category, accent }) {
  const stageRef = useRef(null)
  const phoneRef = useRef(null)
  const [spinning, setSpinning] = useState(false)
  const [colorIdx, setColorIdx] = useState(0)
  const colors = cfg.colors || []

  /* Auto-cycle colors */
  useEffect(() => {
    if (!colors.length) return
    const id = setInterval(() => setColorIdx((i) => (i + 1) % colors.length), 3500)
    return () => clearInterval(id)
  }, [colors.length])

  /* Tilt towards mouse */
  useEffect(() => {
    const stage = stageRef.current
    const phone = phoneRef.current
    if (!stage || !phone) return

    const onMove = (e) => {
      if (spinning) return
      const r = stage.getBoundingClientRect()
      const cx = (e.clientX - r.left) / r.width  - 0.5
      const cy = (e.clientY - r.top)  / r.height - 0.5
      phone.style.setProperty('--rx', `${cx * 18}deg`)
      phone.style.setProperty('--ry', `${-cy * 14}deg`)
    }
    const onLeave = () => {
      phone.style.setProperty('--rx', `0deg`)
      phone.style.setProperty('--ry', `0deg`)
    }
    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', onLeave)
    return () => {
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', onLeave)
    }
  }, [spinning])

  const activeColor = colors[colorIdx] || { name: '', hex: '#000' }

  return (
    <section
      ref={stageRef}
      className="fly-stage relative overflow-hidden bg-black text-white"
      style={{
        background: `radial-gradient(circle at 50% 30%, ${accent}22 0%, #000 60%)`,
      }}
    >
      {/* Glow halo behind the phone */}
      <div className="fly-glow" style={{ background: accent }} />

      <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* ── Copy ─────────────────────────────────────── */}
        <div className="text-center lg:text-left">
          {cfg.heroEyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: accent }}>
              {cfg.heroEyebrow}
            </p>
          )}
          <h1 className="text-5xl font-semibold tracking-tight drop-shadow-lg sm:text-7xl">
            {cfg.title}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-gray-200 sm:text-xl lg:mx-0">
            {cfg.tagline}
          </p>

          {/* Color name + swatches */}
          {colors.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                {activeColor.name}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {colors.map((c, i) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    onClick={() => setColorIdx(i)}
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      i === colorIdx ? 'scale-110 border-white' : 'border-white/30 hover:border-white/70'
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              to={cfg.products[0] ? `/shop/${cfg.products[0].slug}` : `/product-category/${category}`}
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: accent }}
            >
              Buy from {formatPrice(cfg.startingPrice)}
            </Link>
            <button
              type="button"
              onClick={() => setSpinning((v) => !v)}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              {spinning ? 'Stop spin' : 'Spin to view'}
            </button>
            <a href="#highlights" className="inline-flex h-12 items-center gap-1 text-sm font-medium text-white hover:underline">
              Get the highlights <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── Flying phone ─────────────────────────────── */}
        <div className="flex items-center justify-center">
          <div className="relative h-[520px] w-[280px] sm:h-[560px] sm:w-[320px]">
            {/* Color background ring that swaps with active color */}
            <div
              className="absolute inset-6 rounded-[42%] blur-3xl transition-colors duration-700"
              style={{ background: activeColor.hex, opacity: 0.45 }}
            />

            <div
              ref={phoneRef}
              className={`fly-phone tilt relative h-full w-full ${spinning ? 'spin' : ''}`}
              style={{
                borderRadius: 48,
                background: `linear-gradient(160deg, ${activeColor.hex}, #111)`,
                border: '6px solid rgba(255,255,255,0.08)',
                boxShadow: `inset 0 0 0 2px rgba(255,255,255,0.06), 0 0 90px ${accent}55`,
              }}
            >
              {/* "Screen" */}
              <div
                className="absolute inset-3 overflow-hidden rounded-[40px]"
                style={{ background: `linear-gradient(180deg, ${accent}cc, ${activeColor.hex} 90%)` }}
              >
                <img
                  src={cfg.heroImage}
                  alt={cfg.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover opacity-75 mix-blend-overlay"
                />
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-black/70" />

                {/* Brand badge on the screen */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                    {cfg.brand}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{cfg.title}</p>
                </div>
              </div>

              {/* Side buttons (faux) */}
              <span className="absolute left-[-7px] top-24 h-14 w-1 rounded-full bg-white/15" />
              <span className="absolute left-[-7px] top-44 h-20 w-1 rounded-full bg-white/15" />
              <span className="absolute right-[-7px] top-32 h-24 w-1 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating mini scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <ChevronDownAnim />
      </div>
    </section>
  )
}

function ChevronDownAnim() {
  return (
    <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Apple-style "fan of colors" gallery — multiple devices arranged in a
 * curve, each hover lifts the card and brings it forward.
 */
export function ColorFan({ cfg, accent }) {
  if (!cfg.colors || cfg.colors.length === 0) return null
  const cards = cfg.colors.slice(0, 6)
  const last = cards.length - 1
  const fanArc = 60 // total spread degrees

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 opacity-50" style={{ background: `radial-gradient(circle at 50% 50%, ${accent}33 0%, #000 70%)` }} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: accent }}>Colors</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Pick your shade.</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-300">
          Available in {cards.length} fresh finishes. Hover any color to bring it forward.
        </p>

        <div className="fan mx-auto mt-12 max-w-3xl">
          {cards.map((c, i) => {
            const rot = -fanArc / 2 + (fanArc * i) / Math.max(1, last)
            return (
              <div
                key={c.name}
                className="fan-card"
                title={c.name}
                style={{
                  background: `linear-gradient(160deg, ${c.hex}, #1d1d1f)`,
                  transform: `rotate(${rot}deg)`,
                  ['--rot']: `${rot}deg`,
                  zIndex: 10 - Math.abs(i - last / 2),
                }}
              >
                <div className="flex h-full flex-col items-center justify-end pb-6">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium backdrop-blur">
                    {c.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-gray-400">
          <ChevronLeft className="h-4 w-4" /> Hover any device <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}
