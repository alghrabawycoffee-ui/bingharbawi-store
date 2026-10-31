import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article
      style={{
        backgroundColor: '#2a1a12',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4a2e1b'
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2a1a12'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ width: '100%', height: '250px', overflow: 'hidden', position: 'relative' }}>
        <Link to={/product/} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault()
            addToCart(product)
          }}
          disabled={!product.inStock}
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#d4af37',
            color: '#1a100a',
            border: 'none',
            fontSize: '1.4rem',
            fontWeight: '700',
            cursor: product.inStock ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          +
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '24px 20px 28px', flex: 1 }}>
        <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flex: 1 }}>
          <Link to={/product/}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.8', textAlign: 'center', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              {product.name}
            </h3>
          </Link>
          <p style={{ color: '#d4af37', fontWeight: '800', fontSize: '1.18rem', textAlign: 'center' }}>{product.price} ج.م</p>
        </div>
        <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
      </div>
    </article>
  )
}
