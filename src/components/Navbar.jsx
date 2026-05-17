import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { categories } from '../data/products.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Harvy<span className="text-[var(--color-accent-blue)]">oice</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {categories.map((c) => (
            <NavLink
              key={c.slug}
              to={`/product-category/${c.slug}`}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-[var(--color-accent-blue)] ${
                  isActive ? 'text-[var(--color-accent-blue)]' : 'text-gray-700'
                }`
              }
            >
              {c.name}
            </NavLink>
          ))}
          <NavLink
            to="/labs"
            className={({ isActive }) =>
              `rounded-full border px-3 py-1 text-sm font-medium transition ${
                isActive
                  ? 'border-[var(--color-accent-blue)] text-[var(--color-accent-blue)]'
                  : 'border-gray-300 text-gray-700 hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)]'
              }`
            }
          >
            Labs
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="rounded-full p-2 hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </button>
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

      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {categories.map((c) => (
              <NavLink
                key={c.slug}
                to={`/product-category/${c.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                {c.name}
              </NavLink>
            ))}
            <NavLink
              to="/labs"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-semibold text-[var(--color-accent-blue)] hover:bg-gray-100"
            >
              Tech Labs
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
