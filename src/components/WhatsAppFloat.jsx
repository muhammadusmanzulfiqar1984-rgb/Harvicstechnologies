export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923224525052"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-brand-black)] py-3 pl-4 pr-5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(107,31,43,0.35)] ring-1 ring-[var(--color-accent-blue)]/30 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(107,31,43,0.45)]"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--color-accent-blue)]" fill="currentColor" aria-hidden="true">
        <path d="M20 4H6a2 2 0 0 0-2 2v15a1 1 0 0 0 1.6.8L9 19h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-9 9H8v-2h3v2zm5 0h-3v-2h3v2z"/>
      </svg>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
