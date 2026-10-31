import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div>
      <Hero />
      <Features />
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">أبرز المنتجات</h2>
          <p className="section-subtitle">اختياراتنا المميزة لعشاق القهوة الأصيلة</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/products" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1.05rem' }}>
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>جاهز لتجربة قهوة مميزة؟</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>تسوق الآن واكتشف أجود أنواع البن</p>
          <Link to="/products" className="btn btn-accent" style={{ padding: '16px 50px', fontSize: '1.1rem' }}>
            ابدأ التسوق
          </Link>
        </div>
      </section>
    </div>
  )
}
