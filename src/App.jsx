import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import Index from './pages/Index'
import ProductView from './pages/ProductView'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import Admin from './pages/admin/Index'
import AdminProducts from './pages/admin/Products'
import AdminOrders from './pages/admin/Orders'

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminProducts />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
          </Route>
        </Routes>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
