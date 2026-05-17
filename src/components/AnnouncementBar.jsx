import { Phone, Truck } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-brand-black)] text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Free nationwide delivery on orders over PKR 25,000</span>
          <span className="sm:hidden">Free delivery over 25K</span>
        </div>
        <a href="tel:+923224525052" className="flex items-center gap-2 hover:text-blue-300">
          <Phone className="h-3.5 w-3.5" />
          <span>+92 322 4525052</span>
        </a>
      </div>
    </div>
  )
}
