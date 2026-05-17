import { Link } from 'react-router-dom'
import { Clock, Award } from 'lucide-react'
import { formatPKR } from '../data/labs.js'

export default function CourseCard({ course }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg">
      <Link to={`/labs/courses/${course.slug}`} className="block aspect-[4/3] overflow-hidden bg-[var(--color-brand-gray)]">
        <img src={course.image} alt={course.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded-full bg-[var(--color-brand-gray)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-700">
          {course.level}
        </span>
        <Link to={`/labs/courses/${course.slug}`} className="text-lg font-semibold text-[var(--color-brand-black)] hover:text-[var(--color-accent-blue)]">
          {course.title}
        </Link>
        <p className="mt-1 text-sm text-gray-500">Best for: {course.bestFor}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
          <span className="inline-flex items-center gap-1"><Award className="h-3.5 w-3.5" /> Certificate</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-base font-semibold">{formatPKR(course.fee)}</span>
          <Link to={`/labs/courses/${course.slug}`} className="rounded-full bg-[var(--color-brand-black)] px-4 py-2 text-xs font-medium text-white transition hover:bg-[var(--color-accent-blue)]">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
