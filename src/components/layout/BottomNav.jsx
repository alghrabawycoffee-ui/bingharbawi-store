import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function BottomNav() {
  const { getCartCount } = useCart()
  const { user } = useAuth()
  const location = useLocation()
  const count = getCartCount()

  const isActive = (path) => location.pathname === path

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1a100a',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        zIndex: 1000,
        display: 'none'
      }}
      className="bottom-nav"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '8px 0'
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: isActive('/') ? '#d4af37' : '#cccccc',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>الرئيسية</span>
        </Link>
        <Link
          to="/products"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: isActive('/products') ? '#d4af37' : '#cccccc',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>المنتجات</span>
        </Link>
        <Link
          to="/cart"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: isActive('/cart') ? '#d4af37' : '#cccccc',
            fontSize: '0.75rem',
            fontWeight: '600',
            position: 'relative'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.66 17h8.66a2 2 0 0 0 1.97-1.61L23 6H6"></path>
          </svg>
          {count > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '12px',
                backgroundColor: '#d4af37',
                color: '#1a100a',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: '700'
              }}
            >
              {count}
            </span>
          )}
          <span>السلة</span>
        </Link>
        <Link
          to={user ? '/my-orders' : '/login'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: (isActive('/login') || isActive('/my-orders')) ? '#d4af37' : '#cccccc',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>{user ? 'حسابي' : 'تسجيل'}</span>
        </Link>
      </div>
    </nav>
  )
}
