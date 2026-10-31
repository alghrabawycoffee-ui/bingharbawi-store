import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100, flexWrap: 'wrap', gap: '10px' }}>
      <Link to="/" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#3b2314' }}>
        ☕ بن الغرباوي
      </Link>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ fontWeight: '700' }}>الرئيسية</Link>
        <Link to="/products" style={{ fontWeight: '700' }}>المنتجات</Link>
        {user && <Link to="/my-orders" style={{ fontWeight: '700' }}>طلباتي</Link>}
        {isAdmin && <Link to="/admin" style={{ fontWeight: '700', color: '#d97706' }}>لوحة الإدارة</Link>}
        <Link to="/cart" style={{ fontWeight: '700', color: '#d97706', display: 'flex', alignItems: 'center', gap: '6px' }}>
          السلة 🛒
          {getCartCount() > 0 && (
            <span style={{ backgroundColor: '#d97706', color: 'white', borderRadius: '50%', padding: '2px 9px', fontSize: '0.8rem' }}>
              {getCartCount()}
            </span>
          )}
        </Link>
        {user ? (
          <button onClick={logout} style={{ padding: '8px 16px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>
            تسجيل خروج
          </button>
        ) : (
          <Link to="/login" style={{ padding: '8px 16px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '8px', fontWeight: '700' }}>
            تسجيل الدخول
          </Link>
        )}
      </div>
    </nav>
  )
}
