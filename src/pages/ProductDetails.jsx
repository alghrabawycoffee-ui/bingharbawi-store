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
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#F4F0EF', minHeight: '60vh' }}>
        <h2 style={{ fontWeight: '700', color: '#251A16' }}>المنتج غير موجود</h2>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F4F0EF' }}>
      <div className="container" style={{ paddingBlock: '60px' }}>
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#654D3C', marginBottom: '40px', fontWeight: '500' }}>
          ← العودة للمنتجات
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div style={{ backgroundColor: '#251A16', borderRadius: '11px', border: '1px solid #EFC7A2', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '320px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: '#251A16', marginBottom: '16px', lineHeight: '1.3' }}>{product.name}</h1>
              <p style={{ fontSize: '2rem', fontWeight: '700', color: '#4D311A' }}>{product.price} ج.م</p>
            </div>
            <div style={{ height: '1px', backgroundColor: '#EFC7A2' }}></div>
            <p style={{ color: '#4a3f3a', fontSize: '1.05rem', lineHeight: '1.9' }}>{product.desc}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '16px',
                borderRadius: '11px',
                background: product.inStock ? 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)' : '#666',
                color: '#fff',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid #EFC7A2',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => { if (product.inStock) e.currentTarget.style.transform = 'scale(1.01)' }}
              onMouseLeave={(e) => { if (product.inStock) e.currentTarget.style.transform = 'scale(1)' }}
            >
              {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
            </button>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: '#251A16', marginBottom: '40px', textAlign: 'center' }}>منتجات مشابهة</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', justifyItems: 'center' }}>
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
