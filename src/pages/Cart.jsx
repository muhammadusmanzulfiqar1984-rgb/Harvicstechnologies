import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Cart() {
  const { items, total, setQty, remove, clear } = useCart()

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Looks like you haven&apos;t added anything yet.</p>
        <Button variant="dark" to="/shop" className="mt-6">
          Continue shopping
        </Button>
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">Your cart</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {items.map((i) => (
              <li key={i.id} className="flex gap-4 py-6">
                <Link to={`/shop/${i.slug}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                  <img src={i.image} alt={i.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <Link to={`/shop/${i.slug}`} className="font-medium hover:text-[var(--color-accent-blue)]">
                      {i.name}
                    </Link>
                    <p className="font-semibold">{formatPrice(i.price * i.qty)}</p>
                  </div>
                  <p className="text-sm text-gray-500">{formatPrice(i.price)} each</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="inline-flex items-center rounded-full border border-gray-300">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        aria-label="Decrease quantity"
                        className="p-2 hover:bg-gray-100 rounded-l-full"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        aria-label="Increase quantity"
                        className="p-2 hover:bg-gray-100 rounded-r-full"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => remove(i.id)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-[var(--color-accent-red)]"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={clear}
            className="mt-4 text-sm text-gray-500 hover:text-[var(--color-accent-red)]"
          >
            Clear cart
          </button>
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-[var(--color-brand-gray)] p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="text-green-600">Free</dd>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <Button variant="dark" size="lg" className="mt-6 w-full">
            Checkout
          </Button>
          <Button variant="ghost" to="/shop" className="mt-2 w-full">
            Continue shopping
          </Button>
        </aside>
      </div>
    </Container>
  )
}
