import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiSearch, FiPlus } from 'react-icons/fi'
import Header from '../components/layout/Header'

export default function Home() {
  const { products } = useProducts()
  const { addToCart } = useCart()
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '12px 14px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <FiSearch size={18} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6b6b6b' }} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '11px 42px 11px 14px', borderRadius: '8px', border: '1px solid #e5e5e5', backgroundColor: '#FFFFFF', fontSize: '0.93rem' }}
          />
        </div>
      </div>
      <div style={{ padding: '16px 14px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '12px' }}>جميع المنتجات</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {filtered.map((product) => (
            <div key={product.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', overflow: 'hidden', border: '1px solid #f0f0f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '130px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px 12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '42px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.name}</h3>
                <span style={{ fontWeight: '800' }}>{product.price} ر.س</span>
              </div>
              <button onClick={() => addToCart(product)} disabled={!product.inStock} style={{ position: 'absolute', bottom: '10px', left: '10px', width: '30px', height: '30px', borderRadius: '6px', backgroundColor: product.inStock ? '#1A1A1A' : '#d1d5db', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiPlus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
