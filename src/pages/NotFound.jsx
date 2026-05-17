import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-medium text-[var(--color-accent-blue)]">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-3 text-gray-600">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Button variant="dark" to="/" className="mt-6">Back to home</Button>
    </Container>
  )
}
