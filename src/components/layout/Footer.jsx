import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', marginTop: '60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 14px 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>بن الغرباوي</h3>
          <p style={{ color: '#b3b3b3', lineHeight: '1.9', fontSize: '0.93rem' }}>
            أجود أنواع البن المحمص، مختارة بعناية لتحصل على أفضل تجربة قهوة
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: '800' }}>روابط سريعة</h4>
          <Link to="/" style={{ color: '#b3b3b3' }}>الرئيسية</Link>
          <Link to="/" style={{ color: '#b3b3b3' }}>المنتجات</Link>
          <Link to="/admin" style={{ color: '#b3b3b3' }}>لوحة التحكم</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: '800' }}>تواصل معنا</h4>
          <span style={{ color: '#b3b3b3' }}>واتساب: للتواصل المباشر</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px', textAlign: 'center' }}>
        <p style={{ color: '#b3b3b3', fontSize: '0.9rem' }}>© {new Date().getFullYear()} بن الغرباوي. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  )
}
