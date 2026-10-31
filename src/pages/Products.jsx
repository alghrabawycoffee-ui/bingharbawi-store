import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Products() {
  const { products } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = ['all', ...new Set(products.map((p) => p.category).filter(Boolean))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || product.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <section style={{ padding: '70px 0 40px' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '800', letterSpacing: '-0.01em', marginBottom: '12px' }}>المتجر</h1>
          <p style={{ color: 'var(--text-secondary)' }}>كل منتجات بن الغرباوي في مكان واحد</p>
        </div>
      </section>

      <section style={{ paddingBottom: '90px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{ fontWeight: category === cat ? '700' : '500', color: category === cat ? 'var(--text-primary)' : 'var(--text-secondary)', paddingBottom: '4px', borderBottom: category === cat ? '1px solid var(--text-primary)' : '1px solid transparent' }}
                >
                  {cat === 'all' ? 'الكل' : cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="بحث..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: '10px 0', border: 'none', borderBottom: '1px solid var(--border)', background: 'transparent', minWidth: '240px' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(18px, 3vw, 34px)' }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
