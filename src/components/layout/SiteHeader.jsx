import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import CartDrawer from '../cart/CartDrawer'

export default function SiteHeader() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 60, backgroundColor: 'rgba(248, 246, 243, 0.98)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', paddingBlock: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.8rem' }}>☕</span>
              <span style={{ fontSize: '1.12rem', fontWeight: '800', letterSpacing: '-0.01em' }}>بن الغرباوي</span>
            </Link>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="site-nav">
              <Link to="/" style={{ fontWeight: '600' }}>الرئيسية</Link>
              <Link to="/products" style={{ fontWeight: '600' }}>المتجر</Link>
              {user && <Link to="/my-orders" style={{ fontWeight: '600' }}>طلباتي</Link>}
              {isAdmin && <Link to="/admin" style={{ fontWeight: '600', color: 'var(--color-accent)' }}>لوحة الإدارة</Link>}
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => setCartOpen(true)} className="btn btn-subtle" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>السلة</span>
              {getCartCount() > 0 && (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', height: '24px', borderRadius: '999px', backgroundColor: 'var(--color-primary)', color: '#fff', fontSize: '0.88rem', fontWeight: '700' }}>
                  {getCartCount()}
                </span>
              )}
            </button>
            {user ? (
              <button onClick={logout} className="btn btn-ghost">تسجيل الخروج</button>
            ) : (
              <Link to="/login" className="btn btn-ghost">تسجيل الدخول</Link>
            )}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <style>{
        @media (max-width: 880px) {
          .site-nav { display: none !important; }
        }
      }</style>
    </>
  )
}
