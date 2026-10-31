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
          <div className="section-header">
            <div className="section-title-group">
              <h2>مختاراتنا</h2>
              <p>أكثر ما يميز متجر بن الغرباوي من أجود الخلطات</p>
            </div>
            <Link to="/products" className="btn btn-ghost">عرض كل المنتجات</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
