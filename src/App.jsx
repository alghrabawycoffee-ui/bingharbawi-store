import { Routes, Route } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Login from './pages/Login'
import Register from './pages/Register'
import MyOrders from './pages/MyOrders'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductsManage from './pages/admin/ProductsManage'
import Orders from './pages/admin/Orders'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsManage />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
