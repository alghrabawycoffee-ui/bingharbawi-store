import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../cart/CartDrawer'

export default function Header() {
  const { getCartCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const count = getCartCount()

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', paddingBlock: '20px', gap: '24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link to="/products" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600' }}>Shop</Link>
            <Link to="/" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600' }}>Story</Link>
            <Link to="/products" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600' }}>Subscriptions</Link>
          </nav>
          <Link to="/" style={{ justifySelf: 'center', fontSize: '1.15rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            VERVE
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '32px' }}>
            <Link to="/login" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600' }}>Account</Link>
            <button onClick={() => setCartOpen(true)} style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Cart {count > 0 ? '(' + count + ')' : '(0)'}
            </button>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
