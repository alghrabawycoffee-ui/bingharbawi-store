import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #3b2314 0%, #6b3e26 100%)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '20px' }}>أجود أنواع البن من بن الغرباوي</h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '40px', opacity: '0.95' }}>قهوة غنية بالنكهة.. محمصة بعناية لتصل إليك بأفضل طعم</p>
          <Link to="/products" style={{ padding: '16px 40px', backgroundColor: '#d97706', color: '#fff', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '800', boxShadow: '0 10px 30px rgba(217, 119, 6, 0.4)' }}>
            تصفح المنتجات
          </Link>
        </div>
      </section>

      <section style={{ padding: '70px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#3b2314', fontWeight: '800', marginBottom: '15px' }}>أبرز المنتجات</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>اختياراتنا المميزة لعشاق القهوة</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/products" style={{ padding: '14px 35px', backgroundColor: '#3b2314', color: '#fff', borderRadius: '10px', fontWeight: '700', fontSize: '1.05rem' }}>
            عرض جميع المنتجات
          </Link>
        </div>
      </section>
    </div>
  )
}
