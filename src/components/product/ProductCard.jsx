import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div style={{ width: '100%', height: '250px', overflow: 'hidden', backgroundColor: '#f8f6f3' }}>
        <Link to={/product/} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 18px 24px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#3b2314', lineHeight: '1.8', textAlign: 'center' }}>
              {product.name}
            </h3>
          </Link>
          <p style={{ color: '#3b2314', fontWeight: '800', fontSize: '1.15rem', textAlign: 'center' }}>{product.price} ج.م</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{
            marginTop: 'auto',
            width: '100%',
            padding: '12px',
            backgroundColor: product.inStock ? '#3b2314' : '#999',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '0.95rem',
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
              e.currentTarget.style.backgroundColor = '#3b2314'
              e.currentTarget.style.color = '#ffffff'
            }
          }}
        >
          {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
        </button>
      </div>
    </article>
  )
}
