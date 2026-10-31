import { createContext, useContext, useState, useEffect } from 'react'

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

const data = [
  { id: 1, name: 'بن تركي غامق ٢٥٠ جرام', price: 95, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800', category: 'حبوب البن', desc: 'بن تركي غامق محمص بعناية ليمنحك نكهة قوية وأصيلة', inStock: true },
  { id: 2, name: 'بن عربي وسط ٥٠٠ جرام', price: 165, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800', category: 'حبوب البن', desc: 'مزيج عربي متوازن بين الحلاوة والمرارة', inStock: true },
  { id: 3, name: 'خلطة الصباح ٢٥٠ جرام', price: 89, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800', category: 'خلطات', desc: 'خلطة مثالية لبدء يومك بنشاط', inStock: true },
  { id: 4, name: 'بن كولومبي ٢٥٠ جرام', price: 110, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', category: 'حبوب البن', desc: 'بن كولومبي ناعم ذو نكهة فاكهية', inStock: true },
]

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('algharbawy-products')
    return saved ? JSON.parse(saved) : data
  })

  useEffect(() => {
    localStorage.setItem('algharbawy-products', JSON.stringify(products))
  }, [products])

  const addProduct = (p) => setProducts(prev => [...prev, { ...p, id: Date.now() }])
  const updateProduct = (id, up) => setProducts(prev => prev.map(x => x.id === id ? { ...x, ...up } : x))
  const removeProduct = (id) => setProducts(prev => prev.filter(x => x.id !== id))
  const getProduct = (id) => products.find(x => x.id == id)

  return <ProductContext.Provider value={{ products, addProduct, updateProduct, removeProduct, getProduct }}>{children}</ProductContext.Provider>
}
