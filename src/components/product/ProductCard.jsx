import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 220ms ease, box-shadow 220ms ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      <Link to={/product/} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 420ms ease' }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-6)', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {product.category && (
            <span style={{ fontSize: '0.92rem', color: 'var(--text-tertiary)' }}>{product.category}</span>
          )}
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.18rem', fontWeight: '800', letterSpacing: '-0.01em', lineHeight: '1.6' }}>{product.name}</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: '6px', fontWeight: '800', fontSize: '1.26rem' }}>
            {product.price}
            <span style={{ fontSize: '0.98rem', fontWeight: '700' }}>ج.م</span>
          </span>
          <button 
            onClick={(e) => { e.preventDefault(); if (product.inStock) addToCart(product); }}
            disabled={!product.inStock}
            className="btn"
            style={{ padding: '10px 18px', borderRadius: 'var(--radius-xs)', backgroundColor: product.inStock ? 'transparent' : 'rgba(138, 124, 114, 0.12)', color: product.inStock ? 'var(--text-primary)' : 'var(--text-tertiary)', border: product.inStock ? '1px solid var(--border)' : '1px solid transparent', fontSize: '0.98rem' }}
          >
            {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
          </button>
        </div>
      </div>
    </article>
  )
}
