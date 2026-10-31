import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(email, password)
    if (result.success) {
      if (result.user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } else {
      setError(result.message)
    }
  }

  return (
    <div style={{ padding: '80px 20px', maxWidth: '450px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#3b2314', fontWeight: '800', textAlign: 'center' }}>تسجيل الدخول</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '35px' }}>مرحباً بك مرة أخرى</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
          {error && <div style={{ color: '#dc2626', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
          <button type="submit" style={{ padding: '14px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer' }}>
            دخول
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '25px', color: '#666' }}>
          ليس لديك حساب؟{' '}
          <Link to="/register" style={{ color: '#d97706', fontWeight: '700' }}>إنشاء حساب</Link>
        </div>
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '8px', fontSize: '0.85rem', color: '#666' }}>
          <div style={{ fontWeight: '700', marginBottom: '5px' }}>للتجربة:</div>
          <div>أدمن: admin@alghrabawy.com / admin123</div>
        </div>
      </div>
    </div>
  )
}
