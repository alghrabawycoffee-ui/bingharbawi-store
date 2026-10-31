import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import CartDrawer from '../cart/CartDrawer'
import { useState } from 'react'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(247, 245, 242, 0.98)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', paddingBlock: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(185, 154, 93, 0.18) 0%, transparent 70%)', border: '1px solid rgba(185, 154, 93, 0.4)' }}>
                <span style={{ fontSize: '1.4rem' }}>☕</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '800', fontSize: '1.08rem', letterSpacing: '-0.01em' }}>بن الغرباوي</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)' }}>Al Gharbawy Coffee</span>
              </div>
            </Link>
            <nav className="nav-main" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
              <Link to="/" style={{ fontWeight: '600' }}>الرئيسية</Link>
              <Link to="/products" style={{ fontWeight: '600' }}>المتجر</Link>
              {user && <Link to="/my-orders" style={{ fontWeight: '600' }}>طلباتي</Link>}
              {isAdmin && <Link to="/admin" style={{ fontWeight: '600', color: 'var(--accent)' }}>لوحة الإدارة</Link>}
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <button onClick={() => setCartOpen(true)} className="btn btn--ghost" style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>السلة</span>
              {getCartCount() > 0 && (
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '26px', height: '26px', borderRadius: '999px', backgroundColor: 'var(--primary)', color: '#fff', fontSize: '0.9rem', fontWeight: '700' }}>
                  {getCartCount()}
                </span>
              )}
            </button>
            {user ? (
              <button onClick={logout} className="btn btn--light" style={{ padding: '10px 22px' }}>تسجيل الخروج</button>
            ) : (
              <Link to="/login" className="btn btn--primary">تسجيل الدخول</Link>
            )}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
