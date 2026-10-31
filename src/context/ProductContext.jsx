import { createContext, useContext, useState, useEffect } from 'react'
import { initialProducts } from '../data/products'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('bingharbawi_products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      setProducts(initialProducts)
      localStorage.setItem('bingharbawi_products', JSON.stringify(initialProducts))
    }
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('bingharbawi_products', JSON.stringify(products))
    }
  }, [products])

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: product.id || Date.now().toString(),
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product))
    )
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const getProductById = (id) => {
    return products.find((product) => product.id === id)
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProductById }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
