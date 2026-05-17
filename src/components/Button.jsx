import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-[var(--color-accent-blue)] text-white hover:bg-blue-700',
  dark: 'bg-[var(--color-brand-black)] text-white hover:bg-black',
  secondary:
    'border border-[var(--color-brand-black)] text-[var(--color-brand-black)] hover:bg-[var(--color-brand-black)] hover:text-white',
  ghost: 'text-[var(--color-brand-black)] hover:bg-gray-100',
  link: 'text-[var(--color-accent-blue)] hover:underline px-0',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  const Tag = as
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  )
}
