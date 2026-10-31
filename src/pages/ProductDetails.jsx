import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { getProductById } = useProducts()
  
  const product = getProductById(id)

  if (!product) return <div style={{ padding: '80px 20px', textAlign: 'center', fontSize: '1.3rem' }}>المنتج غير موجود</div>

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} 
        />
      </div>
      
      <div style={{ flex: '1', minWidth: '300px' }}>
        <Link to="/products" style={{ fontSize: '1rem', display: 'inline-block', marginBottom: '30px', color: '#d97706', fontWeight: '700' }}>
          ← رجوع للمنتجات
        </Link>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px', color: '#3b2314', fontWeight: '800' }}>{product.name}</h1>
        <p style={{ fontSize: '2rem', color: '#d97706', fontWeight: '800', marginBottom: '30px' }}>{product.price} ج.م</p>
        
        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b2314', marginBottom: '30px', borderRadius: '2px' }}></div>
        
        <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.9', marginBottom: '50px' }}>{product.desc}</p>
        
        <button 
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          style={{ 
            padding: '18px 50px', 
            backgroundColor: product.inStock ? '#3b2314' : '#ccc', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '50px', 
            cursor: product.inStock ? 'pointer' : 'not-allowed', 
            fontWeight: '700', 
            fontSize: '1.25rem', 
            boxShadow: product.inStock ? '0 10px 20px rgba(59, 35, 20, 0.3)' : 'none',
          }}
        >
          {product.inStock ? 'أضف للسلة 🛒' : 'غير متوفر حالياً'}
        </button>
      </div>
    </div>
  )
}
