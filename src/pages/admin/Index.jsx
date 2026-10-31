import { Link, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, background: '#111', color: '#fff', padding: 20 }}>
        <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 30 }}>بن الغرباوي</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link to="/admin/products">المنتجات</Link>
          <Link to="/admin/orders">الطلبات</Link>
          <Link to="/">العودة للمتجر</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, background: '#f9f9f9', padding: 30 }}>
        <Outlet />
      </main>
    </div>
  )
}
