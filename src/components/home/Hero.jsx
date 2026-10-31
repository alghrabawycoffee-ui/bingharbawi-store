import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section>
      <div style={{ position: 'relative', height: 'min(88vh, 880px)', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2560&auto=format&fit=crop" 
          alt="بن محمص" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px', color: '#fff' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            أجود أنواع البن
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', opacity: '0.95' }}>
            محمص يوميًا بأيدي خبراء بن الغرباوي
          </p>
          <Link to="/products" style={{ marginTop: '14px', padding: '14px 38px', border: '1px solid #fff', color: '#fff', fontWeight: '700' }}>
            تسوق الآن
          </Link>
        </div>
      </div>
    </section>
  )
}
