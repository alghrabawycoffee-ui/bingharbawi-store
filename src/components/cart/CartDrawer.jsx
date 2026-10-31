import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1000 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100%', maxWidth: '380px', backgroundColor: '#fff', zIndex: 1001, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #e8e1dc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#3b2314' }}>السلة</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.6rem', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
              <p>السلة فارغة</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '12px', paddingBottom: '14px', borderBottom: '1px solid #f0ebe6' }}>
                  <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <h4 style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>×</button>
                    </div>
                    <div style={{ color: '#8b5a2b', fontWeight: '700', marginBottom: '8px', fontSize: '0.95rem' }}>{item.price} ج.م</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => decreaseQuantity(item.id)} style={{ width: '24px', height: '24px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px' }}>-</button>
                      <span style={{ fontWeight: '600' }}>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} style={{ width: '24px', height: '24px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px' }}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '16px', borderTop: '1px solid #e8e1dc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontWeight: '600' }}>الإجمالي</span>
              <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#3b2314' }}>{getCartTotal()} ج.م</span>
            </div>
            <Link to="/checkout" onClick={onClose} style={{ display: 'block', width: '100%', padding: '12px', backgroundColor: '#3b2314', color: '#fff', textAlign: 'center', borderRadius: '6px', fontWeight: '600', marginBottom: '8px' }}>إتمام الطلب</Link>
            <button onClick={onClose} style={{ display: 'block', width: '100%', padding: '12px', backgroundColor: '#f5f3f0', border: 'none', borderRadius: '6px', fontWeight: '600' }}>متابعة التسوق</button>
          </div>
        )}
      </div>
    </>
  )
}
