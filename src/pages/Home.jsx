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
      
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#3b2314' }}>أبرز المنتجات</h2>
            <Link to="/products" style={{ color: '#8b5a2b', fontWeight: '600' }}>عرض الكل ←</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
