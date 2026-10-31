import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div 
      style={{ 
        backgroundColor: '#fff', 
        borderRadius: '20px', 
        overflow: 'hidden', 
        boxShadow: '0 8px 24px rgba(59, 35, 20, 0.06)',
        transition: 'all 0.25s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 14px 34px rgba(59, 35, 20, 0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 35, 20, 0.06)'
      }}
    >
      <Link to={/product/} style={{ display: 'block', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
        />
      </Link>
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', flex: 1, gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#3b2314', lineHeight: '1.7' }}>{product.name}</h3>
          <p style={{ color: '#d97706', fontWeight: '800', fontSize: '1.16rem' }}>{product.price} ج.م</p>
        </div>
        <button 
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{ 
            marginTop: 'auto',
            width: '100%', 
            padding: '12px', 
            backgroundColor: product.inStock ? '#d97706' : '#ccc', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            fontWeight: '800', 
            fontSize: '0.98rem', 
            cursor: product.inStock ? 'pointer' : 'not-allowed',
            transition: 'filter 0.2s ease'
          }}
          onMouseEnter={(e) => { if(product.inStock) e.currentTarget.style.filter = 'brightness(0.95)' }}
          onMouseLeave={(e) => { if(product.inStock) e.currentTarget.style.filter = 'brightness(1)' }}
        >
          {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
        </button>
      </div>
    </div>
  )
}
