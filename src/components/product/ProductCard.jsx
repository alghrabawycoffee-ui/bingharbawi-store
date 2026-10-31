import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={/product/} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#f5f3f0' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontWeight: '600', letterSpacing: '0.01em' }}>{product.name}</span>
        <span style={{ color: 'var(--text-secondary)' }}>{product.price} ج.م</span>
      </div>
    </Link>
  )
}
