import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div style={{ backgroundColor: '#fdfbf7' }}>
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', marginBottom: '20px', textShadow: '2px 4px 10px rgba(0,0,0,0.3)' }}>
            أصالة القهوة في كل فنجان
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: '40px', opacity: 0.9 }}>
            اكتشف تشكيلتنا الفريدة من أجود أنواع البن المحمص بعناية
          </p>
          <Link to="/products" style={{ 
            padding: '16px 45px', 
            backgroundColor: '#d97706', 
            color: '#fff', 
            borderRadius: '50px', 
            fontSize: '1.2rem', 
            fontWeight: '700',
            boxShadow: '0 10px 25px rgba(217, 119, 6, 0.4)'
          }}>
            تسوق الآن
          </Link>
        </div>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#3b2314', fontWeight: '800', marginBottom: '15px' }}>أحدث الإضافات</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#d97706', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
