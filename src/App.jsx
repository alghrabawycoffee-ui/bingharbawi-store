import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>☕ بن الغرباوي</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>المتجر شغال ✅</p>
      <Link to="/products" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#8b5a2b', color: '#fff', borderRadius: '8px' }}>
        تصفح المنتجات
      </Link>
    </div>
  )
}

function Products() {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>المنتجات</h2>
      <p style={{ color: '#666' }}>قريبًا...</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}>
        رجوع للرئيسية
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}
