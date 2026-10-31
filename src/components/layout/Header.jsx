import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()

  return (
    <nav style={{ 
      backgroundColor: '#fff', 
      padding: '16px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3b2314', display: 'flex', alignItems: 'center', gap: '8px' }}>
        ☕ بن الغرباوي
      </Link>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/products" style={{ fontWeight: '700', color: '#555' }}>المنتجات</Link>
        
        {isAdmin && (
          <Link to="/admin" style={{ fontWeight: '700', color: '#d97706' }}>لوحة الإدارة</Link>
        )}

        <Link to="/cart" style={{ fontWeight: '700', color: '#3b2314', display: 'flex', alignItems: 'center', gap: '6px' }}>
          السلة 🛒
          {getCartCount() > 0 && (
            <span style={{ backgroundColor: '#d97706', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem' }}>
              {getCartCount()}
            </span>
          )}
        </Link>

        {user ? (
          <button onClick={logout} style={{ padding: '8px 20px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>خروج</button>
        ) : (
          <Link to="/login" style={{ padding: '8px 20px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '8px', fontWeight: '700' }}>دخول</Link>
        )}
      </div>
    </nav>
  )
}
