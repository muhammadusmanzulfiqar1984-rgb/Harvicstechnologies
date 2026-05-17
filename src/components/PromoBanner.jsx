import { Link } from 'react-router-dom'

export default function PromoBanner({ image, eyebrow, title, subtitle, ctaLabel = 'Shop now', to, theme = 'dark' }) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  return (
    <Link
      to={to}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-gradient-to-t from-white/80 via-white/30 to-transparent'}`} />
      <div className={`absolute inset-0 flex flex-col justify-end p-6 ${textColor}`}>
        {eyebrow && <p className="text-xs font-medium uppercase tracking-wider opacity-80">{eyebrow}</p>}
        <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</h3>
        {subtitle && <p className="mt-1 text-sm opacity-90">{subtitle}</p>}
        <span className="mt-4 inline-flex w-fit items-center text-sm font-medium underline-offset-4 group-hover:underline">
          {ctaLabel} →
        </span>
      </div>
    </Link>
  )
}
