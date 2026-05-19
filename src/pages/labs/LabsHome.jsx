import { GraduationCap, Wrench, ShieldCheck, Users } from 'lucide-react'
import Container from '../../components/Container.jsx'
import Button from '../../components/Button.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'
import CourseCard from '../../components/CourseCard.jsx'
import ServiceCard from '../../components/ServiceCard.jsx'
import StatItem from '../../components/StatItem.jsx'
import InstructorCard from '../../components/InstructorCard.jsx'
import TestimonialCard from '../../components/TestimonialCard.jsx'
import TrustBadge from '../../components/TrustBadge.jsx'
import { courses, services, instructors, labStats, labTestimonials, galleryImages } from '../../data/labs.js'
import { useT } from '../../context/LanguageContext.jsx'

export default function LabsHome() {
  const t = useT()
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-brand-black)] text-white">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1800&q=80" alt="" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        </div>
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent-blue)]">{t('labs.eyebrow')}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {t('labs.heroTitle')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {t('labs.heroSubtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" to="/labs/courses">{t('labs.enrollNow')}</Button>
            <Button variant="secondary" size="lg" to="/labs/book" className="border-white text-white hover:bg-white hover:text-black">
              {t('labs.bookRepair')}
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {labStats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </Container>
      </section>

      {/* Courses */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t('labs.training')} title={t('labs.ourCourses')} viewAll="/labs/courses" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-brand-gray)] py-14">
        <Container>
          <SectionHeading eyebrow={t('labs.repair')} title={t('labs.labServices')} viewAll="/labs/services" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t('labs.whyHarvics')} title={t('labs.trusted')} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge icon={GraduationCap} title={t('labs.largestSetup')} subtitle={t('labs.largestSetupSub')} />
            <TrustBadge icon={Wrench} title={t('labs.practical')} subtitle={t('labs.practicalSub')} />
            <TrustBadge icon={ShieldCheck} title={t('labs.certified')} subtitle={t('labs.certifiedSub')} />
            <TrustBadge icon={Users} title={t('labs.jobSupport')} subtitle={t('labs.jobSupportSub')} />
          </div>
        </Container>
      </section>

      {/* Instructors */}
      <section className="bg-[var(--color-brand-gray)] py-14">
        <Container>
          <SectionHeading eyebrow={t('labs.team')} title={t('labs.meetInstructors')} viewAll="/labs/instructors" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((i) => <InstructorCard key={i.name} instructor={i} />)}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t('home.reviews')} title={t('labs.studentReviews')} viewAll="/labs/testimonials" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labTestimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t('labs.insideLab')} title={t('labs.gallery')} viewAll="/labs/gallery" />
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {galleryImages.slice(0, 8).map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-[var(--color-brand-gray)]">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--color-brand-black)] py-16 text-white">
        <Container className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('labs.readyTitle')}</h2>
          <p className="mt-3 max-w-xl text-gray-300">
            {t('labs.readySubtitle')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="lg" to="/labs/courses">View courses</Button>
            <Button variant="secondary" size="lg" href="tel:+923224525052" className="border-white text-white hover:bg-white hover:text-black">
              Call +92 322 4525052
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
