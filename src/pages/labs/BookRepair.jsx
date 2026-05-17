import { useState } from 'react'
import Container from '../../components/Container.jsx'
import Button from '../../components/Button.jsx'
import { services } from '../../data/labs.js'

export default function BookRepair() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-semibold">Thank you!</h1>
        <p className="mt-3 text-gray-600">We&apos;ve received your request. Our team will contact you within 1 working hour.</p>
        <Button variant="dark" to="/labs" className="mt-6">Back to Labs</Button>
      </Container>
    )
  }

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Book a repair</h1>
      <p className="mt-2 text-gray-600">Tell us about your device — we&apos;ll send a quote on WhatsApp.</p>

      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        className="mt-10 grid max-w-2xl gap-4 rounded-2xl border border-gray-200 p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Full name" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <input required placeholder="Phone / WhatsApp" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
        </div>
        <input required placeholder="Device brand & model (e.g., iPhone 14 Pro)" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />

        <select required defaultValue="" className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]">
          <option value="" disabled>Select service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other / Not sure</option>
        </select>

        <textarea rows={4} placeholder="Describe the issue" className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />

        <Button variant="primary" size="lg" className="w-full">Send request</Button>
      </form>
    </Container>
  )
}
