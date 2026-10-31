import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import IntroHero from '../components/home/IntroHero'
import ProductTile from '../components/product/ProductTile'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div>
      <IntroHero />

      <section className="section-tight">
        <div className="container">
          <div className="section-header">
            <div className="section-header-group">
              <div className="section-eyebrow">
                <span></span>
                التشكيلة
              </div>
              <h2 className="section-title">مختاراتنا</h2>
              <p className="section-subtitle">كل خلطة تُحمص على حدة للحفاظ على نكهتها الفريدة</p>
            </div>
            <Link to="/products" className="link-text">عرض كل المنتجات</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(24px, 6vw, 40px)' }}>
            {featured.map((product) => (
              <div key={product.id} style={{ gridColumn: 'span 3' }} className="home-tile">
                <ProductTile product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{
        @media (max-width: 1180px) {
          .home-tile { grid-column: span 6; }
        }
        @media (max-width: 720px) {
          .home-tile { grid-column: span 12; }
        }
      }</style>
    </div>
  )
}
