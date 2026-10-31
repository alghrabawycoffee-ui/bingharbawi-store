import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      borderRadius: '16px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; }}
    >
      <Link to={/product/} style={{ display: 'block', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.5s' }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '10px', color: '#3b2314' }}>{product.name}</h3>
        <p style={{ color: '#d97706', fontWeight: '800', fontSize: '1.3rem', marginBottom: '20px' }}>{product.price} ج.م</p>
        
        <button 
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{ 
            marginTop: 'auto',
            width: '100%', 
            padding: '12px', 
            backgroundColor: product.inStock ? '#3b2314' : '#ccc', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '10px', 
            fontWeight: '700', 
            fontSize: '1rem', 
            cursor: product.inStock ? 'pointer' : 'not-allowed'
          }}
        >
          {product.inStock ? 'أضف للسلة 🛒' : 'غير متوفر'}
        </button>
      </div>
    </div>
  )
}
