import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const count = getCartCount()

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#F4F0EF', borderBottom: '1px solid rgba(239, 199, 162, 0.3)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', paddingBlock: '12px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontWeight: '500', color: '#251A16', fontSize: '0.95rem' }}>الرئيسية</Link>
          <Link to="/products" style={{ fontWeight: '500', color: '#251A16', fontSize: '0.95rem' }}>منتجاتنا</Link>
          <Link to="/about" style={{ fontWeight: '500', color: '#251A16', fontSize: '0.95rem' }}>من نحن</Link>
          {isAdmin && <Link to="/admin" style={{ fontWeight: '600', color: '#654D3C', fontSize: '0.95rem' }}>لوحة الإدارة</Link>}
        </nav>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>☕</span>
          <span style={{ fontSize: '1.3rem', fontWeight: '700', letterSpacing: '-0.01em', color: '#251A16' }}>بن الغرباوي</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', color: '#251A16' }}>
            <span>السلة</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#251A16', color: '#fff', fontSize: '0.85rem', fontWeight: '600', padding: '0 6px' }}>{count}</span>
          </Link>
          {user ? (
            <button onClick={logout} style={{ padding: '8px 18px', borderRadius: '8px', border: '1px solid #EFC7A2', color: '#251A16', fontWeight: '500', fontSize: '0.9rem' }}>تسجيل الخروج</button>
          ) : (
            <Link to="/login" style={{ padding: '8px 20px', borderRadius: '8px', background: 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)', color: '#fff', fontWeight: '500', fontSize: '0.9rem', border: '1px solid #EFC7A2' }}>حسابي</Link>
          )}
        </div>
      </div>
    </header>
  )
}
