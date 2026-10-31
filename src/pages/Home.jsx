import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import HeroSection from '../components/home/HeroSection'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div>
      <HeroSection />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-header__text">
              <div className="section-header__eyebrow">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
                مختاراتنا المميزة
              </div>
              <h2 className="section-header__title">أكثر ما يطلبه عشاق القهوة</h2>
              <p className="section-header__subtitle">خلطات متوازنة بعناية، مثالية لكل وقت من اليوم</p>
            </div>
            <Link to="/products" className="link-arrow">عرض جميع المنتجات</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-6)' }}>
            {featured.map((product) => (
              <div key={product.id} className="product-grid-item" style={{ gridColumn: 'span 3' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
