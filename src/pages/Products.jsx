import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Products() {
  const { products } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = ['all', ...new Set(products.map((p) => p.category).filter(Boolean))]

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div style={{ backgroundColor: '#1a100a', minHeight: '100vh' }}>
      <section style={{ padding: '140px 20px 80px', backgroundColor: '#1a100a' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', marginBottom: '60px' }}>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</h1>
            <div style={{ width: '80px', height: '2px', backgroundColor: '#d4af37' }}></div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '50px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '10px 28px',
                  borderRadius: '4px',
                  backgroundColor: category === cat ? '#d4af37' : 'transparent',
                  color: category === cat ? '#1a100a' : '#ffffff',
                  border: category === cat ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.4)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: 'Cairo, Tajawal, sans-serif'
                }}
              >
                {cat === 'all' ? 'الكل' : cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '14px 24px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                fontSize: '0.98rem',
                fontFamily: 'Cairo, Tajawal, sans-serif',
                borderRadius: '4px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
