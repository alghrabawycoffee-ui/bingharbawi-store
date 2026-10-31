import { useProducts } from '../../context/ProductContext'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { products } = useProducts()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem('bingharbawi_orders') || '[]')
    setOrders(allOrders)
  }, [])

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = orders.filter(o => o.status === 'جديد').length

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800' }}>لوحة التحكم</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>إجمالي المنتجات</div>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#3b2314' }}>{products.length}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>إجمالي الطلبات</div>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#3b2314' }}>{orders.length}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>طلبات جديدة</div>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#d97706' }}>{pendingOrders}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>إجمالي المبيعات</div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2e7d32' }}>{totalRevenue} ج.م</div>
        </div>
      </div>
    </div>
  )
}
