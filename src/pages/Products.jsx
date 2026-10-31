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
    <div style={{ padding: '40px 0', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b2314', fontWeight: '800' }}>جميع المنتجات</h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '10px 16px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '250px' }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: '10px 16px', borderRadius: '6px', border: '1px solid #ddd' }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'كل التصنيفات' : cat}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
