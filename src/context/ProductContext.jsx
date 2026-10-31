import { createContext, useContext, useState, useEffect } from 'react'

const ProductContext = createContext()

export function useProducts() {
  return useContext(ProductContext)
}

const initialProducts = [
  { id: 1, name: 'بن تركي غامق 250 جرام', price: 95, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop', category: 'حبوب البن', desc: 'بن تركي غامق محمص بحب عالي الجودة', inStock: true },
  { id: 2, name: 'بن عربي وسط 500 جرام', price: 165, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=800&auto=format&fit=crop', category: 'حبوب البن', desc: 'بن عربي وسط مزيج متوازن', inStock: true },
  { id: 3, name: 'خلطة الصباح 250 جرام', price: 89, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop', category: 'خلطات', desc: 'خلطة مميزة لبدء يوم رائع', inStock: true },
  { id: 4, name: 'بن بريميوم 1 كيلو', price: 299, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop', category: 'حبوب البن', desc: 'بن بريميوم فاخر للذواقين', inStock: true },
]

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('bingharbawi_products')
    return saved ? JSON.parse(saved) : initialProducts
  })

  useEffect(() => {
    localStorage.setItem('bingharbawi_products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }])
  }

  const updateProduct = (id, updates) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p))
  }

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const getProductById = (id) => {
    return products.find(p => p.id == id)
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProductById }}>
      {children}
    </ProductContext.Provider>
  )
}
