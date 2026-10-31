import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiSearch, FiShoppingCart, FiPlus } from 'react-icons/fi'
import CartDrawer from '../components/cart/CartDrawer'

export default function Index() {
  const { products } = useProducts()
  const { addToCart, count } = useCart()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const list = products.filter(p => p.name.includes(search))

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #f2f2f2', zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>☕</span>
            <span style={{ fontWeight: 900, fontSize: '1.25rem' }}>بن الغرباوي</span>
          </div>
          <button onClick={() => setOpen(true)} style={{ position: 'relative' }}>
            <FiShoppingCart size={24} />
            {count > 0 && <span style={{ position: 'absolute', top: -6, right: -8, background: '#000', color: '#fff', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{count}</span>}
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px' }}>
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <FiSearch size={18} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث عن منتج" style={{ width: '100%', padding: '11px 42px 11px 14px', border: '1px solid #eee', borderRadius: 10, background: '#fafafa' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {list.map(p => (
            <div key={p.id} style={{ border: '1px solid #f3f3f3', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <Link to={/product/}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </Link>
              <div style={{ padding: '10px 12px 16px' }}>
                <Link to={/product/}><div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.7, height: 48, overflow: 'hidden' }}>{p.name}</div></Link>
                <div style={{ fontWeight: 900, marginTop: 6 }}>{p.price} ر.س</div>
              </div>
              <button onClick={() => addToCart(p)} style={{ position: 'absolute', bottom: 10, left: 10, width: 32, height: 32, borderRadius: 8, background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiPlus size={16} /></button>
            </div>
          ))}
        </div>
      </div>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
