import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: '80px' }}>
      <div className="container" style={{ padding: '60px 0 30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>بن الغرباوي</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '280px' }}>أجود أنواع البن المحمص بعناية لتقديم تجربة قهوة مميزة</p>
        </div>
        <div>
          <h4 style={{ fontWeight: '700', marginBottom: '14px' }}>المتجر</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
            <Link to="/products">كل المنتجات</Link>
            <Link to="/products">الاشتراكات</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: '700', marginBottom: '14px' }}>حسابي</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
            <Link to="/login">تسجيل الدخول</Link>
            <Link to="/my-orders">طلباتي</Link>
            <Link to="/cart">السلة</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: '700', marginBottom: '14px' }}>تواصل</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
            <span>info@alghrabawy.com</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.95rem' }}>
          <p>© {new Date().getFullYear()} بن الغرباوي. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
