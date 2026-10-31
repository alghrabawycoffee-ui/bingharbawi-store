import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section>
      <div style={{ position: 'relative', height: 'min(90vh, 920px)', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2560&auto=format&fit=crop" 
          alt="Verve style coffee" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '20px', color: '#fff' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)', fontWeight: '800', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            بن الغرباوي
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            Hand Roasted Daily
          </p>
          <Link to="/products" style={{ marginTop: '12px', padding: '14px 38px', border: '1px solid #fff', color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.95rem' }}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
