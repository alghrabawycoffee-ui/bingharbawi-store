import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'

export default function Home() {
  const { products } = useProducts()
  const { addToCart } = useCart()
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <div style={{ backgroundColor: '#f9f9f9', padding: '30px 14px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#1A1A1A' }}>أجود أنواع البن العربي</h1>
          <p style={{ color: '#4f4f4f', fontSize: '1rem' }}>تحميص طازج • جودة عالية • توصيل سريع</p>
        </div>
      </div>
      <div style={{ padding: '16px 14px 0', maxWidth: '1200px', margin: '0 auto' }}>
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
      <div style={{ padding: '24px 14px 50px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800' }}>منتجاتنا</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
          {filtered.map((product) => (
            <Link to={/product/} key={product.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', overflow: 'hidden', border: '1px solid #f0f0f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px 12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '42px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.name}</h3>
                <span style={{ fontWeight: '800' }}>{product.price} ر.س</span>
              </div>
              <button onClick={(e) => { e.preventDefault(); addToCart(product); }} disabled={!product.inStock} style={{ position: 'absolute', bottom: '10px', left: '10px', width: '30px', height: '30px', borderRadius: '6px', backgroundColor: product.inStock ? '#1A1A1A' : '#d1d5db', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiPlus size={16} />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
