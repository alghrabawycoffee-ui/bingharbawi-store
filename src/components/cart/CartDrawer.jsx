import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function CartDrawer({ open, onClose }) {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (!open) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'min(420px, 100%)', background: '#fff', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '1px solid #f2f2f2' }}>
          <div style={{ fontWeight: 900, fontSize: '17px' }}>سلة المشتريات</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}><FiX size={24} /></button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#777', marginTop: '60px' }}>السلة فارغة</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid #f7f7f7' }}>
                  <img src={item.image} alt={item.name} style={{ width: '76px', height: '76px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: '1.8' }}>{item.name}</div>
                      <div style={{ fontWeight: 900, marginTop: '6px' }}>{item.price} ر.س</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #eee', borderRadius: '10px', padding: '4px 10px' }}>
                        <button onClick={() => decreaseQuantity(item.id)} style={{ background: 'transparent', border: 'none', display: 'flex' }}><FiMinus size={16} /></button>
                        <span style={{ minWidth: '18px', textAlign: 'center', fontWeight: 700 }}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} style={{ background: 'transparent', border: 'none', display: 'flex' }}><FiPlus size={16} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', color: '#d9534f', display: 'flex' }}><FiTrash2 size={18} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div style={{ borderTop: '1px solid #f2f2f2', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontWeight: 700 }}>المجموع</span>
              <span style={{ fontWeight: 900, fontSize: '18px' }}>{getCartTotal()} ر.س</span>
            </div>
            <Link to="/checkout" onClick={onClose} style={{ display: 'block', textAlign: 'center', width: '100%', padding: '15px', background: '#000', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 800 }}>إتمام الطلب</Link>
          </div>
        )}
      </div>
    </div>
  )
}
