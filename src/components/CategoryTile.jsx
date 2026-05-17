import { Link } from 'react-router-dom'

export default function CategoryTile({ category }) {
  return (
    <Link
      to={`/product-category/${category.slug}`}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="text-4xl transition group-hover:scale-110">{category.icon}</span>
      <span className="text-sm font-medium text-[var(--color-brand-black)] group-hover:text-[var(--color-accent-blue)]">
        {category.name}
      </span>
    </Link>
  )
}
