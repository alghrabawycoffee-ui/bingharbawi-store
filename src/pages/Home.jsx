import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'

const categories = [
  { id: 1, name: 'جميع المنتجات' },
  { id: 2, name: 'حبوب البن' },
  { id: 3, name: 'خلطات' },
  { id: 4, name: 'عروض' }
]

export default function Home() {
  const { products } = useProducts()
  const { addToCart } = useCart()
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <div style={{ backgroundColor: '#FFFFFF', padding: '14px 16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <FiSearch size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8e8e8e' }} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '12px 48px 12px 16px', borderRadius: '12px', border: '1px solid #e8e8e8', backgroundColor: '#FFFFFF', fontSize: '0.94rem' }}
          />
        </div>
      </div>
      <div style={{ padding: '14px 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map((cat) => (
            <button key={cat.id} style={{ padding: '8px 18px', borderRadius: '50px', backgroundColor: cat.id === 1 ? '#1A1A1A' : '#f7f7f7', color: cat.id === 1 ? '#FFFFFF' : '#1A1A1A', whiteSpace: 'nowrap', fontWeight: '700', fontSize: '0.9rem' }}>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '8px 16px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))', gap: '12px' }}>
          {filtered.map((product) => (
            <Link to={/product/} key={product.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f0f0f0', position: 'relative', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}>
              <div style={{ width: '100%', height: '150px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '12px 14px 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '0.89rem', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.7', minHeight: '44px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.name}</h3>
                <span style={{ fontWeight: '800', color: '#1A1A1A', fontSize: '1rem' }}>{product.price} ر.س</span>
              </div>
              <button onClick={(e) => { e.preventDefault(); addToCart(product); }} disabled={!product.inStock} style={{ position: 'absolute', bottom: '12px', left: '12px', width: '32px', height: '32px', borderRadius: '8px', backgroundColor: product.inStock ? '#1A1A1A' : '#d1d5db', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiPlus size={17} />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
