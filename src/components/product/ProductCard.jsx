import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiPlus } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#D9534F', color: '#FFFFFF', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', zIndex: 1 }}>
        جديد
      </span>
      <Link to={/product/} style={{ display: 'block' }}>
        <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div style={{ padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#2E2E2E', lineHeight: '1.7', minHeight: '44px' }}>
            {product.name}
          </h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: '800', color: '#F5B000', fontSize: '1rem' }}>{product.price} ج.م</span>
          <span style={{ fontSize: '0.8rem', color: '#6b6b6b', textDecoration: 'line-through' }}>{Math.round(product.price * 1.2)} ج.م</span>
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
          backgroundColor: '#FFC107',
          color: '#2E2E2E',
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
