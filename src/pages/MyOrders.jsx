import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function MyOrders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem('bingharbawi_orders') || '[]')
    if (user) {
      const userOrders = allOrders.filter(o => o.userId === user.id)
      setOrders(userOrders)
    } else {
      setOrders([])
    }
  }, [user])

  if (!user) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#3b2314' }}>يجب تسجيل الدخول</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>سجل دخولك لعرض طلباتك</p>
        <Link to="/login" style={{ padding: '12px 30px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '10px', fontWeight: '700' }}>
          تسجيل الدخول
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800' }}>طلباتي</h2>
      
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff', borderRadius: '16px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>لا توجد طلبات بعد</p>
          <Link to="/products" style={{ padding: '12px 30px', backgroundColor: '#8b5a2b', color: '#fff', borderRadius: '10px', fontWeight: '700' }}>
            تسوق الآن
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map((order) => (
            <div key={order.id} style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '5px' }}>طلب {order.id}</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{new Date(order.date).toLocaleDateString('ar-EG')}</div>
                </div>
                <span style={{ padding: '8px 18px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', fontWeight: '700' }}>
                  {order.status}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                {order.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span>{item.name} × {item.quantity}</span>
                    <span style={{ fontWeight: '700' }}>{item.price * item.quantity} ج.م</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px', borderTop: '2px solid #f0f0f0' }}>
                <span style={{ fontWeight: '800' }}>الإجمالي</span>
                <span style={{ fontSize: '1.3rem', color: '#d97706', fontWeight: '800' }}>{order.total} ج.م</span>
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
                طريقة الدفع: {order.paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 'دفع أونلاين'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
