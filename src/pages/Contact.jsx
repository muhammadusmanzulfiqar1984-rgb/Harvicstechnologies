import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function Contact() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-2 text-gray-600">We&apos;re here to help — reach out anytime.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="flex items-center gap-2 font-semibold"><MapPin className="h-5 w-5" /> Lahore</h3>
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
            <input required placeholder="First name" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
            <input required placeholder="Last name" className="h-11 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          </div>
          <input required type="email" placeholder="Email" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <input placeholder="Phone" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <textarea required placeholder="How can we help?" rows={5} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent-blue)]" />
          <Button variant="primary" size="lg" className="w-full">Send message</Button>
        </form>
      </div>
    </Container>
  )
}
