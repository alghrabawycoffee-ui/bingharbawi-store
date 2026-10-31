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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', gap: '14px', maxWidth: '1200px', margin: '0 auto' }}>
          <button style={{ color: '#1A1A1A', display: 'flex', alignItems: 'center' }}>
            <FiMenu size={24} />
          </button>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>☕</span>
            <span style={{ fontSize: '1.35rem', fontWeight: '900', color: '#1A1A1A', letterSpacing: '-0.01em' }}>بن الغرباوي</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <button style={{ color: '#1A1A1A', display: 'flex', alignItems: 'center' }}>
              <FiSearch size={23} />
            </button>
            <button onClick={() => setDrawerOpen(true)} style={{ position: 'relative', color: '#1A1A1A', display: 'flex', alignItems: 'center' }}>
              <FiShoppingCart size={23} />
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-7px',
                  right: '-9px',
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  minWidth: '19px',
                  height: '19px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  padding: '0 4px'
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
