import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    register(name, email, password)
    navigate('/')
  }

  return (
    <div style={{ padding: '80px 20px', maxWidth: '450px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#3b2314', fontWeight: '800', textAlign: 'center' }}>إنشاء حساب جديد</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '35px' }}>انضم إلينا وابدأ التسوق</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '1rem', fontFamily: 'Cairo' }}
          />
          <button type="submit" style={{ padding: '14px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer' }}>
            إنشاء حساب
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '25px', color: '#666' }}>
          لديك حساب بالفعل؟{' '}
          <Link to="/login" style={{ color: '#d97706', fontWeight: '700' }}>تسجيل الدخول</Link>
        </div>
      </div>
    </div>
  )
}
