import Container from '../../components/Container.jsx'
import InstructorCard from '../../components/InstructorCard.jsx'
import { instructors } from '../../data/labs.js'

export default function Instructors() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Instructors</h1>
      <p className="mt-2 text-gray-600">Industry experts with decades of combined repair experience.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((i) => <InstructorCard key={i.name} instructor={i} />)}
      </div>
    </Container>
  )
}
