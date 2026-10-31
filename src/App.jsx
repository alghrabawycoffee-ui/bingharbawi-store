import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/Footer'
import BottomNav from './components/layout/BottomNav'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import MyOrders from './pages/MyOrders'
import OrderSuccess from './pages/OrderSuccess'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductsManage from './pages/admin/ProductsManage'
import Orders from './pages/admin/Orders'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, paddingBottom: '70px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="products" element={<ProductsManage />} />
                  <Route path="orders" element={<Orders />} />
                </Route>
              </Routes>
            </main>
            <Footer />
            <BottomNav />
          </div>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
