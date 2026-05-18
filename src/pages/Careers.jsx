import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MapPin, Clock, Briefcase, Banknote, ArrowRight, ChevronLeft, Check } from 'lucide-react'
import Container from '../components/Container.jsx'
import { jobs } from '../data/jobs.js'

export function Careers() {
  const [q, setQ] = useState('')
  const filtered = jobs.filter((j) =>
    (j.title + j.department + j.location + j.type).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <>
      <section className="bg-[var(--color-brand-black)] text-white">
        <Container className="py-20 sm:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent-blue)] reveal">Careers</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl reveal reveal-delay-1">
            Build the future of consumer tech in Pakistan.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-300 reveal reveal-delay-2">
            Join Harvics Global Ventures — Harvyoice retail, Harvics Tech Labs training, and the
            team behind Pakistan's most trusted device store.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold">{filtered.length} open positions</h2>
              <p className="text-sm text-gray-500">Updated daily · Lahore-first, remote-friendly</p>
            </div>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search role, team, location…"
              className="h-11 w-full max-w-xs rounded-full border border-gray-300 px-5 text-sm outline-none focus:border-[var(--color-accent-blue)]"
            />
          </div>

          <ul className="grid gap-4">
            {filtered.map((j, i) => (
              <li key={j.slug} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <Link
                  to={`/careers/${j.slug}`}
                  className="card-lift block rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-blue)]">{j.department}</p>
                      <h3 className="mt-1 text-lg font-semibold text-[var(--color-brand-black)]">{j.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{j.summary}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-gray-400 transition group-hover:translate-x-1 sm:block" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                    <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {j.type}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.experience}</span>
                    <span className="inline-flex items-center gap-1"><Banknote className="h-3.5 w-3.5" /> {j.salary}</span>
                    <span className="ml-auto text-gray-400">{j.posted}</span>
                  </div>
                </Link>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
                No roles match "{q}". Try a broader search.
              </li>
            )}
          </ul>
        </Container>
      </section>
    </>
  )
}

export function CareerDetail() {
  const { slug } = useParams()
  const job = jobs.find((j) => j.slug === slug)
  const [submitted, setSubmitted] = useState(false)

  if (!job) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-semibold">Job not found</h1>
        <Link to="/careers" className="mt-4 inline-block text-[var(--color-accent-blue)] hover:underline">
          ← Back to all jobs
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-14 lg:py-20">
      <Link to="/careers" className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--color-accent-blue)]">
        <ChevronLeft className="h-4 w-4" /> All careers
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-blue)]">{job.department}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{job.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
            <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {job.experience}</span>
            <span className="inline-flex items-center gap-1"><Banknote className="h-4 w-4" /> {job.salary}</span>
          </div>

          <p className="mt-6 text-gray-700">{job.summary}</p>

          <h2 className="mt-10 text-lg font-semibold">What you'll do</h2>
          <ul className="mt-3 space-y-2">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-gray-700"><Check className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-accent-blue)]" />{r}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-semibold">What we're looking for</h2>
          <ul className="mt-3 space-y-2">
            {job.requirements.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-gray-700"><Check className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-accent-blue)]" />{r}</li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold">Apply for this role</h3>
            <p className="mt-1 text-xs text-gray-500">We respond within 5 business days.</p>
            {submitted ? (
              <div className="mt-6 rounded-xl bg-[var(--color-brand-gray)] p-4 text-sm">
                <p className="font-medium text-[var(--color-brand-black)]">Thanks — your application is in.</p>
                <p className="mt-1 text-gray-600">Our talent team will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="mt-5 space-y-3">
                <input required placeholder="Full name" className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
                <input required type="email" placeholder="Email" className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
                <input required type="tel" placeholder="WhatsApp / Phone" className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
                <input placeholder="LinkedIn / Portfolio URL" className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
                <textarea rows="4" required placeholder="Why is this you?" className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
                <button className="h-11 w-full rounded-full bg-[var(--color-brand-black)] text-sm font-medium text-white transition hover:opacity-90">
                  Submit application
                </button>
                <p className="text-[11px] text-gray-500">Or email your CV to <a href="mailto:careers@harvyoice.com" className="text-[var(--color-accent-blue)] hover:underline">careers@harvyoice.com</a></p>
              </form>
            )}
          </div>
        </aside>
      </div>
    </Container>
  )
}
