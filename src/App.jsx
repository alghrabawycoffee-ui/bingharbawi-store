import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h1>☕ بن الغرباوي</h1>
      <Link to="/products">المنتجات</Link>
    </div>
  )
}

function Products() {
  return (
    <div style={{ padding: 24 }}>
      <h2>المنتجات</h2>
      <p>قريبًا...</p>
      <Link to="/">رجوع</Link>
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
