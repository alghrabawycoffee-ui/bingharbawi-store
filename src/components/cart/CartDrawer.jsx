import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function CartDrawer({ open, onClose }) {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (!open) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'min(420px, 100%)', background: '#fff', display: 'flex', flexDirection: 'column', direction: 'rtl', boxShadow: '-4px 0 24px rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid #f2f2f2' }}>
          <div style={{ fontWeight: 900, fontSize: '18px' }}>سلة المشتريات</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}><FiX size={26} /></button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#999', marginTop: '80px', fontSize: '15px' }}>سلة المشتريات فارغة</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '14px', paddingBottom: '18px', borderBottom: '1px solid #f7f7f7' }}>
                  <Link to={/product/} onClick={onClose} style={{ flexShrink: 0 }}>
                    <img src={item.image} alt={item.name} style={{ width: '84px', height: '84px', borderRadius: '14px', objectFit: 'cover' }} />
                  </Link>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                    <div>
                      <Link to={/product/} onClick={onClose} style={{ textDecoration: 'none', color: '#1A1A1A' }}>
                        <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: '1.9', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.name}</div>
                      </Link>
                      <div style={{ fontWeight: 900, marginTop: '6px', fontSize: '15px' }}>{item.price} ر.س</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #e8e8e8', borderRadius: '12px', padding: '5px 12px' }}>
                        <button onClick={() => decreaseQuantity(item.id)} style={{ background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}><FiMinus size={16} /></button>
                        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 700, fontSize: '14px' }}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} style={{ background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', color: '#1A1A1A' }}><FiPlus size={16} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', color: '#999', display: 'flex', alignItems: 'center' }}><FiTrash2 size={19} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div style={{ borderTop: '1px solid #f2f2f2', padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>المجموع الكلي</span>
              <span style={{ fontWeight: 900, fontSize: '20px' }}>{getCartTotal()} ر.س</span>
            </div>
            <Link to="/checkout" onClick={onClose} style={{ display: 'block', textAlign: 'center', width: '100%', padding: '16px', background: '#000', color: '#fff', borderRadius: '14px', textDecoration: 'none', fontWeight: 800, fontSize: '15px' }}>إتمام الطلب</Link>
          </div>
        )}
      </div>
    </div>
  )
}
