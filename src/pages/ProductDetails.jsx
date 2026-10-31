import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { getProductById, products } = useProducts()

  const product = getProductById(id)
  const similar = products.filter((p) => p.id !== id && p.category === product?.category).slice(0, 4)

  if (!product) {
    return (
      <div style={{ padding: '160px 20px 100px', textAlign: 'center', backgroundColor: '#1a100a', minHeight: '100vh' }}>
        <h2 style={{ fontWeight: '800', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>المنتج غير موجود</h2>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#1a100a' }}>
      <div className="container" style={{ padding: '160px 20px 100px' }}>
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#cccccc', marginBottom: '50px', fontWeight: '600', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
          ← العودة للمنتجات
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#2a1a12', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px', lineHeight: '1.3', fontFamily: 'Cairo, Tajawal, sans-serif' }}>{product.name}</h1>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: '#d4af37' }}>{product.price} ج.م</p>
            </div>
            <div style={{ height: '1px', backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
            <p style={{ color: '#cccccc', fontSize: '1.02rem', lineHeight: '1.9', fontFamily: 'Cairo, Tajawal, sans-serif' }}>{product.desc}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '16px',
                backgroundColor: 'transparent',
                color: product.inStock ? '#d4af37' : '#666',
                fontWeight: '700',
                fontSize: '1rem',
                border: product.inStock ? '2px solid #d4af37' : '2px solid #666',
                transition: 'all 0.3s ease-in-out',
                fontFamily: 'Cairo, Tajawal, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (product.inStock) {
                  e.currentTarget.style.backgroundColor = '#d4af37'
                  e.currentTarget.style.color = '#ffffff'
                }
              }}
              onMouseLeave={(e) => {
                if (product.inStock) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#d4af37'
                }
              }}
            >
              {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
            </button>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section style={{ padding: '100px 20px', backgroundColor: '#1a100a' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجات مشابهة</h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#d4af37' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
              {similar.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
