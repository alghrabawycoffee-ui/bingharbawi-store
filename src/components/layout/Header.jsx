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
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', paddingBlock: '18px', gap: '24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link to="/products" style={{ fontWeight: '600', fontSize: '0.98rem' }}>المتجر</Link>
            <Link to="/" style={{ fontWeight: '600', fontSize: '0.98rem' }}>قصتنا</Link>
            <Link to="/products" style={{ fontWeight: '600', fontSize: '0.98rem' }}>الاشتراكات</Link>
          </nav>
          <Link to="/" style={{ justifySelf: 'center', fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
            بن الغرباوي
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px' }}>
            <Link to="/login" style={{ fontWeight: '600', fontSize: '0.98rem' }}>حسابي</Link>
            <button onClick={() => setCartOpen(true)} style={{ fontWeight: '600', fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              السلة {count > 0 ? '(' + count + ')' : '(0)'}
            </button>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
