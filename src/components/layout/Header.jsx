import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi'

export default function Header({ onMenu, onSearch, onCart }) {
  const { count } = useCart()
  
  return (
    <header style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #f5f5f5', zIndex: 100, direction: 'rtl' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button onClick={onMenu} style={{ background: 'transparent', border: 'none', padding: '4px', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
            <FiMenu size={24} />
          </button>
          <button onClick={onSearch} style={{ background: 'transparent', border: 'none', padding: '4px', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
            <FiSearch size={23} />
          </button>
        </div>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#1A1A1A', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <span style={{ fontSize: '1.7rem' }}>☕</span>
          <span style={{ fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.01em' }}>بن الغرباوي</span>
        </Link>
        
        <button onClick={onCart} style={{ background: 'transparent', border: 'none', padding: '4px', position: 'relative', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
          <FiShoppingBag size={23} />
          {count > 0 && (
            <span style={{ position: 'absolute', top: '-6px', left: '-8px', background: '#000', color: '#fff', borderRadius: '50%', minWidth: '19px', height: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, padding: '0 4px' }}>
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
