import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border-light)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
    >
      <Link to={/product/} style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '320px', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>
      <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
        <div>
          {product.category && (
            <span style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: '999px', border: '1px solid var(--color-border)', fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '14px' }}>
              {product.category}
            </span>
          )}
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.01em' }}>{product.name}</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary)' }}>{product.price} <span style={{ fontSize: '1rem', fontWeight: '700' }}>ج.م</span></span>
          <button 
            onClick={(e) => { e.preventDefault(); if(product.inStock) addToCart(product); }}
            disabled={!product.inStock}
            className="btn"
            style={{ 
              padding: '10px 22px', 
              backgroundColor: product.inStock ? 'var(--color-primary)' : '#d7d0c9', 
              color: '#fff', 
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.98rem'
            }}
          >
            {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
          </button>
        </div>
      </div>
    </article>
  )
}
