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
import { useT } from '../context/LanguageContext.jsx'

export default function Home() {
  const t = useT()
  const iphones = products.filter((p) => p.category === 'iphone')
  const macs = products.filter((p) => p.category === 'mac')

  return (
    <>
      <HeroSlider />

      <section className="py-14 reveal">
        <Container>
          <SectionHeading eyebrow={t('home.browse')} title={t('home.shopByCategory')} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <CategoryTile key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 reveal">
        <Container>
          <SectionHeading eyebrow="New" title={t('home.iphoneFamily')} viewAll="/product-category/iphone" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {iphones.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 reveal">
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

      <section className="py-8 reveal">
        <Container>
          <SectionHeading eyebrow={t('home.performance')} title={t('home.macLineup')} viewAll="/product-category/mac" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {macs.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 reveal">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge icon={ShieldCheck} title={t('trust.pta')} subtitle={t('trust.ptaSub')} />
            <TrustBadge icon={Truck} title={t('trust.delivery')} subtitle={t('trust.deliverySub')} />
            <TrustBadge icon={CreditCard} title={t('trust.payments')} subtitle={t('trust.paymentsSub')} />
            <TrustBadge icon={Headphones} title={t('trust.support')} subtitle={t('trust.supportSub')} />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-brand-gray)] py-14 reveal">
        <Container>
          <SectionHeading eyebrow={t('home.reviews')} title={t('home.lovedByCustomers')} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((tm) => (
              <TestimonialCard key={tm.id} t={tm} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-brand-black)] py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('home.stayInLoop')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            {t('home.subscribeText')}
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
            <button className="h-12 rounded-full bg-[var(--color-accent-blue)] px-6 text-sm font-medium text-[var(--color-brand-black)] transition hover:opacity-90">
              {t('home.subscribe')}
            </button>
          </form>
        </Container>
      </section>
    </>
  )
}
