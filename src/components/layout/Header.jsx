import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const count = getCartCount()

  return (
    <nav style={{ 
      backgroundColor: '#fff', 
      padding: '14px 24px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 2px 16px rgba(59, 35, 20, 0.04)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(59, 35, 20, 0.02)'
    }}>
      <Link to="/" style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3b2314', display: 'flex', alignItems: 'center', gap: '8px' }}>
        ☕ بن الغرباوي
      </Link>
      
      <div style={{ display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/products" style={{ fontWeight: '800', color: '#3b2314' }}>المنتجات</Link>
        
        {isAdmin && (
          <Link to="/admin" style={{ fontWeight: '800', color: '#d97706' }}>لوحة الإدارة</Link>
        )}

        <Link to="/cart" style={{ fontWeight: '800', color: '#3b2314', display: 'flex', alignItems: 'center', gap: '8px' }}>
          السلة
          <span style={{ backgroundColor: '#d97706', color: '#fff', borderRadius: '999px', minWidth: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '0 8px' }}>
            {count}
          </span>
        </Link>

        {user ? (
          <button onClick={logout} style={{ padding: '9px 18px', backgroundColor: '#f8f5f1', border: 'none', borderRadius: '999px', cursor: 'pointer', fontWeight: '800', color: '#3b2314' }}>خروج</button>
        ) : (
          <Link to="/login" style={{ padding: '9px 20px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '999px', fontWeight: '800' }}>دخول</Link>
        )}
      </div>
    </nav>
  )
}
