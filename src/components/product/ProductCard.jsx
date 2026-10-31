import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article
      style={{
        backgroundColor: '#2a1a12',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4a2e1b'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2a1a12'
      }}
    >
      <div style={{ width: '100%', height: '250px', overflow: 'hidden' }}>
        <Link to={/product/} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '24px 20px 28px', flex: 1 }}>
        <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flex: 1 }}>
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.8', textAlign: 'center', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              {product.name}
            </h3>
          </Link>
          <p style={{ color: '#d4af37', fontWeight: '800', fontSize: '1.18rem', textAlign: 'center' }}>{product.price} ج.م</p>
        </div>
        <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{
            marginTop: '8px',
            padding: '10px 32px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease-in-out',
            fontFamily: 'Cairo, Tajawal, sans-serif',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            if (product.inStock) {
              e.currentTarget.style.borderColor = '#d4af37'
              e.currentTarget.style.color = '#d4af37'
            }
          }}
          onMouseLeave={(e) => {
            if (product.inStock) {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)'
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
