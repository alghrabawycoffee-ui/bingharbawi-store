import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link to={/product/} style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '280px', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        {!product.inStock && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--white)', fontWeight: '800', padding: '8px 20px', backgroundColor: 'rgba(220, 38, 38, 0.9)', borderRadius: 'var(--radius-md)' }}>غير متوفر</span>
          </div>
        )}
      </Link>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Link to={/product/}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px', color: 'var(--primary)', lineHeight: '1.4' }}>{product.name}</h3>
        </Link>
        {product.category && (
          <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderRadius: '50px', fontSize: '0.85rem', marginBottom: '12px', alignSelf: 'flex-start' }}>
            {product.category}
          </span>
        )}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>{product.price} ج.م</span>
          <button 
            onClick={(e) => { e.preventDefault(); if(product.inStock) addToCart(product); }}
            disabled={!product.inStock}
            className="btn"
            style={{ 
              padding: '10px 20px', 
              backgroundColor: product.inStock ? 'var(--primary)' : 'var(--border)', 
              color: product.inStock ? 'var(--white)' : 'var(--text-secondary)', 
              borderRadius: 'var(--radius-md)',
              cursor: product.inStock ? 'pointer' : 'not-allowed'
            }}
          >
            {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
          </button>
        </div>
      </div>
    </div>
  )
}
