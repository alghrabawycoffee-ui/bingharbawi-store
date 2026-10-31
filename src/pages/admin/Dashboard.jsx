import { useProducts } from '../../context/ProductContext'

export default function AdminDashboard() {
  const { products } = useProducts()

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px' }}>لوحة التحكم</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ color: '#6b6b6b', marginBottom: '8px' }}>إجمالي المنتجات</p>
          <p style={{ fontSize: '2rem', fontWeight: '800' }}>{products.length}</p>
        </div>
      </div>
    </div>
  )
}
