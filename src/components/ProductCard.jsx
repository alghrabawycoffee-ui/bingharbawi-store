import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid #f0f0f0' }}>
      <Link to={/product/}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '230px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />
      </Link>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: '800', color: '#3b2314' }}>{product.name}</h3>
      <p style={{ color: '#8b5a2b', fontWeight: '800', fontSize: '1.25rem', marginBottom: '18px' }}>{product.price} ج.م</p>
      <button 
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        style={{ width: '100%', padding: '12px', backgroundColor: product.inStock ? '#3b2314' : '#ccc', color: '#fff', border: 'none', borderRadius: '10px', cursor: product.inStock ? 'pointer' : 'not-allowed', fontWeight: '700', fontSize: '1rem' }}
      >
        {product.inStock ? 'أضف للسلة 🛒' : 'غير متوفر'}
      </button>
    </div>
  )
}
