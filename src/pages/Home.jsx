import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div style={{ backgroundColor: '#fdfbf7' }}>
      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ffffff',
          backgroundImage: 'linear-gradient(rgba(26, 16, 10, 0.7), rgba(26, 16, 10, 0.7)), url("https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', maxWidth: '1000px', padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '900', lineHeight: '1.15', letterSpacing: '-0.01em', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            اكتشف نوع القهوة اللي يناسبك
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', opacity: 0.95, fontWeight: '600' }}>
            اكتشف تشكيلتنا من أنواع القهوة واختر المفضلة لديك
          </p>
          <Link
            to="/products"
            style={{
              marginTop: '20px',
              padding: '16px 60px',
              borderRadius: '999px',
              backgroundColor: '#d4af37',
              color: '#1a100a',
              fontWeight: '800',
              fontSize: '1.05rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease-in-out',
              fontFamily: 'Cairo, Tajawal, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b8941f'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            استكشف قهوتنا
          </Link>
        </div>
      </section>

      <section style={{ padding: 'clamp(70px, 10vw, 100px) 0', backgroundColor: '#1a100a' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#d4af37', marginBottom: '12px', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من نحن</h2>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', color: '#ffffff', lineHeight: '1.3', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</h3>
            </div>
            <p style={{ color: '#cccccc', fontSize: '1.02rem', lineHeight: '2', fontWeight: '400' }}>
              منذ عقود، ورثنا أصول تحميص البن اليمني الأصيل، نختار أجود حبوب البن من المزارع المختارة بعناية، ونحمصها على دفعات صغيرة وفق أسرار متوارثة، لنحافظ على نكهتها الغنية وعطرها الفريد. في بن الغرباوي، كل فنجان قهوة يحمل قصة أصالة وإرث عريق يروي عبق الضيافة العربية.
            </p>
            <div>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 40px',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  fontWeight: '700',
                  fontSize: '0.98rem',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: 'Cairo, Tajawal, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37'
                  e.currentTarget.style.color = '#1a100a'
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
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="بن محمص"
              style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(70px, 10vw, 100px) 0', backgroundColor: '#fdfbf7' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#3b2314', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: '#d4af37' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(70px, 10vw, 100px) 0', backgroundColor: '#f8f6f3' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="فنجان قهوة"
              style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#3b2314', lineHeight: '1.3', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من الطبيعة إلى فنجانك</h2>
            <p style={{ color: '#4a3f3a', fontSize: '1.05rem', lineHeight: '2' }}>
              نختار البن من مزارع مختارة بعناية، ونقدّمه لك طازجًا بنكهات تعبّر عن أصل الحبة وجودة التحميص. كل خطوة في رحلتنا مدروسة بعناية للحفاظ على نقاء النكهة وأصالة الطعم.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', backgroundColor: '#1a100a', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>توليفتك على مزاجك</h2>
          <p style={{ color: '#cccccc', fontSize: '1.1rem', maxWidth: '700px' }}>
            اختار نوع قهوتك ودرجة التحميص والتحويجة حسب ذوقك الخاص
          </p>
          <Link
            to="/products"
            style={{
              padding: '14px 50px',
              border: '2px solid #d4af37',
              color: '#d4af37',
              fontWeight: '700',
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              fontFamily: 'Cairo, Tajawal, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37'
              e.currentTarget.style.color = '#1a100a'
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
    </div>
  )
}
