import Container from '../../components/Container.jsx'
import CourseCard from '../../components/CourseCard.jsx'
import { courses } from '../../data/labs.js'

export default function CoursesList() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Courses</h1>
      <p className="mt-2 text-gray-600">Practical, industry-ready mobile repair training programs.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
      </div>
    </Container>
  )
}
