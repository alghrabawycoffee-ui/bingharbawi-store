import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('bingharbawi-cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('bingharbawi-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, type) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        if (type === 'inc') return { ...item, qty: item.qty + 1 }
        if (type === 'dec') return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}
