import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi'

export default function CartPage() {
  const { cart, updateQty, total } = useCart()

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderBottom: '1px solid #f2f2f2' }}>
        <Link to="/" style={{ display: 'flex' }}><FiChevronRight size={22} /></Link>
        <div style={{ fontWeight: 800 }}>سلة المشتريات</div>
      </header>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '14px' }}>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', gap: 12, paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid #f7f7f7' }}>
            <img src={item.image} style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.name}</div>
              <div style={{ fontWeight: 800, margin: '4px 0' }}>{item.price} ر.س</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #eee', borderRadius: 6, padding: '4px 8px', width: 'fit-content' }}>
                <button onClick={() => updateQty(item.id, 'dec')}><FiMinus size={14} /></button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, 'inc')}><FiPlus size={14} /></button>
              </div>
            </div>
          </div>
        ))}
        {cart.length > 0 && <Link to="/checkout" style={{ display: 'block', textAlign: 'center', background: '#000', color: '#fff', padding: 14, borderRadius: 10, fontWeight: 800, marginTop: 20 }}>إتمام الطلب - {total} ر.س</Link>}
      </div>
    </div>
  )
}
