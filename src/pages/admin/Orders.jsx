import { useState, useEffect } from 'react'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = () => {
    const allOrders = JSON.parse(localStorage.getItem('bingharbawi_orders') || '[]')
    setOrders(allOrders)
  }

  const updateOrderStatus = (orderId, status) => {
    const allOrders = JSON.parse(localStorage.getItem('bingharbawi_orders') || '[]')
    const updatedOrders = allOrders.map(order => 
      order.id === orderId ? { ...order, status } : order
    )
    localStorage.setItem('bingharbawi_orders', JSON.stringify(updatedOrders))
    loadOrders()
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'جديد': return { bg: '#e3f2fd', color: '#1565c0' }
      case 'قيد التجهيز': return { bg: '#fff3e0', color: '#ef6c00' }
      case 'تم التسليم': return { bg: '#e8f5e9', color: '#2e7d32' }
      case 'ملغي': return { bg: '#ffebee', color: '#c62828' }
      default: return { bg: '#f5f5f5', color: '#666' }
    }
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800' }}>إدارة الطلبات</h1>
      
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#fff', borderRadius: '16px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>لا توجد طلبات بعد</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map((order) => {
            const statusStyle = getStatusColor(order.status)
            return (
              <div key={order.id} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <div style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>طلب {order.id}</div>
                    <div style={{ color: '#666', marginBottom: '4px' }}>التاريخ: {new Date(order.date).toLocaleString('ar-EG')}</div>
                    <div style={{ color: '#666' }}>طريقة الدفع: {order.paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 'دفع أونلاين'}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ padding: '8px 16px', backgroundColor: statusStyle.bg, color: statusStyle.color, borderRadius: '8px', fontWeight: '700' }}>
                      {order.status}
                    </span>
                    <select 
                      value={order.status} 
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e0e0e0', fontFamily: 'Cairo', cursor: 'pointer' }}
                    >
                      <option value="جديد">جديد</option>
                      <option value="قيد التجهيز">قيد التجهيز</option>
                      <option value="تم التسليم">تم التسليم</option>
                      <option value="ملغي">ملغي</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '25px' }}>
                  <div>
                    <h4 style={{ fontWeight: '800', marginBottom: '12px' }}>بيانات العميل</h4>
                    <div style={{ color: '#666', lineHeight: '1.8' }}>
                      <div>الاسم: {order.customer.fullName}</div>
                      <div>الموبايل: {order.customer.phone}</div>
                      <div>المحافظة: {order.customer.governorate}</div>
                      <div>العنوان: {order.customer.address}</div>
                      {order.customer.notes && <div>ملاحظات: {order.customer.notes}</div>}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '800', marginBottom: '12px' }}>المنتجات</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {order.items.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>{item.name} × {item.quantity}</span>
                          <span style={{ fontWeight: '700' }}>{item.price * item.quantity} ج.م</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ paddingTop: '12px', marginTop: '12px', borderTop: '2px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '800' }}>الإجمالي</span>
                      <span style={{ fontSize: '1.3rem', color: '#d97706', fontWeight: '800' }}>{order.total} ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
