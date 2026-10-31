import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border-light)', backgroundColor: 'var(--color-surface)', marginTop: '80px' }}>
      <div className="container" style={{ padding: '50px 24px 30px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>☕</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary)' }}>بن الغرباوي</span>
          </div>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '420px' }}>متجر متخصص في اختيار وتحميص أجود حبوب البن لتقديم تجربة قهوة استثنائية.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontWeight: '600' }}>
          <Link to="/">الرئيسية</Link>
          <Link to="/products">المتجر</Link>
          <Link to="/cart">السلة</Link>
          <Link to="/login">حسابي</Link>
        </div>
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--color-border-light)', textAlign: 'center', color: 'var(--color-text-light)', fontSize: '0.98rem' }}>
          <p>جميع الحقوق محفوظة © بن الغرباوي {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
