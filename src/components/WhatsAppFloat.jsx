import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923224525052"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[var(--color-brand-black)] py-3 pl-3 pr-4 text-white shadow-lg ring-1 ring-[var(--color-accent-blue)]/40 transition hover:shadow-xl"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-blue)] text-[var(--color-brand-black)]">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  )
}
