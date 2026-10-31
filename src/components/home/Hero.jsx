import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#f9f7f4', padding: '80px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '800', color: '#3b2314', marginBottom: '20px', lineHeight: '1.3' }}>
            أجود أنواع البن المحمص
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#6b5d52', marginBottom: '32px', lineHeight: '1.9' }}>
            قهوة غنية بالنكهة محمصة بعناية لتمنحك تجربة مميزة في كل فنجان
          </p>
          <Link to="/products" style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '6px', fontWeight: '600', fontSize: '1.05rem' }}>
            تسوق الآن
          </Link>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop" 
            alt="بن محمص" 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 60px rgba(59, 35, 20, 0.15)' }} 
          />
        </div>
      </div>
    </section>
  )
}
