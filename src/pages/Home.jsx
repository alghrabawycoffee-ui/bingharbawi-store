import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div style={{ backgroundColor: '#F4F0EF' }}>
      <section style={{ position: 'relative', height: '100vh', maxHeight: '100vh', overflow: 'hidden', background: '#060000' }}>
        <video autoPlay muted loop playsInline preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://api.yemenicafe.com/storage/content/videos/GCoU4WkIGIbq4VIOAErralJIczPwZYLFMAkg2ytp.webm" type="video/webm" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ maxWidth: '1100px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: '700', color: '#fff', textTransform: 'uppercase', lineHeight: '1.2', marginBottom: '24px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              اكتشف نوع القهوة اللي يناسبك
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#f0f0f0', textTransform: 'uppercase', marginBottom: '40px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              اكتشف تشكيلتنا من انواع القهوة و اختار المفضلة لديك
            </p>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '300px', height: '55px', background: 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)', border: '1px solid #EFC7A2', borderRadius: '11px', color: '#fff', fontSize: '0.95rem', fontWeight: '600', transition: 'transform 0.3s ease' }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              استكشف قهوتنا
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#F4F0EF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: '#251A16', marginBottom: '12px' }}>منتجاتنا</h2>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#654D3C', fontWeight: '500' }}>اكتشف جوهر الحرفية الحقيقية للقهوة</p>
            </div>
            <Link to="/products" style={{ color: '#654D3C', fontSize: '2rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#251A16'} onMouseLeave={(e) => e.currentTarget.style.color = '#654D3C'}>
              ←
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', justifyItems: 'center' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', minHeight: '70vh', backgroundImage: 'url(https://api.yemenicafe.com/storage/content/images/IU5kfYnEu6UinLCGeoCMDPE0wbRxHH1eGWp9mXw5.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(244, 240, 239, 0.3)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, minHeight: '70vh', display: 'flex', alignItems: 'center', paddingBlock: '80px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', color: '#251A16', marginBottom: '16px', letterSpacing: '0.02em' }}>من نحن</h2>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#251A16', marginBottom: '32px', fontWeight: '400' }}>بن اليمني عبد المعبود</h3>
            <p style={{ color: '#4a3f3a', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', lineHeight: '1.9', marginBottom: '40px' }}>
              عام 1940 قام عبد المعبود بافتتاح أول فرع لتحميص وطحن حبوب القهوة في منطقة باب اللوق – القاهرة. واستمر من ذلك الحين في تطوير صناعة البن في مصر حتى أصبح له الريادة في مصر والوطن العربي وذلك بإنشاء أكبر مصنع بالوطن العربي والشرق الأوسط لصناعة البن باستخدام أحدث النظم التكنولوجية.
            </p>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '300px', height: '55px', background: 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)', border: '1px solid #EFC7A2', borderRadius: '11px', color: '#fff', fontSize: '0.95rem', fontWeight: '600', transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              اعرف المزيد
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
