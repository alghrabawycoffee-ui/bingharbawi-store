import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e8e1dc', transition: 'box-shadow 0.2s' }}>
      <Link to={/product/}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '260px', objectFit: 'cover' }} 
        />
      </Link>
      <div style={{ padding: '18px' }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px', color: '#3b2314' }}>{product.name}</h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#8b5a2b' }}>{product.price} ج.م</span>
          <button 
            onClick={() => product.inStock && addToCart(product)}
            disabled={!product.inStock}
            style={{ 
              padding: '8px 18px', 
              backgroundColor: product.inStock ? '#3b2314' : '#ccc', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              fontWeight: '600'
            }}
          >
            {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
          </button>
        </div>
      </div>
    </div>
  )
}
