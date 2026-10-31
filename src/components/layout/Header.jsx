import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiShoppingCart, FiSearch, FiMenu } from 'react-icons/fi'
import CartDrawer from '../cart/CartDrawer'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #f5f5f5', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', gap: '12px' }}>
          <button style={{ color: '#1A1A1A' }}>
            <FiMenu size={24} />
          </button>
          <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1A1A1A', flex: 1, textAlign: 'center' }}>
            بن الغرباوي
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link to="/" style={{ color: '#1A1A1A' }}>
              <FiSearch size={22} />
            </Link>
            <button onClick={() => setDrawerOpen(true)} style={{ position: 'relative', color: '#1A1A1A' }}>
              <FiShoppingCart size={22} />
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
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
            </button>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
