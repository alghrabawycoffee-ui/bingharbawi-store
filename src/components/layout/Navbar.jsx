import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { useProducts } from '../../context/ProductContext'
import CartDrawer from '../cart/CartDrawer'

export default function Navbar() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const { products } = useProducts()
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const searchResults = searchQuery.length > 2 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : []

  return (
    <>
      <header style={{ backgroundColor: 'var(--white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '14px 20px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontSize: '1.7rem', fontWeight: '800', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ☕ بن الغرباوي
          </Link>

          <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Link to="/" style={{ fontWeight: '700' }}>الرئيسية</Link>
            <Link to="/products" style={{ fontWeight: '700' }}>المنتجات</Link>
            {user && <Link to="/my-orders" style={{ fontWeight: '700' }}>طلباتي</Link>}
            {isAdmin && <Link to="/admin" style={{ fontWeight: '700', color: 'var(--accent)' }}>لوحة الإدارة</Link>}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setShowSearch(!showSearch)} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}>🔍</button>
            <button onClick={() => setCartOpen(true)} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', position: 'relative' }}>
              🛒
              {getCartCount() > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'var(--accent)', color: 'var(--white)', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800' }}>
                  {getCartCount()}
                </span>
              )}
            </button>
            {user ? (
              <button onClick={logout} className="btn" style={{ padding: '8px 18px', backgroundColor: 'var(--bg-secondary)', fontSize: '0.9rem' }}>تسجيل خروج</button>
            ) : (
              <Link to="/login" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>دخول</Link>
            )}
          </div>
        </div>

        {showSearch && (
          <div style={{ borderTop: '1px solid var(--border)', padding: '16px 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'block', padding: '12px 20px', borderRadius: '50px', border: '1px solid var(--border)', fontSize: '1rem' }}
                autoFocus
              />
              {searchResults.length > 0 && (
                <div style={{ maxWidth: '600px', margin: '10px auto 0', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  {searchResults.map(product => (
                    <Link key={product.id} to={/product/} onClick={() => {setShowSearch(false); setSearchQuery('')}} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
                      <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700' }}>{product.name}</div>
                        <div style={{ color: 'var(--accent)', fontWeight: '800' }}>{product.price} ج.م</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
