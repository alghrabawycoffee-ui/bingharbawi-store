import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#3b2314', color: '#fff', marginTop: 'auto' }}>
        جميع الحقوق محفوظة © بن الغرباوي 2027
      </footer>
    </div>
  )
}
