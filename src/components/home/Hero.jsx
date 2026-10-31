import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
        <div style={{ gridColumn: '1 / span 6', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', fontWeight: '800', lineHeight: '1.02', letterSpacing: '-0.04em' }}>
              محمص في دفعات صغيرة
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.12rem)', color: 'var(--text-secondary)', maxWidth: '520px' }}>
              قهوة مختارة بعناية، محمصة يوميًا لإبراز أفضل ما في كل حبة بن.
            </p>
          </div>
          <div>
            <Link to="/products" className="btn btn-link">تسوق الآن</Link>
          </div>
        </div>
        <div style={{ gridColumn: '7 / span 6' }}>
          <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2000&auto=format&fit=crop" 
              alt="حبوب قهوة محمصة" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
