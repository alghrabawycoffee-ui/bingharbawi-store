import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'
import { FiSearch } from 'react-icons/fi'

const categories = [
  { id: 1, name: 'الرئيسية' },
  { id: 2, name: 'المنتجات' },
  { id: 3, name: 'العروض' },
  { id: 4, name: 'تواصل معنا' }
]

export default function Home() {
  const { products } = useProducts()

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ backgroundColor: '#FFC107', paddingBottom: '10px' }}>
        <div className="container" style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <FiSearch size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6b6b6b' }} />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              style={{
                width: '100%',
                padding: '11px 44px 11px 16px',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: '#FFFFFF',
                fontSize: '0.93rem'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '2px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  backgroundColor: 'transparent',
                  whiteSpace: 'nowrap',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F9F6F0', padding: '30px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1', minWidth: '260px' }}>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '800', color: '#1A1A1A', lineHeight: '1.4' }}>
              مجموعة بن الغرباوي المميزة
            </h1>
            <p style={{ color: '#4f4f4f', fontSize: '1rem' }}>أجود أنواع البن</p>
            <p style={{ fontWeight: '800', fontSize: '1.2rem' }}>ابتداءً من 150 ج.م</p>
            <button style={{ padding: '11px 28px', backgroundColor: '#28A745', color: '#FFFFFF', borderRadius: '8px', fontWeight: '700', alignSelf: 'flex-start' }}>
              تسوق الآن
            </button>
          </div>
          <div style={{ flex: '1', minWidth: '260px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=800&auto=format&fit=crop"
              alt="coffee"
              style={{ width: '100%', maxWidth: '380px', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '30px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800' }}>الأكثر مبيعاً</h2>
          </div>
          <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '8px' }}>
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800' }}>عروض خاصة</h2>
          </div>
          <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '8px' }}>
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
