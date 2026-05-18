import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import Container from './Container.jsx'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
)
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.3-1C16.5 3.6 12 3.6 12 3.6s-4.5 0-7.8.3c-.5.1-1.5.1-2.3 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.7.3 7.7.3s4.5 0 7.8-.3c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 14.9V8.1l5.8 3.4-5.8 3.4z"/></svg>
)

const cols = [
  {
    title: 'Shop & Learn',
    links: [
      { to: '/shop', label: 'Shop' },
      { to: '/product-category/iphone', label: 'iPhone' },
      { to: '/product-category/mac', label: 'Mac' },
      { to: '/product-category/ipad', label: 'iPad' },
      { to: '/product-category/watch', label: 'Watch' },
      { to: '/product-category/accessories', label: 'Accessories' },
    ],
  },
  {
    title: 'Account',
    links: [
      { to: '/account', label: 'My Account' },
      { to: '/account/orders', label: 'Orders' },
      { to: '/wishlist', label: 'Wishlist' },
      { to: '/compare', label: 'Compare' },
      { to: '/cart', label: 'Cart' },
    ],
  },
  {
    title: 'Tech Labs',
    links: [
      { to: '/labs', label: 'Harvics Tech Labs' },
      { to: '/labs/courses', label: 'Courses' },
      { to: '/labs/services', label: 'Repair Services' },
      { to: '/labs/book', label: 'Book a Repair' },
      { to: '/labs/instructors', label: 'Instructors' },
      { to: '/labs/gallery', label: 'Gallery' },
      { to: '/labs/contact', label: 'Lab Contact' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/contact-us', label: 'Contact Us' },
      { to: '/delivery-information', label: 'Delivery Info' },
      { to: '/return-exchange-policy', label: 'Returns' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/about-us', label: 'About Us' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--color-brand-gray)] text-sm text-gray-700">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-[var(--color-brand-black)]">
              Harvy<span className="text-[var(--color-accent-blue)]">oice</span>
            </Link>
            <p className="mt-4 max-w-sm text-gray-600">
              Pakistan&apos;s destination for authentic Apple products. Genuine warranty,
              nationwide delivery, secure payments.
            </p>
            <div className="mt-6 space-y-2 text-gray-600">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Shop #22, 2nd Floor, IT Tower, Gulberg 3, Lahore, Pakistan</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +92 322 4525052</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@harvyoice.com</p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold text-[var(--color-brand-black)]">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-[var(--color-accent-blue)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-gray-300 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Harvyoice. All rights reserved.</p>
            <p className="mt-1">A project by <span className="font-medium text-gray-700">Harvics Global Ventures</span>.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-[var(--color-accent-blue)]">Privacy Policy</Link>
            <span className="text-gray-300">·</span>
            <Link to="/terms" className="hover:text-[var(--color-accent-blue)]">Terms of Use</Link>
            <span className="text-gray-300">·</span>
            <Link to="/cookie-policy" className="hover:text-[var(--color-accent-blue)]">Cookie Policy</Link>
            <span className="text-gray-300">·</span>
            <Link to="/return-exchange-policy" className="hover:text-[var(--color-accent-blue)]">Returns</Link>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" aria-label="Facebook" className="hover:text-[var(--color-accent-blue)]"><FacebookIcon className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--color-accent-blue)]"><InstagramIcon className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--color-accent-blue)]"><YoutubeIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
