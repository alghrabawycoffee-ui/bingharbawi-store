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
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '22px 20px 26px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: '800', color: '#3b2314', lineHeight: '1.8', textAlign: 'center', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              {product.name}
            </h3>
          </Link>
          <p style={{ color: '#d4af37', fontWeight: '800', fontSize: '1.2rem', textAlign: 'center' }}>{product.price} ج.م</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{
            marginTop: 'auto',
            width: '100%',
            padding: '13px',
            backgroundColor: product.inStock ? '#3b2314' : '#999',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '0.96rem',
            transition: 'all 0.3s ease-in-out',
            fontFamily: 'Cairo, Tajawal, sans-serif',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            if (product.inStock) {
              e.currentTarget.style.backgroundColor = '#d4af37'
            }
          }}
          onMouseLeave={(e) => {
            if (product.inStock) {
              e.currentTarget.style.backgroundColor = '#3b2314'
            }
          }}
        >
          {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
        </button>
      </div>
    </article>
  )
}
