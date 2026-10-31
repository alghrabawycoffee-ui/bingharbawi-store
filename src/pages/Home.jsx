import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'
import { FiSearch } from 'react-icons/fi'

const categories = [
  { id: 1, name: 'قهوة تركية' },
  { id: 2, name: 'قهوة برازيلية' },
  { id: 3, name: 'أدوات التحضير' },
  { id: 4, name: 'أكياس هدايا' },
  { id: 5, name: 'خلطات خاصة' }
]

export default function Home() {
  const { products } = useProducts()

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container" style={{ paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ position: 'relative' }}>
          <FiSearch size={18} style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: '#6b6b6b' }} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            style={{
              width: '100%',
              padding: '12px 48px 12px 18px',
              borderRadius: '50px',
              border: '1px solid #f1f1f1',
              backgroundColor: '#f9f9f9',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={{
                padding: '9px 20px',
                borderRadius: '50px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #f1f1f1',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#2E2E2E'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', height: '230px' }}>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <section style={{ paddingBottom: '90px' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '12px', color: '#2E2E2E' }}>الأكثر مبيعاً</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
