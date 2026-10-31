import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div style={{ backgroundColor: '#1a100a' }}>
      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ffffff',
          overflow: 'hidden'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="https://api.yemenicafe.com/storage/content/videos/GCoU4WkIGIbq4VIOAErralJIczPwZYLFMAkg2ytp.webm" type="video/webm" />
        </video>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(26, 16, 10, 0.6), rgba(26, 16, 10, 0.6))',
            zIndex: 1
          }}
        ></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px', maxWidth: '1100px', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: '800', lineHeight: '1.12', letterSpacing: '-0.01em', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            اكتشف نوع القهوة اللي يناسبك
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', opacity: 0.9, fontWeight: '500', color: '#ffffff' }}>
            اكتشف تشكيلتنا من أنواع القهوة واختر المفضلة لديك
          </p>
          <Link
            to="/products"
            style={{
              marginTop: '24px',
              padding: '16px 62px',
              borderRadius: '999px',
              backgroundColor: 'transparent',
              color: '#d4af37',
              fontWeight: '700',
              fontSize: '1.02rem',
              border: '2px solid #d4af37',
              transition: 'all 0.3s ease-in-out',
              fontFamily: 'Cairo, Tajawal, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#d4af37'
            }}
          >
            اكتشف قهوتنا
          </Link>
        </div>
      </section>

      <section style={{ padding: '100px 20px', backgroundColor: '#1a100a' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', order: 2 }}>
            <img
              src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="أيدي بتمسك حبوب بن"
              style={{ width: '100%', height: '100%', minHeight: '440px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', order: 1 }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#d4af37', marginBottom: '10px', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من نحن</h2>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900', color: '#ffffff', lineHeight: '1.25', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</h3>
            </div>
            <p style={{ color: '#cccccc', fontSize: '1.02rem', lineHeight: '1.8', fontWeight: '400' }}>
              منذ عقود، ورثنا أصول تحميص البن اليمني الأصيل، نختار أجود حبوب البن من المزارع المختارة بعناية، ونحمصها على دفعات صغيرة وفق أسرار متوارثة، لنحافظ على nكهتها الغنية وعطرها الفريد. في بن الغرباوي، كل فنجان قهوة يحمل قصة أصالة وإرث عريق يروي عبق الضيافة العربية.
            </p>
            <div>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 42px',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  fontWeight: '700',
                  fontSize: '0.98rem',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: 'Cairo, Tajawal, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#d4af37'
                }}
              >
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 20px', backgroundColor: '#1a100a' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: '#d4af37' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 20px', backgroundColor: '#fdfbf7', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'url("https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: '800', color: '#3b2314', fontFamily: 'Cairo, Tajawal, sans-serif' }}>توليفتك على مزاجك</h2>
          <p style={{ color: '#4a3f3a', fontSize: '1.12rem', maxWidth: '700px' }}>
            اختر نوع قهوتك ودرجة التحميص والتحويجة
          </p>
          <Link
            to="/products"
            style={{
              padding: '14px 56px',
              border: '2px solid #d4af37',
              color: '#d4af37',
              fontWeight: '700',
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              fontFamily: 'Cairo, Tajawal, sans-serif',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#d4af37'
            }}
          >
            ابدأ الآن
          </Link>
        </div>
      </section>

      <section style={{ padding: '100px 20px', backgroundColor: '#1a100a' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', order: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="فنجان قهوة بني كلاسيكي"
              style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', order: 2 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#d4af37', lineHeight: '1.3', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من الطبيعة إلى فنجانك</h2>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.8' }}>
              نختار البن من مزارع مختارة بعناية، ونقدّمه لك طازجًا بنكهات تعبّر عن أصل الحبة وجودة التحميص. كل خطوة في رحلتنا مدروسة بعناية للحفاظ على نقاء النكهة وأصالة الطعم.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
