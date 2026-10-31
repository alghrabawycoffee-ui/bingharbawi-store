import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiChevronRight } from 'react-icons/fi'
import Header from '../components/layout/Header'

export default function ProductDetails() {
  const { id } = useParams()
  const { getProductById } = useProducts()
  const { addToCart } = useCart()
  const product = getProductById(id)

  if (!product) return null

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 14px', gap: '10px' }}>
        <Link to="/" style={{ color: '#1A1A1A' }}><FiChevronRight size={22} /></Link>
        <span style={{ fontWeight: '700' }}>تفاصيل المنتج</span>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h1 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: '1.8' }}>{product.name}</h1>
          <span style={{ fontSize: '1.3rem', fontWeight: '800' }}>{product.price} ر.س</span>
          <p style={{ color: '#4f4f4f', lineHeight: '1.9' }}>{product.desc}</p>
          <button onClick={() => addToCart(product)} style={{ width: '100%', padding: '14px', backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '8px', fontWeight: '800' }}>أضف للسلة</button>
        </div>
      </div>
    </div>
  )
}
