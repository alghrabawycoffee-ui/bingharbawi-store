import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100%', maxWidth: '420px', backgroundColor: 'var(--white)', zIndex: 1001, display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)', animation: 'slideInDrawer 0.3s ease' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>سلة التسوق ({cart.length})</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🛒</div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>سلة المشتريات فارغة</p>
              <button onClick={onClose} className="btn btn-primary">تصفح المنتجات</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <h4 style={{ fontWeight: '700', fontSize: '0.95rem' }}>{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}>🗑️</button>
                    </div>
                    <div style={{ color: 'var(--accent)', fontWeight: '800', marginBottom: '10px' }}>{item.price} ج.م</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => decreaseQuantity(item.id)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)' }}>-</button>
                      <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)' }}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.1rem' }}>
              <span style={{ fontWeight: '700' }}>الإجمالي</span>
              <span style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--accent)' }}>{getCartTotal()} ج.م</span>
            </div>
            <Link to="/checkout" onClick={onClose} className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }}>إتمام الطلب</Link>
            <Link to="/cart" onClick={onClose} className="btn btn-outline" style={{ width: '100%' }}>عرض السلة بالكامل</Link>
          </div>
        )}
      </div>
    </>
  )
}
