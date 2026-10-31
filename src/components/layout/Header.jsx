import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import CartDrawer from '../cart/CartDrawer'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', gap: '12px', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1A1A1A' }}>بن الغرباوي</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button style={{ color: '#1A1A1A' }}>
              <FiSearch size={22} />
            </button>
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
