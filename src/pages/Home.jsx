import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import Hero from '../components/home/Hero'
import ProductCard from '../components/product/ProductCard'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 8)

  return (
    <div>
      <Hero />

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.01em', marginBottom: '12px', textTransform: 'uppercase' }}>
              New Arrivals
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>Explore our latest roasts</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(18px, 3vw, 32px)' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/products" style={{ padding: '14px 42px', border: '1px solid var(--text-primary)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.95rem' }}>
              Shop All
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
