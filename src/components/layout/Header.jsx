import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()

  return (
    <header style={{ backgroundColor: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '14px', gap: '16px' }}>
        <Link to="/products" style={{ display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
          <FiSearch size={22} />
        </Link>
        <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '900', color: '#1A1A1A' }}>
          بن الغرباوي
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/login" style={{ display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
            <FiUser size={22} />
          </Link>
          <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
            <FiShoppingBag size={22} />
            {count > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-8px',
                backgroundColor: '#D97706',
                color: '#ffffff',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: '700'
              }}>
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
