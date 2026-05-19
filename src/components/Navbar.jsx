import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, User, ChevronDown, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { megaMenu, labsMega } from '../data/megaMenu.js'
import { formatPKR } from '../data/labs.js'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useT } from '../context/LanguageContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)
  const { count } = useCart()
  const t = useT()

  const openMenu = (label) => {
    clearTimeout(closeTimer.current)
    setActive(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 150)
  }

  const current = megaMenu.find((m) => m.label === active)
  const isLabs = active === 'Labs'

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Harvy<span className="text-[var(--color-accent-blue)]">oice</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" onMouseLeave={scheduleClose}>
          {megaMenu.map((m) => (
            <div key={m.label} onMouseEnter={() => openMenu(m.label)} className="relative">
              <NavLink
                to={m.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 py-5 text-sm font-medium transition hover:text-[var(--color-accent-blue)] ${
                    isActive || active === m.label ? 'text-[var(--color-accent-blue)]' : 'text-gray-800'
                  }`
                }
              >
                {m.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </NavLink>
            </div>
          ))}
          <div onMouseEnter={() => openMenu('Labs')} className="relative">
            <NavLink
              to="/labs"
              className={({ isActive }) =>
                `inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-medium transition ${
                  isActive || isLabs
                    ? 'border-[var(--color-accent-blue)] text-[var(--color-accent-blue)]'
                    : 'border-gray-300 text-gray-800 hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]'
                }`
              }
            >
              Labs
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </NavLink>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="rounded-full p-2 hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </button>
          <LanguageSwitcher />
          <Link to="/account" aria-label="Account" className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative rounded-full p-2 hover:bg-gray-100">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent-red)] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            aria-label="Menu"
            className="rounded-full p-2 hover:bg-gray-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {current && (
        <div
          onMouseEnter={() => openMenu(current.label)}
          onMouseLeave={scheduleClose}
          className="absolute left-0 right-0 top-full hidden border-b border-gray-200 bg-white shadow-xl lg:block"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
            <div className="grid grid-cols-2 gap-8">
              {current.columns.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          onClick={() => setActive(null)}
                          className={`text-sm transition hover:text-[var(--color-accent-blue)] ${
                            l.strong ? 'font-semibold text-[var(--color-brand-black)]' : 'text-gray-700'
                          }`}
                        >
                          {l.label} {l.strong && <ChevronRight className="inline h-3 w-3" />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Featured</h4>
              <div className="grid grid-cols-3 gap-4">
                {current.featured.map((p) => (
                  <Link
                    key={p.id}
                    to={`/shop/${p.slug}`}
                    onClick={() => setActive(null)}
                    className="group block"
                  >
                    <div className="aspect-square overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                      <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition group-hover:scale-105" />
                    </div>
                    <p className="mt-2 text-xs font-medium text-gray-800 group-hover:text-[var(--color-accent-blue)]">{p.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isLabs && (
        <div
          onMouseEnter={() => openMenu('Labs')}
          onMouseLeave={scheduleClose}
          className="absolute left-0 right-0 top-full hidden border-b border-gray-200 bg-white shadow-xl lg:block"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {labsMega.columns.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          onClick={() => setActive(null)}
                          className={`text-sm transition hover:text-[var(--color-accent-blue)] ${
                            l.strong ? 'font-semibold text-[var(--color-brand-black)]' : 'text-gray-700'
                          }`}
                        >
                          {l.label} {l.strong && <ChevronRight className="inline h-3 w-3" />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Featured Courses</h4>
              <div className="grid grid-cols-3 gap-4">
                {labsMega.featuredCourses.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/labs/courses/${c.slug}`}
                    onClick={() => setActive(null)}
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                      <img src={c.image} alt={c.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition group-hover:scale-105" />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-gray-800 group-hover:text-[var(--color-accent-blue)]">{c.title}</p>
                    <p className="text-[11px] text-gray-500">{c.duration} · {formatPKR(c.fee)}</p>
                  </Link>
                ))}
              </div>
              <Link
                to="/labs/book"
                onClick={() => setActive(null)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-black)] px-5 py-2 text-xs font-medium text-white hover:opacity-90"
              >
                Book a repair <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {megaMenu.map((m) => {
              const isExp = mobileExpanded === m.label
              return (
                <div key={m.label} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setMobileExpanded(isExp ? null : m.label)}
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-medium text-gray-800"
                  >
                    {m.label}
                    <ChevronDown className={`h-4 w-4 transition ${isExp ? 'rotate-180' : ''}`} />
                  </button>
                  {isExp && (
                    <div className="space-y-3 px-4 pb-3">
                      {m.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">{col.title}</p>
                          <ul className="space-y-1">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  to={l.to}
                                  onClick={() => { setOpen(false); setMobileExpanded(null) }}
                                  className={`block py-1 text-sm ${l.strong ? 'font-semibold text-[var(--color-brand-black)]' : 'text-gray-700'}`}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Link
              to="/labs"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[var(--color-brand-black)] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Tech Labs
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
