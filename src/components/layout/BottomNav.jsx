import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiHome, FiGrid, FiShoppingBag, FiUser } from 'react-icons/fi'

export default function BottomNav() {
  const { getCartCount } = useCart()
  const location = useLocation()
  const count = getCartCount()

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f1f1',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '6px 0'
      }}>
        <Link to="/" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isActive('/') ? '#22c55e' : '#6b6b6b',
          fontSize: '0.7rem',
          fontWeight: '600'
        }}>
          <FiHome size={22} />
          <span>الرئيسية</span>
        </Link>
        <Link to="/products" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isActive('/products') ? '#22c55e' : '#6b6b6b',
          fontSize: '0.7rem',
          fontWeight: '600'
        }}>
          <FiGrid size={22} />
          <span>الفئات</span>
        </Link>
        <Link to="/cart" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isActive('/cart') ? '#22c55e' : '#6b6b6b',
          fontSize: '0.7rem',
          fontWeight: '600',
          position: 'relative'
        }}>
          <FiShoppingBag size={22} />
          {count > 0 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '10px',
              backgroundColor: '#22c55e',
              color: '#ffffff',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: '700'
            }}>
              {count}
            </span>
          )}
          <span>السلة</span>
        </Link>
        <Link to="/login" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isActive('/login') ? '#22c55e' : '#6b6b6b',
          fontSize: '0.7rem',
          fontWeight: '600'
        }}>
          <FiUser size={22} />
          <span>حسابي</span>
        </Link>
      </div>
    </nav>
  )
}
