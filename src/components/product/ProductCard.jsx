import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiPlus } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const oldPrice = Math.round(product.price * 1.2)

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '200px',
        flexShrink: 0
      }}
    >
      <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#D9534F', color: '#FFFFFF', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', zIndex: 1 }}>
        %17 خصم
      </span>
      <Link to={/product/} style={{ display: 'block' }}>
        <div style={{ width: '100%', height: '140px', overflow: 'hidden', backgroundColor: '#F9F9F9' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div style={{ padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.6', minHeight: '44px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.name}
          </h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#D9534F', textDecoration: 'line-through', fontSize: '12px' }}>{oldPrice} ج.م</span>
          <span style={{ color: '#1A1A1A', fontWeight: '800', fontSize: '16px' }}>{product.price} ج.م</span>
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: product.inStock ? '#FFC107' : '#d1d5db',
          color: '#1A1A1A',
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
