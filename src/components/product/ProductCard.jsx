import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiPlus } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Link to={/product/} style={{ display: 'block' }}>
        <div style={{ width: '100%', height: '170px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div style={{ padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '46px' }}>
            {product.name}
          </h3>
        </Link>
        <span style={{ fontWeight: '800', color: '#D97706', fontSize: '1rem' }}>{product.price} ج.م</span>
      </div>
      <button
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: product.inStock ? '#D97706' : '#d1d5db',
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
  )
}
