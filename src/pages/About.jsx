import Container from '../components/Container.jsx'

export default function About() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About Harvyoice</h1>
      <div className="prose prose-gray mt-6 max-w-3xl text-gray-700">
        <p>
          Harvyoice is Pakistan&apos;s trusted destination for authentic Apple products. With
          retail outlets in Karachi and Lahore and nationwide delivery, we&apos;ve been helping
          customers experience the latest from Apple — from iPhone and Mac to Apple Watch
          and AirPods.
        </p>
        <p className="mt-4">
          Every product we sell is genuine, PTA-approved where applicable, and backed by
          official warranty. Our team is ready to guide you 7 days a week.
        </p>
      </div>
    </Container>
  )
}
