import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Shop() {
  const { category } = useParams()
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let list = category ? products.filter((p) => p.category === category) : products
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [category, sort])

  const title = category ? categories.find((c) => c.slug === category)?.name || 'Shop' : 'All Products'

  return (
    <Container className="py-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-1 text-sm text-gray-500">{filtered.length} products</p>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-11 rounded-full border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[var(--color-accent-blue)]"
        >
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </Container>
  )
}
