import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiChevronRight } from 'react-icons/fi'

export default function ProductView() {
  const { id } = useParams()
  const { getProduct } = useProducts()
  const { addToCart } = useCart()
  const p = getProduct(id)
  if (!p) return null

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderBottom: '1px solid #f2f2f2' }}>
        <Link to="/" style={{ display: 'flex' }}><FiChevronRight size={22} /></Link>
        <div style={{ fontWeight: 800 }}>تفاصيل المنتج</div>
      </header>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <img src={p.image} alt={p.name} style={{ width: '100%', height: 320, objectFit: 'cover' }} />
        <div style={{ padding: '16px' }}>
          <h1 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.8 }}>{p.name}</h1>
          <div style={{ fontSize: 20, fontWeight: 900, margin: '10px 0' }}>{p.price} ر.س</div>
          <p style={{ color: '#555', lineHeight: 1.9 }}>{p.desc}</p>
          <button onClick={() => addToCart(p)} style={{ width: '100%', marginTop: 24, padding: 14, background: '#000', color: '#fff', borderRadius: 10, fontWeight: 800 }}>أضف للسلة</button>
        </div>
      </div>
    </div>
  )
}
