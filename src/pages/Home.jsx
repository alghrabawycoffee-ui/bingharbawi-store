import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'بن تركي', name: 'بن تركي' },
  { id: 'بن برازيلي', name: 'بن برازيلي' },
  { id: 'خلطات', name: 'خلطات' },
  { id: 'مقاهي مختصة', name: 'مقاهي مختصة' },
]

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div style={{ backgroundColor: '#fdfbf7' }}>
      <section style={{ 
        position: 'relative', 
        height: '82vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: '900', lineHeight: '1.1', textShadow: '2px 6px 18px rgba(0,0,0,0.35)' }}>
            أصالة القهوة في كل فنجان
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', opacity: 0.95, maxWidth: '720px' }}>
            اكتشف تشكيلتنا الفريدة من أجود أنواع البن المحمص بعناية لتجربة لا تُنسى
          </p>
          <Link to="/products" style={{ 
            marginTop: '16px',
            padding: '16px 48px', 
            backgroundColor: '#d97706', 
            color: '#fff', 
            borderRadius: '999px', 
            fontSize: '1.08rem', 
            fontWeight: '800',
            boxShadow: '0 12px 30px rgba(217, 119, 6, 0.38)'
          }}>
            تسوق الآن
          </Link>
        </div>
      </section>

      <section style={{ padding: '70px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#3b2314', fontWeight: '900' }}>التصنيفات</h2>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '6px' }}>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  backgroundColor: '#fff',
                  color: '#3b2314',
                  fontWeight: '800',
                  boxShadow: '0 6px 18px rgba(59, 35, 20, 0.05)',
                  border: '1px solid rgba(59, 35, 20, 0.04)',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '30px 20px 90px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', color: '#3b2314', fontWeight: '900', marginBottom: '10px' }}>أحدث الإضافات</h2>
            <div style={{ width: '64px', height: '4px', backgroundColor: '#d97706', borderRadius: '2px' }}></div>
          </div>
          <Link to="/products" style={{ fontWeight: '800', color: '#d97706' }}>عرض كل المنتجات ←</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '26px' }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
