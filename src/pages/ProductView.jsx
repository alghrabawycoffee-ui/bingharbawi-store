import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiChevronRight, FiShoppingCart } from 'react-icons/fi'
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
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#1A1A1A', textDecoration: 'none' }}>
            <FiChevronRight size={24} />
          </Link>
          <div style={{ fontWeight: 800, fontSize: '15px' }}>تفاصيل المنتج</div>
          <button onClick={() => setOpen(true)} style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#1A1A1A', background: 'transparent', border: 'none', padding: '4px' }}>
            <FiShoppingCart size={23} />
            {count > 0 && (
              <span style={{ position: 'absolute', top: '-6px', left: '-8px', background: '#000', color: '#fff', borderRadius: '50%', minWidth: '19px', height: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, padding: '0 4px' }}>
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ width: '100%', height: '320px', background: '#f9f9f9' }}>
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '18px 16px 100px' }}>
          <h1 style={{ fontSize: '17px', fontWeight: 800, lineHeight: '1.9', margin: '0 0 12px 0' }}>{p.name}</h1>
          <div style={{ fontSize: '22px', fontWeight: 900, marginBottom: '16px' }}>{p.price} ر.س</div>
          {p.desc && <p style={{ color: '#555', lineHeight: '2', fontSize: '14px', margin: '0' }}>{p.desc}</p>}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #f2f2f2', padding: '12px 16px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button
            onClick={handleAdd}
            style={{ width: '100%', padding: '15px', background: '#000', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}
          >
            أضف للسلة
          </button>
        </div>
      </div>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
