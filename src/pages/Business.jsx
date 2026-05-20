import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, FileText, Truck, ShieldCheck, Users, ArrowRight, Plus, Minus, X } from 'lucide-react'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { products, formatPrice } from '../data/products.js'

const PERKS = [
  { icon: FileText,    title: 'Volume pricing',      text: 'Tiered discounts from 10 units. Custom quotes for fleet rollouts.' },
  { icon: Truck,       title: 'Nationwide delivery', text: 'Same-day in Lahore, Karachi, Islamabad. 24–48h elsewhere.' },
  { icon: ShieldCheck, title: 'PTA-approved stock',  text: 'Every unit verified with paperwork bundled per delivery.' },
  { icon: Users,       title: 'Dedicated account',   text: 'A named account manager from quote to after-sales.' },
]

const INDUSTRIES = [
  'Corporate / HR fleet',
  'Education',
  'Healthcare',
  'Retail / Hospitality',
  'Logistics',
  'Government',
  'Resellers / Distributors',
  'Other',
]

/**
 * B2B inquiry page. Users can add multiple SKUs with quantities, fill out
 * a buyer profile and submit a bulk quote request. No backend wired here —
 * submission opens a pre-filled WhatsApp message so the sales team gets the
 * inquiry in one tap.
 */
export default function Business() {
  const [lines, setLines] = useState([{ id: '', qty: 10 }])
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', industry: 'Corporate / HR fleet', notes: '',
  })

  const addLine    = () => setLines((p) => [...p, { id: '', qty: 10 }])
  const removeLine = (i) => setLines((p) => p.filter((_, idx) => idx !== i))
  const updateLine = (i, patch) => setLines((p) => p.map((l, idx) => (idx === i ? { ...l, ...patch } : l)))

  const totalUnits = lines.reduce((s, l) => s + (Number(l.qty) || 0), 0)
  const totalValue = lines.reduce((s, l) => {
    const p = products.find((x) => x.id === l.id)
    return p ? s + p.price * (Number(l.qty) || 0) : s
  }, 0)

  const onSubmit = (e) => {
    e.preventDefault()
    const skuList = lines
      .filter((l) => l.id)
      .map((l) => {
        const p = products.find((x) => x.id === l.id)
        return `• ${p?.name || l.id} × ${l.qty}`
      })
      .join('%0A')

    const body =
      `*Harvyoice B2B Inquiry*%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Company: ${encodeURIComponent(form.company)}%0A` +
      `Industry: ${encodeURIComponent(form.industry)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A%0A` +
      `*Items*%0A${skuList}%0A%0A` +
      `Estimated total: ${formatPrice(totalValue)}%0A%0A` +
      `Notes: ${encodeURIComponent(form.notes || '—')}`

    window.open(`https://wa.me/923224525052?text=${body}`, '_blank', 'noopener')
  }

  return (
    <div className="pb-24">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 text-white"
        style={{
          background:
            'radial-gradient(circle at 25% 25%, rgba(195,163,94,0.18) 0%, transparent 55%),' +
            'radial-gradient(circle at 80% 75%, rgba(107,31,43,0.35) 0%, transparent 60%),' +
            'linear-gradient(160deg, #0c0608 0%, #1a0d12 60%, #2a121b 100%)',
        }}
      >
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-blue)]">
            Harvyoice for Business
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Buy in bulk. Get it cheaper. Delivered faster.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Whether you're equipping a corporate team, fitting out classrooms,
            or stocking your reseller channel — request a custom quote and a
            specialist will respond within one business day.
          </p>
        </Container>
      </section>

      {/* Perks */}
      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <div key={p.title} className="card-lift rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote builder */}
      <section className="bg-[var(--color-brand-gray)] py-20">
        <Container>
          <SectionHeading eyebrow="Quote builder" title="Build your bulk order." />
          <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Line items */}
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Items</h3>
                <button
                  type="button"
                  onClick={addLine}
                  className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]"
                >
                  <Plus className="h-3.5 w-3.5" /> Add product
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {lines.map((line, i) => {
                  const p = products.find((x) => x.id === line.id)
                  return (
                    <div key={i} className="grid grid-cols-[1fr_90px_36px] items-center gap-3 rounded-2xl border border-gray-200 p-3">
                      <select
                        value={line.id}
                        onChange={(e) => updateLine(i, { id: e.target.value })}
                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]"
                      >
                        <option value="">Select product…</option>
                        {products.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.name} — {formatPrice(opt.price)}
                          </option>
                        ))}
                      </select>
                      <input
                        type="number"
                        min={1}
                        value={line.qty}
                        onChange={(e) => updateLine(i, { qty: e.target.value })}
                        className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]"
                      />
                      <button
                        type="button"
                        aria-label="Remove line"
                        onClick={() => removeLine(i)}
                        disabled={lines.length === 1}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      {p && (
                        <p className="col-span-3 -mt-1 text-xs text-gray-500">
                          Line total: <span className="font-medium text-gray-700">{formatPrice(p.price * (Number(line.qty) || 0))}</span>
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                <span className="text-gray-500">{totalUnits} unit{totalUnits !== 1 ? 's' : ''}</span>
                <span className="text-lg font-semibold">{formatPrice(totalValue)}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Final volume discount will be confirmed in your quote.
              </p>
            </div>

            {/* Buyer details */}
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Your details</h3>
              <div className="mt-5 space-y-3">
                {[
                  { k: 'name',    label: 'Full name',    required: true, type: 'text'  },
                  { k: 'company', label: 'Company name', required: true, type: 'text'  },
                  { k: 'email',   label: 'Email',        required: true, type: 'email' },
                  { k: 'phone',   label: 'Phone',        required: true, type: 'tel'   },
                ].map((f) => (
                  <label key={f.k} className="block text-xs font-medium text-gray-700">
                    {f.label}{f.required && ' *'}
                    <input
                      type={f.type}
                      required={f.required}
                      value={form[f.k]}
                      onChange={(e) => setForm((s) => ({ ...s, [f.k]: e.target.value }))}
                      className="mt-1 h-10 w-full rounded-lg border border-gray-200 px-3 text-sm font-normal outline-none focus:border-[var(--color-accent-blue)]"
                    />
                  </label>
                ))}

                <label className="block text-xs font-medium text-gray-700">
                  Industry
                  <select
                    value={form.industry}
                    onChange={(e) => setForm((s) => ({ ...s, industry: e.target.value }))}
                    className="mt-1 h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm font-normal outline-none focus:border-[var(--color-accent-blue)]"
                  >
                    {INDUSTRIES.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </label>

                <label className="block text-xs font-medium text-gray-700">
                  Notes (optional)
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-normal outline-none focus:border-[var(--color-accent-blue)]"
                    placeholder="Delivery deadlines, payment terms, etc."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent-blue)] text-sm font-semibold text-white transition hover:opacity-90"
              >
                Send via WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2 text-center text-[11px] text-gray-500">
                Your inquiry is sent directly to our sales team. We respond within one business day.
              </p>
            </div>
          </form>
        </Container>
      </section>
    </div>
  )
}
