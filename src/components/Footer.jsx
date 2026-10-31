import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', marginTop: 'auto' }}>
      <div className="container" style={{ padding: '60px 20px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: '800' }}>☕ بن الغرباوي</h3>
            <p style={{ opacity: '0.9', lineHeight: '1.8', marginBottom: '20px' }}>متجر متخصص في أجود أنواع البن المحمص، نقدم أفضل المنتجات لعشاق القهوة</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: '800' }}>روابط سريعة</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/" style={{ opacity: '0.9' }}>الرئيسية</Link>
              <Link to="/products" style={{ opacity: '0.9' }}>المنتجات</Link>
              <Link to="/cart" style={{ opacity: '0.9' }}>السلة</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: '800' }}>معلومات</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/login" style={{ opacity: '0.9' }}>تسجيل الدخول</Link>
              <Link to="/my-orders" style={{ opacity: '0.9' }}>طلباتي</Link>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: '0.8' }}>
          <p>جميع الحقوق محفوظة © بن الغرباوي {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
