import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', marginTop: 'clamp(var(--space-11), 10vw, var(--space-12))' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-8)', paddingBlock: 'clamp(var(--space-9), 8vw, var(--space-10))' }}>
        <div className="footer-brand" style={{ gridColumn: '1 / span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(185, 154, 93, 0.18) 0%, transparent 70%)', border: '1px solid rgba(185, 154, 93, 0.4)' }}>
              <span style={{ fontSize: '1.4rem' }}>☕</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '800', fontSize: '1.12rem' }}>بن الغرباوي</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>متجر القهوة الفاخرة</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '380px' }}>متجر متخصص في اختيار حبوب البن المحمصة بعناية، لتقديم نكهات نقية ومتوازنة لمحبي القهوة الأصيلة.</p>
        </div>
        <div style={{ gridColumn: '7 / span 3', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span style={{ fontWeight: '800' }}>التصفح</span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', color: 'var(--text-secondary)' }}>
            <Link to="/">الرئيسية</Link>
            <Link to="/products">المتجر</Link>
            <Link to="/cart">السلة</Link>
          </nav>
        </div>
        <div style={{ gridColumn: '10 / span 3', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span style={{ fontWeight: '800' }}>الحساب</span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', color: 'var(--text-secondary)' }}>
            <Link to="/login">تسجيل الدخول</Link>
            <Link to="/register">إنشاء حساب</Link>
            <Link to="/my-orders">طلباتي</Link>
          </nav>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: 'var(--space-5)', flexWrap: 'wrap', gap: 'var(--space-3)', color: 'var(--text-tertiary)', fontSize: '0.98rem' }}>
          <p>© {new Date().getFullYear()} بن الغرباوي. جميع الحقوق محفوظة.</p>
          <p>صُنع بعناية لمحبي القهوة</p>
        </div>
      </div>
    </footer>
  )
}
