import { Link, useLocation } from 'react-router-dom'

export default function OrderSuccess() {
  const location = useLocation()
  const orderId = location.state?.orderId

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ fontSize: '5rem', marginBottom: '20px' }}>✅</div>
      <h1 style={{ fontSize: '2.5rem', color: '#3b2314', fontWeight: '800', marginBottom: '15px' }}>تم تأكيد طلبك بنجاح!</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
        شكراً لك على الثقة في بن الغرباوي<br/>
        سنقوم بالتواصل معك قريباً لتأكيد الطلب
      </p>
      {orderId && (
        <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '12px', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>رقم الطلب</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#3b2314', letterSpacing: '2px' }}>{orderId}</div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/my-orders" style={{ padding: '14px 30px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '10px', fontWeight: '700' }}>
          عرض طلباتي
        </Link>
        <Link to="/products" style={{ padding: '14px 30px', backgroundColor: '#f5f5f5', color: '#3b2314', borderRadius: '10px', fontWeight: '700' }}>
          متابعة التسوق
        </Link>
      </div>
    </div>
  )
}
