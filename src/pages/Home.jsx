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

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>التشكيلة</h2>
            <Link to="/products" className="btn btn-link">كل المنتجات</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(20px, 4vw, 36px)' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
