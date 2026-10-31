import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#3b2314' }}>سلة المشتريات 🛒</h2>
        <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '40px' }}>السلة فاضية حالياً</p>
        <Link to="/products" style={{ padding: '14px 35px', backgroundColor: '#8b5a2b', color: '#fff', borderRadius: '10px', fontWeight: '700' }}>
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800' }}>سلة المشتريات 🛒</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1', minWidth: '250px' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '6px', fontWeight: '700' }}>{item.name}</h4>
                <p style={{ color: '#8b5a2b', fontWeight: '800' }}>{item.price} ج.م</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f8f8f8', borderRadius: '10px', padding: '6px 14px' }}>
                <button onClick={() => decreaseQuantity(item.id)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#3b2314' }}>-</button>
                <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#3b2314' }}>+</button>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '700' }}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)', marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <span style={{ fontSize: '1.1rem' }}>المجموع الفرعي</span>
          <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{getCartTotal()} ج.م</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #f0f0f0' }}>
          <h3 style={{ fontSize: '1.4rem' }}>الإجمالي</h3>
          <h3 style={{ fontSize: '1.6rem', color: '#d97706', fontWeight: '800' }}>{getCartTotal()} ج.م</h3>
        </div>
      </div>

      <Link to="/checkout" style={{ display: 'block', width: '100%', padding: '16px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.25rem', fontWeight: '800', cursor: 'pointer', textAlign: 'center' }}>
        إتمام الطلب
      </Link>
    </div>
  )
}
