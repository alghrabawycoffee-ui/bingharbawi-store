import { Link, Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function AdminLayout() {
  const { isAdmin, user } = useAuth()

  if (!isAdmin) {
    return <Navigate to="/login" replace />
  }

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 140px)' }}>
      <aside style={{ width: '280px', backgroundColor: '#3b2314', color: '#fff', padding: '30px 20px' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '40px', fontWeight: '800' }}>لوحة الإدارة</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/admin" style={{ padding: '12px 16px', color: '#fff', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>📊 الرئيسية</Link>
          <Link to="/admin/products" style={{ padding: '12px 16px', color: '#fff', borderRadius: '8px' }}>🛍️ إدارة المنتجات</Link>
          <Link to="/admin/orders" style={{ padding: '12px 16px', color: '#fff', borderRadius: '8px' }}>📦 إدارة الطلبات</Link>
          <Link to="/" style={{ padding: '12px 16px', color: '#fff', borderRadius: '8px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>← العودة للموقع</Link>
        </nav>
        <div style={{ marginTop: '40px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem' }}>
          <div style={{ fontWeight: '700' }}>{user?.name}</div>
          <div style={{ opacity: '0.8', marginTop: '4px' }}>مدير الموقع</div>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
        <Outlet />
      </main>
    </div>
  )
}
