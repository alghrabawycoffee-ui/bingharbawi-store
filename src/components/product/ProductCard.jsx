import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiPlus } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        border: '1px solid #f1f1f1',
        transition: 'all 0.2s ease-in-out',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
      }}
    >
      <Link to={/product/} style={{ display: 'block', position: 'relative' }}>
        <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div style={{ padding: '12px 14px 14px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f1f1f', lineHeight: '1.6', minHeight: '48px' }}>
            {product.name}
          </h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ fontWeight: '800', color: '#1f1f1f', fontSize: '1rem' }}>{product.price} ج.م</span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: product.inStock ? '#22c55e' : '#d1d5db',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: product.inStock ? 'pointer' : 'not-allowed'
            }}
          >
            <FiPlus size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
