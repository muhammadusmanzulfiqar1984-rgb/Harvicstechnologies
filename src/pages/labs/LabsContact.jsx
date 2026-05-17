import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Container from '../../components/Container.jsx'
import Button from '../../components/Button.jsx'

export default function LabsContact() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact Harvics Tech Labs</h1>
      <p className="mt-2 text-gray-600">Visit us, call us, or send a message — we usually reply within an hour.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="flex items-center gap-2 font-semibold"><MapPin className="h-5 w-5" /> Lahore Lab</h3>
            <p className="mt-2 text-gray-600">Shop #22, 2nd Floor, IT Tower, Gulberg 3, Lahore, Pakistan.</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +92 322 4525052</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@harvyoice.com</p>
          </div>
          <Button href="https://wa.me/923224525052" variant="dark">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </Button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-gray-200 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
            <input required placeholder="Phone" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          </div>
          <input type="email" placeholder="Email (optional)" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <select defaultValue="" className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]">
            <option value="" disabled>I&apos;m interested in…</option>
            <option>A course</option>
            <option>A repair</option>
            <option>Bulk / business enquiry</option>
            <option>Other</option>
          </select>
          <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <Button variant="primary" size="lg" className="w-full">Send message</Button>
        </form>
      </div>
    </Container>
  )
}
