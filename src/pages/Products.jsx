import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

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
    <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px', color: '#3b2314', fontWeight: '800' }}>كل المنتجات</h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>اختر ما يناسبك من أجود أنواع البن</p>
      </div>

      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '12px 20px', borderRadius: '10px', border: '1px solid #e0e0e0', minWidth: '280px', fontSize: '1rem', fontFamily: 'Cairo' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '12px 20px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo', cursor: 'pointer' }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'كل التصنيفات' : cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
          <p style={{ fontSize: '1.2rem' }}>لا يوجد منتجات مطابقة للبحث</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
