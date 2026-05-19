import { Link, useParams } from 'react-router-dom'
import { Clock, Award, CheckCircle2 } from 'lucide-react'
import Container from '../../components/Container.jsx'
import Button from '../../components/Button.jsx'
import { courses, formatPKR } from '../../data/labs.js'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Course not found</h1>
        <Link to="/labs/courses" className="mt-4 inline-block text-[var(--color-accent-blue)] hover:underline">
          Back to courses
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/labs" className="hover:text-[var(--color-accent-blue)]">Labs</Link>
        <span className="mx-2">/</span>
        <Link to="/labs/courses" className="hover:text-[var(--color-accent-blue)]">Courses</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{course.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-[var(--color-brand-gray)]">
          <img src={course.image} alt={course.title} loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover" />
        </div>

        <div>
          <span className="inline-block rounded-full bg-[var(--color-brand-gray)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
            {course.level}
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{course.title}</h1>
          <p className="mt-2 text-gray-600">Best for: {course.bestFor}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
            <span className="inline-flex items-center gap-1"><Award className="h-4 w-4" /> Certificate included</span>
          </div>

          <p className="mt-6 text-3xl font-semibold">{formatPKR(course.fee)}</p>
          <p className="text-sm text-gray-500">One-time course fee — easy installments available</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="dark" size="lg" to="/labs/book">Enroll now</Button>
            <Button variant="secondary" size="lg" href="https://wa.me/923224525052">Chat on WhatsApp</Button>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold">What you&apos;ll learn</h2>
            <ul className="mt-4 space-y-2">
              {course.syllabus.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-blue)]" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
