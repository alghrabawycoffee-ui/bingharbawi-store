import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b2314' }}>
        ☕ بن الغرباوي
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ fontWeight: 'bold' }}>الرئيسية</Link>
        <Link to="/products" style={{ fontWeight: 'bold' }}>المنتجات</Link>
        <Link to="/cart" style={{ fontWeight: 'bold', color: '#d97706' }}>السلة 🛒</Link>
      </div>
    </nav>
  )
}
