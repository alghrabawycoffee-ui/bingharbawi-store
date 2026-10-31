import { Link } from 'react-router-dom'

export default function IntroHero() {
  return (
    <section className="section" style={{ paddingTop: 'clamp(56px, 10vw, 96px)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(32px, 8vw, 72px)', alignItems: 'center' }}>
        <div className="hero-intro" style={{ gridColumn: '1 / span 6', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="section-eyebrow">
              <span></span>
              Roasted with intention
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', fontWeight: '800', letterSpacing: '-0.05em', lineHeight: '0.98' }}>
              قهوة فاخرة
              <br />
              لمحبي التفاصيل
            </h1>
            <p style={{ fontSize: 'clamp(1.02rem, 2vw, 1.14rem)', color: 'var(--color-text-secondary)', maxWidth: '540px' }}>
              حبوب مختارة بعناية، محمصة في دفعات صغيرة، ونكهة متوازنة تعكس أصالة بن الغرباوي.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/products" className="btn btn-primary">تسوق الآن</Link>
            <Link to="/products" className="btn btn-ghost">استكشف التشكيلة</Link>
          </div>
        </div>
        <div className="hero-intro-media" style={{ gridColumn: '7 / span 6', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-10% -14% -16% 12%', background: 'radial-gradient(circle, rgba(185, 160, 126, 0.16) 0%, transparent 72%)' }}></div>
          <figure style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '5/6' }}>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" 
              alt="كوب قهوة وبجوارها حبوب البن" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
