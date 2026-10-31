import { useMemo, useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/product/ProductCard'

export default function Products() {
  const { products } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const categories = useMemo(() => ['all', ...new Set(products.map((p) => p.category).filter(Boolean))], [products])

  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'all' || product.category === category
      return matchesSearch && matchesCategory
    })

    if (sortBy === 'low-high') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'high-low') list = [...list].sort((a, b) => b.price - a.price)
    if (sortBy === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [products, search, category, sortBy])

  return (
    <div>
      <section style={{ borderBottom: '1px solid var(--border-light)', paddingBlock: 'clamp(var(--space-9), 10vw, var(--space-11))' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="section-header__eyebrow">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
            المتجر
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.1' }}>جميع المنتجات</h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.12rem)', color: 'var(--text-secondary)', maxWidth: '640px' }}>اختر من مجموعتنا المنتقاة من أجود خلطات البن المحمصة بعناية.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(var(--space-8), 8vw, var(--space-10))' }}>
        <div className="products-grid" style={{ width: 'min(1240px, 100% - 48px)', margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(var(--space-7), 6vw, var(--space-9))', alignItems: 'start' }}>
          <aside className="products-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', position: 'sticky', top: '96px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontWeight: '800' }}>البحث</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن منتج..."
                style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontWeight: '800' }}>التصنيف</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{ textAlign: 'right', padding: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: category === cat ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: category === cat ? '700' : '600' }}
                  >
                    <span>{cat === 'all' ? 'كل المنتجات' : cat}</span>
                    {category === cat && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontWeight: '800' }}>ترتيب حسب</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
              >
                <option value="default">الأحدث</option>
                <option value="low-high">السعر: الأقل إلى الأعلى</option>
                <option value="high-low">السعر: الأعلى إلى الأقل</option>
                <option value="name">الاسم أبجديًا</option>
              </select>
            </div>
          </aside>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>عرض {filteredProducts.length} منتج</span>
            </div>
            {filteredProducts.length === 0 ? (
              <div style={{ padding: 'var(--space-11)', textAlign: 'center', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--surface)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>لا توجد منتجات مطابقة للبحث</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-6)' }}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="products-item" style={{ gridColumn: 'span 4' }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
