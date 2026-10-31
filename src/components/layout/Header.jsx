import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const count = getCartCount()

  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'transparent' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', paddingBlock: '18px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>الرئيسية</Link>
          <Link to="/products" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</Link>
          <Link to="/about" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من نحن</Link>
          {isAdmin && <Link to="/admin" style={{ fontWeight: '700', color: '#d4af37', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>لوحة الإدارة</Link>}
        </nav>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem' }}>☕</span>
          <span style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-0.01em', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
          <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#ffffff', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.66 17h8.66a2 2 0 0 0 1.97-1.61L23 6H6"></path>
            </svg>
            <span>السلة</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#d4af37', color: '#1a100a', fontSize: '0.85rem', fontWeight: '700', padding: '0 6px' }}>{count}</span>
          </Link>
          {user ? (
            <button onClick={logout} style={{ padding: '9px 24px', borderRadius: '4px', border: '1.5px solid #d4af37', color: '#d4af37', fontWeight: '700', fontSize: '0.92rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>تسجيل الخروج</button>
          ) : (
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 26px', borderRadius: '4px', backgroundColor: 'transparent', color: '#d4af37', fontWeight: '700', fontSize: '0.92rem', border: '1.5px solid #d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>حسابي</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
