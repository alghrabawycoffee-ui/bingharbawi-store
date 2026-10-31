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
      <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1810 100%)', padding: '40px 14px', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3rem)', fontWeight: '900' }}>أجود أنواع البن العربي</h1>
          <p style={{ opacity: 0.9, fontSize: '1rem' }}>تحميص طازج يومياً • جودة مضمونة</p>
        </div>
      </div>
      <div style={{ padding: '18px 14px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <FiSearch size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6b6b6b' }} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '12px 46px 12px 16px', borderRadius: '12px', border: '1px solid #e5e5e5', backgroundColor: '#FFFFFF', fontSize: '0.94rem' }}
          />
        </div>
      </div>
      <div style={{ padding: '26px 14px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '16px' }}>جميع المنتجات</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '14px' }}>
          {filtered.map((product) => (
            <Link to={/product/} key={product.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', border: '1px solid #f0f0f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '150px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '12px 14px 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '44px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.name}</h3>
                <span style={{ fontWeight: '800', color: '#1A1A1A', fontSize: '1rem' }}>{product.price} ر.س</span>
              </div>
              <button onClick={(e) => { e.preventDefault(); addToCart(product); }} disabled={!product.inStock} style={{ position: 'absolute', bottom: '12px', left: '12px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: product.inStock ? '#1A1A1A' : '#d1d5db', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiPlus size={18} />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
