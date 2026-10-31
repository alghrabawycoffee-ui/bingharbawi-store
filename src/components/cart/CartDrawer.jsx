import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiX, FiMinus, FiPlus } from 'react-icons/fi'

export default function CartDrawer({ open, onClose }) {
  const { cart, updateQty, removeItem, total, count } = useCart()
  if (!open) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', maxWidth: 380, height: '100vh', background: '#fff', zIndex: 1001, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid #f2f2f2' }}>
          <div style={{ fontWeight: 800 }}>سلة المشتريات ({count})</div>
          <button onClick={onClose}><FiX size={22} /></button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px' }}>
          {cart.length === 0 ? <div style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>السلة فارغة</div> : cart.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: 12, paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid #f7f7f7' }}>
              <img src={item.image} style={{ width: 70, height: 70, borderRadius: 8, objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{item.name}</div>
                <div style={{ fontWeight: 800, margin: '4px 0' }}>{item.price} ر.س</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #eee', borderRadius: 6, padding: '4px 8px' }}>
                    <button onClick={() => updateQty(item.id, 'dec')}><FiMinus size={14} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 'inc')}><FiPlus size={14} /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ color: '#999', fontSize: 13 }}>حذف</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && <div style={{ padding: '14px 16px', borderTop: '1px solid #f2f2f2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span>الإجمالي</span>
            <span style={{ fontWeight: 900 }}>{total} ر.س</span>
          </div>
          <Link to="/checkout" onClick={onClose} style={{ display: 'block', textAlign: 'center', background: '#000', color: '#fff', padding: 12, borderRadius: 8, fontWeight: 800 }}>إتمام الطلب</Link>
        </div>}
      </div>
    </>
  )
}
