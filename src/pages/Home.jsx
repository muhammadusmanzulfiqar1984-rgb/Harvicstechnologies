import { ShieldCheck, Truck, CreditCard, Headphones } from 'lucide-react'
import Container from '../components/Container.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CategoryTile from '../components/CategoryTile.jsx'
import ProductCard from '../components/ProductCard.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import TrustBadge from '../components/TrustBadge.jsx'
import { categories, products, testimonials } from '../data/products.js'

export default function Home() {
  const iphones = products.filter((p) => p.category === 'iphone')
  const macs = products.filter((p) => p.category === 'mac')

  return (
    <>
      <HeroSlider />

      {/* Category tiles */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow="Browse" title="Shop by category" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <CategoryTile key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured iPhones */}
      <section className="py-8">
        <Container>
          <SectionHeading eyebrow="New" title="iPhone 17 family" viewAll="/product-category/iphone" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {iphones.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dual promo */}
      <section className="py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <PromoBanner
              image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&q=80"
              eyebrow="Now Available"
              title="MacBook Air M5"
              subtitle="Speed of light. Weight of air."
              to="/shop/macbook-air-13-m5"
            />
            <PromoBanner
              image="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1400&q=80"
              eyebrow="Built for adventure"
              title="Apple Watch Ultra 3"
              subtitle="Your most capable Watch yet."
              to="/shop/apple-watch-ultra-3"
            />
          </div>
        </Container>
      </section>

      {/* Featured Macs */}
      <section className="py-8">
        <Container>
          <SectionHeading eyebrow="Performance" title="Mac lineup" viewAll="/product-category/mac" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {macs.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust badges */}
      <section className="py-14">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge icon={ShieldCheck} title="PTA Approved" subtitle="Genuine units, fully compliant" />
            <TrustBadge icon={Truck} title="Nationwide Delivery" subtitle="Fast & free over PKR 25,000" />
            <TrustBadge icon={CreditCard} title="Secure Payments" subtitle="Visa, Master, COD available" />
            <TrustBadge icon={Headphones} title="Expert Support" subtitle="WhatsApp us 7 days a week" />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-brand-gray)] py-14">
        <Container>
          <SectionHeading eyebrow="Reviews" title="Loved by customers" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="bg-[var(--color-brand-black)] py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Stay in the loop</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Get launch alerts, exclusive offers, and product news straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full bg-white/10 px-5 text-sm text-white placeholder:text-gray-400 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-[var(--color-accent-blue)]"
            />
            <button className="h-12 rounded-full bg-[var(--color-accent-blue)] px-6 text-sm font-medium transition hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </Container>
      </section>
    </>
  )
}
