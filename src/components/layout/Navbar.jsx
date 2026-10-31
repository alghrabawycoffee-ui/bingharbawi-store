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
      <header style={{ backgroundColor: 'rgba(248, 246, 243, 0.98)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border-light)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', gap: '24px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>☕</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.01em', color: 'var(--color-primary)' }}>بن الغرباوي</span>
          </Link>

          <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-desktop">
            <Link to="/" style={{ fontWeight: '600', fontSize: '0.98rem' }}>الرئيسية</Link>
            <Link to="/products" style={{ fontWeight: '600', fontSize: '0.98rem' }}>المتجر</Link>
            {user && <Link to="/my-orders" style={{ fontWeight: '600', fontSize: '0.98rem' }}>طلباتي</Link>}
            {isAdmin && <Link to="/admin" style={{ fontWeight: '600', fontSize: '0.98rem', color: 'var(--color-accent)' }}>لوحة التحكم</Link>}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setCartOpen(true)} style={{ background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 14px', borderRadius: '999px', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '1.1rem' }}>🛍️</span>
              <span style={{ fontWeight: '600', fontSize: '0.98rem' }}>السلة</span>
              {getCartCount() > 0 && (
                <span style={{ backgroundColor: 'var(--color-primary)', color: '#fff', borderRadius: '999px', padding: '2px 10px', fontSize: '0.85rem', fontWeight: '700' }}>
                  {getCartCount()}
                </span>
              )}
            </button>
            {user ? (
              <button onClick={logout} className="btn btn-ghost" style={{ padding: '9px 20px', fontSize: '0.98rem' }}>تسجيل الخروج</button>
            ) : (
              <Link to="/login" className="btn btn-primary" style={{ padding: '9px 24px', fontSize: '0.98rem' }}>تسجيل الدخول</Link>
            )}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <style>{
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
        }
      }</style>
    </>
  )
}
