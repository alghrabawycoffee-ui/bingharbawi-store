import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import CartDrawer from '../cart/CartDrawer'

export default function Navbar() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e1dc', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', gap: '20px' }}>
          <Link to="/" style={{ fontSize: '1.6rem', fontWeight: '800', color: '#3b2314' }}>
            ☕ بن الغرباوي
          </Link>

          <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="nav-links">
            <Link to="/" style={{ fontWeight: '600' }}>الرئيسية</Link>
            <Link to="/products" style={{ fontWeight: '600' }}>المنتجات</Link>
            {user && <Link to="/my-orders" style={{ fontWeight: '600' }}>طلباتي</Link>}
            {isAdmin && <Link to="/admin" style={{ fontWeight: '600', color: '#8b5a2b' }}>لوحة الإدارة</Link>}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <button onClick={() => setCartOpen(true)} style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🛒
              {getCartCount() > 0 && (
                <span style={{ backgroundColor: '#8b5a2b', color: '#fff', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>
                  {getCartCount()}
                </span>
              )}
            </button>
            {user ? (
              <button onClick={logout} style={{ padding: '8px 18px', backgroundColor: '#f5f3f0', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>خروج</button>
            ) : (
              <Link to="/login" style={{ padding: '8px 18px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '6px', fontWeight: '600' }}>دخول</Link>
            )}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <style>{
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      }</style>
    </>
  )
}
