import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CartDrawer from '../components/cart/CartDrawer'

export default function ProductsPage() {
  const { products } = useProducts()
  const { addToCart, getCartCount } = useCart()
  const [search, setSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const count = getCartCount()

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '20px' }}>
      <header style={{ backgroundColor: '#FFC107', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1A1A1A' }}>بن الغرباوي</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/admin" style={{ fontSize: '0.9rem', fontWeight: '800', color: '#1A1A1A', padding: '6px 14px', backgroundColor: 'rgba(26,26,26,0.08)', borderRadius: '8px' }}>
              الإدارة
            </Link>
            <button onClick={() => setDrawerOpen(true)} style={{ position: 'relative', color: '#1A1A1A' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.66 17h8.66a2 2 0 0 0 1.97-1.61L23 6H6"></path>
              </svg>
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: '800'
                }}>
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <FiSearch size={18} style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: '#6b6b6b' }} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '13px 48px 13px 18px',
              borderRadius: '50px',
              border: '1px solid #f1f1f1',
              backgroundColor: '#f9f9f9',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#D9534F', color: '#FFFFFF', padding: '4px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '800', zIndex: 1 }}>
                جديد
              </span>
              <div style={{ width: '100%', height: '150px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '44px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.name}
                </h3>
                <span style={{ fontWeight: '800', color: '#F5B000', fontSize: '1rem' }}>{product.price} ج.م</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: product.inStock ? '#FFC107' : '#d1d5db',
                  color: '#1A1A1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FiPlus size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}
