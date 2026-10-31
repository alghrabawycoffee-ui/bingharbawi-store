import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #3b2314 0%, #6b3e26 50%, #8b5a2b 100%)', color: 'var(--white)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.15' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(217, 119, 6, 0.2)', borderRadius: '50px', marginBottom: '24px', border: '1px solid rgba(245, 158, 11, 0.5)' }}>
          <span style={{ color: 'var(--accent-light)', fontWeight: '700' }}>أجود أنواع البن المحمص</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2' }}>
          بن الغرباوي<br />
          <span style={{ color: 'var(--accent-light)' }}>نكهة لا تُضاهى</span>
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '40px', opacity: '0.95', maxWidth: '600px', margin: '0 auto 40px' }}>
          قهوة غنية بالنكهة، محمصة بعناية فائقة لتمنحك تجربة قهوة استثنائية في كل فنجان
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/products" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            تسوق الآن ←
          </Link>
          <Link to="/products" className="btn" style={{ padding: '16px 40px', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--white)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            تصفح المنتجات
          </Link>
        </div>
      </div>
    </section>
  )
}
