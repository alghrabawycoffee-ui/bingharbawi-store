import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={/product/} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#f2ede8' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms ease' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.01)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontWeight: '600' }}>{product.name}</span>
          {product.category && <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{product.category}</span>}
        </div>
        <span style={{ fontWeight: '600' }}>{product.price} ج.م</span>
      </div>
    </Link>
  )
}
