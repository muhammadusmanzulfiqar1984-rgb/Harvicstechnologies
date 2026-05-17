import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923224525052"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
