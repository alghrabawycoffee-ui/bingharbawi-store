import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Products() {
  const { products } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = ['all', ...new Set(products.map((p) => p.category).filter(Boolean))]

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || product.category === category
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  if (sortBy === 'low-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'high-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name))
  }

  const maxPrice = Math.max(...products.map(p => p.price), 1000)

  return (
    <div style={{ padding: '50px 0', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '12px', color: 'var(--primary)', fontWeight: '800' }}>جميع المنتجات</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>اكتشف مجموعتنا من أجود أنواع البن</p>
        </div>

        <div className="products-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px', alignItems: 'start' }}>
          <aside className="filters-sidebar" style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px', color: 'var(--primary)' }}>الفلاتر</h3>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: '700', marginBottom: '10px' }}>بحث</label>
              <input
                type="text"
                placeholder="ابحث..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: '700', marginBottom: '10px' }}>التصنيف</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{ textAlign: 'right', padding: '10px 14px', backgroundColor: category === cat ? 'var(--primary)' : 'transparent', color: category === cat ? 'var(--white)' : 'var(--text-primary)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: category === cat ? '700' : '400', cursor: 'pointer' }}
                  >
                    {cat === 'all' ? 'الكل' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: '700', marginBottom: '10px' }}>السعر الأقصى: {priceRange[1]} ج.م</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                style={{ width: '100%' }}
              />
            </div>
          </aside>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
              <p style={{ color: 'var(--text-secondary)' }}>عرض {filteredProducts.length} منتج</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontWeight: '600' }}
              >
                <option value="default">ترتيب افتراضي</option>
                <option value="low-high">السعر: من الأقل للأعلى</option>
                <option value="high-low">السعر: من الأعلى للأقل</option>
                <option value="name">أبجدي</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>لا يوجد منتجات مطابقة</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '26px' }}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
