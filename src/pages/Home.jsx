import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'
import { FiChevronLeft } from 'react-icons/fi'

const categories = [
  { id: 1, name: 'بن محمص', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'بن تركي', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'خلطات خاصة', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'أكياس هدايا', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400&auto=format&fit=crop' }
]

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 8)

  return (
    <div style={{ backgroundColor: '#f8f9fa', paddingBottom: '80px' }}>
      <div className="container" style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '800' }}>التصنيفات</h2>
            <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#22c55e', fontSize: '0.9rem', fontWeight: '700' }}>
              عرض الكل
              <FiChevronLeft />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <Link to="/products" key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '72px' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #e5e7eb' }}>
                  <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', textAlign: 'center' }}>{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '800' }}>الأكثر مبيعاً</h2>
            <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#22c55e', fontSize: '0.9rem', fontWeight: '700' }}>
              عرض الكل
              <FiChevronLeft />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
