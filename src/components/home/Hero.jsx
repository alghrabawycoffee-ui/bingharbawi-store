import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '70px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '70px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '999px', border: '1px solid var(--color-border)', marginBottom: '28px', backgroundColor: 'rgba(185, 138, 86, 0.08)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
            <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-accent)' }}>محمص بعناية • مختار بعناية</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            تجربة قهوة<br />
            <span style={{ color: 'var(--color-accent)' }}>فاخرة</span> من بن الغرباوي
          </h1>
          <p style={{ fontSize: '1.12rem', color: 'var(--color-text-light)', maxWidth: '520px', marginBottom: '38px' }}>
            مجموعة مختارة من أجود أنواع البن المحمص يدويًا، لنكهة غنية ومتوازنة في كل رشفة.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary">تسوق المجموعة</Link>
            <Link to="/products" className="btn btn-ghost">اكتشف المزيد</Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '10% -8% -10% 8%', borderRadius: 'var(--radius-lg)', background: 'radial-gradient(circle at top, rgba(185, 138, 86, 0.16), transparent 70%)', filter: 'blur(0px)' }}></div>
          <img 
            src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1400&auto=format&fit=crop" 
            alt="فنجان قهوة مع حبوب البن" 
            style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', aspectRatio: '4/5', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </section>
  )
}
