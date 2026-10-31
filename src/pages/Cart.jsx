import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#3b2314' }}>سلة المشتريات 🛒</h2>
        <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '30px' }}>السلة فاضية حالياً.</p>
        <Link to="/products" style={{ padding: '12px 30px', backgroundColor: '#8b5a2b', color: '#fff', borderRadius: '8px' }}>
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b2314' }}>سلة المشتريات 🛒</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '15px 20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.name}</h4>
              <p style={{ color: '#8b5a2b', fontWeight: 'bold' }}>{item.price} ج.م × {item.quantity}</p>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              حذف 🗑️
            </button>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.3rem' }}>الإجمالي:</h3>
        <h3 style={{ fontSize: '1.5rem', color: '#d97706' }}>{getCartTotal()} ج.م</h3>
      </div>

      <button style={{ width: '100%', padding: '15px', backgroundColor: '#8b5a2b', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
        إتمام الطلب
      </button>
    </div>
  )
}
