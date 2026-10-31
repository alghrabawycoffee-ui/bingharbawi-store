import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { getProductById, products } = useProducts()
  const [quantity, setQuantity] = useState(1)
  
  const product = getProductById(id)
  const relatedProducts = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 4)

  if (!product) return <div style={{ padding: '100px 20px', textAlign: 'center', fontSize: '1.3rem' }}>المنتج غير موجود</div>

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleBuyNow = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    window.location.href = '#/checkout'
  }

  return (
    <div>
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>الرئيسية</Link>
            <span>/</span>
            <Link to="/products" style={{ color: 'var(--accent)' }}>المنتجات</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{product.name}</span>
          </div>
        </div>
      </div>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} 
              />
            </div>
            
            <div>
              <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderRadius: '50px', marginBottom: '16px', fontSize: '0.9rem' }}>
                {product.category}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--primary)', fontWeight: '800', lineHeight: '1.3' }}>{product.name}</h1>
              <div style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '800', marginBottom: '24px' }}>{product.price} ج.م</div>
              
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, var(--primary), var(--accent))', marginBottom: '24px', borderRadius: '2px' }}></div>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '32px' }}>{product.desc}</p>
              
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontWeight: '700', marginBottom: '12px' }}>الكمية</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '8px 20px' }}>
                    <button onClick={() => setQuantity(q => Math.max(1, q-1))} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--primary)' }}>-</button>
                    <span style={{ fontWeight: '800', fontSize: '1.2rem', minWidth: '30px', textAlign: 'center' }}>{quantity}</span>
                    <button onClick={() => setQuantity(q => q+1)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--primary)' }}>+</button>
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>{product.inStock ? 'متوفر' : 'غير متوفر'}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn"
                  style={{ 
                    flex: '1', 
                    minWidth: '200px', 
                    padding: '16px', 
                    backgroundColor: product.inStock ? 'var(--primary)' : 'var(--border)', 
                    color: product.inStock ? 'var(--white)' : 'var(--text-secondary)', 
                    cursor: product.inStock ? 'pointer' : 'not-allowed',
                    fontSize: '1.1rem'
                  }}
                >
                  أضف للسلة
                </button>
                <button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="btn btn-accent"
                  style={{ 
                    flex: '1', 
                    minWidth: '200px', 
                    padding: '16px', 
                    cursor: product.inStock ? 'pointer' : 'not-allowed',
                    fontSize: '1.1rem'
                  }}
                >
                  اشتري الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="section-title">منتجات مشابهة</h2>
            <p className="section-subtitle">قد يعجبك أيضاً</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
