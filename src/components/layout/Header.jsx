import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import CartDrawer from '../cart/CartDrawer'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header style={{ backgroundColor: '#FFC107', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '12px', gap: '16px' }}>
          <Link to="/" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2E2E2E' }}>
            بن الغرباوي
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/products" style={{ display: 'flex', alignItems: 'center', color: '#2E2E2E' }}>
              <FiSearch size={24} />
            </Link>
            <button onClick={() => setDrawerOpen(true)} style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#2E2E2E' }}>
              <FiShoppingBag size={24} />
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  backgroundColor: '#ffffff',
                  color: '#2E2E2E',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: '800'
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
