import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    phone: '',
    governorate: '',
    address: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) return navigate('/products')
    
    const order = {
      id: 'ORD-' + Date.now().toString().slice(-8),
      items: cart,
      total: getCartTotal(),
      customer: formData,
      paymentMethod,
      status: 'جديد',
      date: new Date().toISOString(),
      userId: user?.id || 'guest'
    }
    
    const existingOrders = JSON.parse(localStorage.getItem('bingharbawi_orders') || '[]')
    localStorage.setItem('bingharbawi_orders', JSON.stringify([order, ...existingOrders]))
    
    clearCart()
    navigate('/order-success', { state: { orderId: order.id } })
  }

  if (cart.length === 0) {
    navigate('/products')
    return null
  }

  return (
    <div style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800', textAlign: 'center' }}>إتمام الطلب</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '25px', color: '#3b2314', fontWeight: '800' }}>بيانات التوصيل</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <input
                required
                type="text"
                placeholder="الاسم الكامل *"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
              />
              <input
                required
                type="tel"
                placeholder="رقم الموبايل *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
              />
              <input
                required
                type="text"
                placeholder="المحافظة *"
                value={formData.governorate}
                onChange={(e) => setFormData({...formData, governorate: e.target.value})}
                style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
              />
              <textarea
                required
                placeholder="العنوان بالتفصيل *"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows="4"
                style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo', resize: 'vertical' }}
              />
              <textarea
                placeholder="ملاحظات إضافية (اختياري)"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows="3"
                style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo', resize: 'vertical' }}
              />
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '25px', color: '#3b2314', fontWeight: '800' }}>طريقة الدفع</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: paymentMethod === 'cod' ? '2px solid #3b2314' : '1px solid #e0e0e0', borderRadius: '12px', cursor: 'pointer' }}>
                <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <div>
                  <div style={{ fontWeight: '700' }}>الدفع عند الاستلام</div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>ادفع نقداً عند استلام الطلب</div>
                </div>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: paymentMethod === 'online' ? '2px solid #3b2314' : '1px solid #e0e0e0', borderRadius: '12px', cursor: 'pointer' }}>
                <input type="radio" name="payment" value="online" checked={paymentMethod === 'online'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <div>
                  <div style={{ fontWeight: '700' }}>دفع أونلاين</div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>بطاقة ائتمانية / محفظة إلكترونية</div>
                </div>
              </label>
            </div>
            {paymentMethod === 'online' && (
              <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#fff3cd', borderRadius: '8px', color: '#856404', fontSize: '0.9rem' }}>
                ⚠️ سيتم تحويلك لبوابة الدفع قريبًا - حالياً للعرض فقط
              </div>
            )}
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '25px', color: '#3b2314', fontWeight: '800' }}>ملخص الطلب</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <div style={{ fontWeight: '700', marginBottom: '4px' }}>{item.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>{item.quantity} × {item.price} ج.م</div>
                  </div>
                  <div style={{ fontWeight: '700' }}>{item.price * item.quantity} ج.م</div>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: '15px', borderTop: '2px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: '800' }}>الإجمالي</span>
              <span style={{ fontSize: '1.5rem', color: '#d97706', fontWeight: '800' }}>{getCartTotal()} ج.م</span>
            </div>
            <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.2rem', fontWeight: '800', cursor: 'pointer' }}>
              تأكيد الطلب
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
