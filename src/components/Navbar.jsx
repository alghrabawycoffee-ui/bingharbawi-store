import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { getCartCount } = useCart()

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b2314' }}>
        ☕ بن الغرباوي
      </Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 'bold' }}>الرئيسية</Link>
        <Link to="/products" style={{ fontWeight: 'bold' }}>المنتجات</Link>
        <Link to="/cart" style={{ fontWeight: 'bold', color: '#d97706', display: 'flex', alignItems: 'center', gap: '5px' }}>
          السلة 🛒
          {getCartCount() > 0 && (
            <span style={{ backgroundColor: '#d97706', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem' }}>
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
