import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '260px', backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '30px' }}>لوحة التحكم</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to="/admin" style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>الرئيسية</Link>
          <Link to="/admin/products" style={{ padding: '10px 14px', borderRadius: '8px' }}>المنتجات</Link>
          <Link to="/admin/orders" style={{ padding: '10px 14px', borderRadius: '8px' }}>الطلبات</Link>
          <Link to="/" style={{ padding: '10px 14px', borderRadius: '8px', marginTop: '20px' }}>العودة للمتجر</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '30px' }}>
        <Outlet />
      </main>
    </div>
  )
}
