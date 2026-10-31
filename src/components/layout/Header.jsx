import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiShoppingBag, FiMapPin } from 'react-icons/fi'

export default function Header() {
  const { getCartCount } = useCart()
  const count = getCartCount()

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f1f1', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '12px', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiMapPin size={20} color="#22c55e" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', color: '#6b6b6b' }}>التوصيل إلى</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>القاهرة</span>
          </div>
        </div>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1f1f1f' }}>
          بن الغرباوي
        </Link>
        <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <FiShoppingBag size={24} color="#1f1f1f" />
          {count > 0 && (
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-10px',
              backgroundColor: '#22c55e',
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
    </header>
  )
}
