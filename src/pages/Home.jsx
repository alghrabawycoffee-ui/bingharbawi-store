import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import Hero from '../components/home/Hero'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <div>
      <Hero />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '800', letterSpacing: '-0.01em' }}>أحدث الإضافات</h2>
            <Link to="/products" className="btn btn-link">عرض الكل</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(18px, 3vw, 34px)' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
