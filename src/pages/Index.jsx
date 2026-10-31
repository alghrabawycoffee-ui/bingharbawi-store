import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import Header from '../components/layout/Header'
import ProductCard from '../components/product/ProductCard'
import CartDrawer from '../components/cart/CartDrawer'
import { FiSearch } from 'react-icons/fi'

export default function Index() {
  const { products } = useProducts()
  const { count } = useCart()
  const [search, setSearch] = useState('')
  const [openCart, setOpenCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const list = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ background: '#fff', minHeight: '100vh', direction: 'rtl' }}>
      <Header onMenu={() => {}} onSearch={() => setShowSearch(!showSearch)} onCart={() => setOpenCart(true)} />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        {showSearch && (
          <div style={{ position: 'relative', marginBottom: '20px', animation: 'fadeIn 0.2s ease-in' }}>
            <FiSearch size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9b9b9b' }} />
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن منتج..."
              style={{ width: '100%', padding: '13px 48px 13px 16px', border: '1px solid #e8e8e8', borderRadius: '14px', background: '#fff', fontSize: '0.95rem', fontFamily: 'Cairo, sans-serif', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        )}
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {list.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </div>
  )
}
