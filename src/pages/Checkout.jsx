import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import Header from '../components/layout/Header'

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const total = getCartTotal()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [method, setMethod] = useState('cod')

  const handleSubmit = (e) => {
    e.preventDefault()
    let message = 'طلب جديد من بن الغرباوي%0A%0A'
    message += 'الاسم: ' + form.name + '%0A'
    message += 'الجوال: ' + form.phone + '%0A'
    message += 'العنوان: ' + form.address + '%0A%0A'
    message += 'المنتجات:%0A'
    cart.forEach(item => {
      message += '- ' + item.name + ' x' + item.quantity + ' = ' + (item.price * item.quantity) + ' ر.س%0A'
    })
    message += '%0Aالمجموع: ' + total + ' ر.س'
    window.open('https://wa.me/?text=' + message, '_blank')
    clearCart()
  }

  if (cart.length === 0) return <div style={{ padding: '40px', textAlign: 'center' }}>السلة فارغة</div>

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 14px', gap: '10px', maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#1A1A1A' }}><FiChevronRight size={22} /></Link>
        <span style={{ fontWeight: '700' }}>إتمام الطلب</span>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '800' }}>بيانات العميل</h2>
          <input required placeholder="الاسم الكامل" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} style={{ padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
          <input required placeholder="رقم الجوال" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} style={{ padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
          <textarea required placeholder="العنوان بالتفصيل" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} style={{ padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px', minHeight: '80px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '800' }}>طريقة الدفع</h2>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
            <input type="radio" checked={method === 'cod'} onChange={() => setMethod('cod')} />
            <span>الدفع عند الاستلام</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
            <input type="radio" checked={method === 'online'} onChange={() => setMethod('online')} />
            <span>دفع أونلاين</span>
          </label>
        </div>
        <div style={{ padding: '16px', border: '1px solid #f5f5f5', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>المجموع</span>
            <span style={{ fontWeight: '800' }}>{total} ر.س</span>
          </div>
        </div>
        <button type="submit" style={{ padding: '14px', backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '8px', fontWeight: '800' }}>
          تأكيد الطلب
        </button>
      </form>
    </div>
  )
}
