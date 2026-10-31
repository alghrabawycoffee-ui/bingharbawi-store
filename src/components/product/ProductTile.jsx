import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductTile({ product }) {
  const { addToCart } = useCart()

  return (
    <article style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Link to={/product/} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-md)', backgroundColor: '#ece6df' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 520ms ease' }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {product.category && (
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)' }}>{product.category}</span>
            )}
            <Link to={/product/}>
              <h3 style={{ fontSize: '1.08rem', fontWeight: '800', letterSpacing: '-0.01em' }}>{product.name}</h3>
            </Link>
          </div>
          <span style={{ fontWeight: '800', whiteSpace: 'nowrap' }}>{product.price} ج.م</span>
        </div>
        <button 
          onClick={(e) => { e.preventDefault(); if (product.inStock) addToCart(product); }}
          disabled={!product.inStock}
          className="btn btn-ghost"
          style={{ alignSelf: 'flex-start', padding: '10px 18px', marginTop: '4px' }}
        >
          {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
        </button>
      </div>
    </article>
  )
}
