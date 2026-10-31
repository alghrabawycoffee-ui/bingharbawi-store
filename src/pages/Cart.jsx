import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#fdfbf7', minHeight: 'calc(100vh - 200px)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#3b2314', fontWeight: '900' }}>سلة المشتريات</h2>
        <p style={{ color: '#6b5d52', fontSize: '1.05rem', marginBottom: '30px' }}>سلتك فارغة حالياً</p>
        <Link to="/products" style={{ padding: '12px 28px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '999px', fontWeight: '800' }}>
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#fdfbf7', minHeight: 'calc(100vh - 200px)' }}>
      <div style={{ padding: '40px 20px 140px', maxWidth: '980px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '30px', color: '#3b2314', fontWeight: '900' }}>سلة المشتريات</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '16px 20px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(59, 35, 20, 0.05)', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '260px' }}>
                <img src={item.image} alt={item.name} style={{ width: '78px', height: '78px', objectFit: 'cover', borderRadius: '12px' }} />
                <div>
                  <h4 style={{ fontSize: '1.02rem', marginBottom: '6px', fontWeight: '800', color: '#3b2314' }}>{item.name}</h4>
                  <p style={{ color: '#d97706', fontWeight: '800' }}>{item.price} ج.م</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f8f5f1', borderRadius: '999px', padding: '6px 14px' }}>
                  <button onClick={() => decreaseQuantity(item.id)} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: '#3b2314' }}>-</button>
                  <span style={{ fontWeight: '800', minWidth: '18px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: '#3b2314' }}>+</button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: 'none', border: 'none', color: '#9b8b7d', cursor: 'pointer', fontWeight: '700' }}
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, backgroundColor: '#fff', borderTop: '1px solid rgba(59, 35, 20, 0.06)', boxShadow: '0 -10px 40px rgba(59, 35, 20, 0.04)', zIndex: 90 }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#6b5d52', fontSize: '0.98rem' }}>الإجمالي</span>
            <span style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3b2314' }}>{getCartTotal()} ج.م</span>
          </div>
          <Link to="/checkout" style={{ padding: '14px 38px', backgroundColor: '#d97706', color: '#fff', borderRadius: '999px', fontWeight: '900', textAlign: 'center' }}>
            إتمام الطلب
          </Link>
        </div>
      </div>
    </div>
  )
}
