import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiChevronRight, FiShoppingBag } from 'react-icons/fi'
import { useState } from 'react'
import CartDrawer from '../components/cart/CartDrawer'

export default function ProductView() {
  const { id } = useParams()
  const { getProduct } = useProducts()
  const { addToCart, count } = useCart()
  const [open, setOpen] = useState(false)
  const p = getProduct(id)
  if (!p) return null

  const handleAdd = () => {
    addToCart(p)
    setOpen(true)
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', direction: 'rtl' }}>
      <header style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #f5f5f5', zIndex: 100 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#1A1A1A' }}><FiChevronRight size={24} /></Link>
          <div style={{ fontWeight: 800, fontSize: '15px' }}>تفاصيل المنتج</div>
          <button onClick={() => setOpen(true)} style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#1A1A1A', background: 'transparent', border: 'none', padding: '4px' }}>
            <FiShoppingBag size={23} />
            {count > 0 && (
              <span style={{ position: 'absolute', top: '-6px', left: '-8px', background: '#000', color: '#fff', borderRadius: '50%', minWidth: '19px', height: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, padding: '0 4px' }}>
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ width: '100%', aspectRatio: '4/3', background: '#f9f9f9' }}>
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '20px 16px 120px' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 800, lineHeight: '1.9', margin: '0 0 14px 0' }}>{p.name}</h1>
          <div style={{ fontSize: '24px', fontWeight: 900, marginBottom: '20px' }}>{p.price} ر.س</div>
          {p.desc && <div style={{ color: '#555', lineHeight: '2', fontSize: '14px' }}>{p.desc}</div>}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #f2f2f2', padding: '12px 16px', boxShadow: '0 -4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <button
            onClick={handleAdd}
            style={{ width: '100%', padding: '16px', background: '#000', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}
          >
            أضف للسلة
          </button>
        </div>
      </div>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
