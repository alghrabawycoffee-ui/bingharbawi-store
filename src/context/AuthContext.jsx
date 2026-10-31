import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('bingharbawi_user')
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser)
      setUser(parsedUser)
      setIsAdmin(parsedUser.role === 'admin')
    }
  }, [])

  const login = (email, password) => {
    // Admin بسيط للتجربة
    if (email === 'admin@alghrabawy.com' && password === 'admin123') {
      const adminUser = { id: 'admin', name: 'المدير', email, role: 'admin' }
      setUser(adminUser)
      setIsAdmin(true)
      localStorage.setItem('bingharbawi_user', JSON.stringify(adminUser))
      return { success: true, user: adminUser }
    }
    // مستخدم عادي للتجربة
    if (email && password) {
      const normalUser = { id: Date.now().toString(), name: email.split('@')[0], email, role: 'user' }
      setUser(normalUser)
      setIsAdmin(false)
      localStorage.setItem('bingharbawi_user', JSON.stringify(normalUser))
      return { success: true, user: normalUser }
    }
    return { success: false, message: 'بيانات الدخول غير صحيحة' }
  }

  const register = (name, email, password) => {
    const newUser = { id: Date.now().toString(), name, email, role: 'user' }
    setUser(newUser)
    setIsAdmin(false)
    localStorage.setItem('bingharbawi_user', JSON.stringify(newUser))
    return { success: true, user: newUser }
  }

  const logout = () => {
    setUser(null)
    setIsAdmin(false)
    localStorage.removeItem('bingharbawi_user')
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
