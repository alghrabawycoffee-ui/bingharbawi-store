import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'
import { FiChevronRight } from 'react-icons/fi'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { getProductById } = useProducts()

  const product = getProductById(id)

  if (!product) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontWeight: '800' }}>المنتج غير موجود</h2>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '90px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
        <Link to="/" style={{ color: '#1A1A1A' }}>
          <FiChevronRight size={24} />
        </Link>
        <span style={{ fontWeight: '700' }}>تفاصيل المنتج</span>
        <div style={{ width: '24px' }}></div>
      </div>

      <div style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '18px' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '10px', lineHeight: '1.8' }}>{product.name}</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '800', color: '#D97706' }}>{product.price} ج.م</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '8px' }}>الوصف</h2>
          <p style={{ color: '#4f4f4f', lineHeight: '1.9', fontSize: '0.95rem' }}>{product.desc}</p>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', borderTop: '1px solid #f1f1f1', padding: '12px 16px', zIndex: 100 }}>
        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: product.inStock ? '#1A1A1A' : '#d1d5db',
            color: '#FFFFFF',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '1rem'
          }}
        >
          {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
        </button>
      </div>
    </div>
  )
}
