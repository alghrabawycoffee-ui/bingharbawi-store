import { Routes, Route, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import AdminLayout from './pages/admin/AdminLayout'
import ProductsManage from './pages/admin/ProductsManage'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<ProductsManage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
