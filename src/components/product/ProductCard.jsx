import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FiPlus } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  
  return (
    <div style={{ border: '1px solid #f0f0f0', borderRadius: '16px', overflow: 'hidden', position: 'relative', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.01)' }}>
      <Link to={/product/} style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ width: '100%', aspectRatio: '1/1', background: '#f9f9f9', overflow: 'hidden' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Link>
      <div style={{ padding: '12px 12px 16px' }}>
        <Link to={/product/} style={{ textDecoration: 'none', color: '#1A1A1A' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: '1.8', height: '46px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.name}
          </div>
        </Link>
        <div style={{ fontWeight: 900, fontSize: '15px', marginTop: '10px' }}>{product.price} ر.س</div>
      </div>
      <button
        onClick={() => addToCart(product)}
        style={{ position: 'absolute', bottom: '12px', left: '12px', width: '36px', height: '36px', borderRadius: '12px', background: '#000', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
      >
        <FiPlus size={18} />
      </button>
    </div>
  )
}
