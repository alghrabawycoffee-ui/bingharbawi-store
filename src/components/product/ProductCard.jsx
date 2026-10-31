import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '308px',
        height: '520px',
        borderRadius: '11px',
        border: '1px solid #EFC7A2',
        backgroundColor: '#251A16',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#654D3C'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#251A16'
      }}
    >
      <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', position: 'relative' }}>
        <Link to={/product/} style={{ display: 'block', width: '220px', height: '300px', position: 'relative', transition: 'transform 0.3s ease-in-out' }} 
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-64px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Link>
      </div>
      
      <div style={{ borderTop: '1px solid #EFC7A2', borderBottom: '1px solid #EFC7A2', paddingBlock: '16px', textAlign: 'center', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to={/product/}>
          <h3 style={{ color: '#fff', fontWeight: '700', fontSize: '1.25rem', lineHeight: '1.6', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.name}
          </h3>
        </Link>
      </div>
      
      <button
        onClick={(e) => {
          e.preventDefault()
          addToCart(product)
        }}
        disabled={!product.inStock}
        style={{
          marginTop: '16px',
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          background: product.inStock ? 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)' : '#666',
          color: '#fff',
          fontWeight: '600',
          fontSize: '0.95rem',
          border: '1px solid #EFC7A2',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
      </button>
    </article>
  )
}
