import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../cart/CartDrawer'

export default function Header() {
  const { getCartCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', paddingBlock: '18px', gap: '24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-left">
            <Link to="/products" style={{ fontWeight: '600', fontSize: '0.98rem' }}>متجر</Link>
            <Link to="/" style={{ fontWeight: '600', fontSize: '0.98rem' }}>قصتنا</Link>
          </nav>
          <Link to="/" style={{ justifySelf: 'center', fontSize: '1.1rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            بن الغرباوي
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px' }}>
            <Link to="/login" style={{ fontWeight: '600', fontSize: '0.98rem' }} className="nav-right">دخول</Link>
            <button onClick={() => setCartOpen(true)} style={{ fontWeight: '600', fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              سلة
              {getCartCount() > 0 && <span>({getCartCount()})</span>}
            </button>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
