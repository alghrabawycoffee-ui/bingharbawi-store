import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function CheckoutPage() {
  const { items, getCartTotal, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [pay, setPay] = useState('cod')

  const send = (e) => {
    e.preventDefault()
    let msg = 'طلب جديد - بن الغرباوي%0A%0A'
    msg += 'الاسم: ' + form.name + '%0A'
    msg += 'الجوال: ' + form.phone + '%0A'
    msg += 'العنوان: ' + form.address + '%0A%0A'
    items.forEach(i => msg += i.name + ' × ' + i.quantity + ' - ' + (i.price * i.quantity) + ' ر.س%0A')
    msg += '%0Aالمجموع: ' + getCartTotal() + ' ر.س%0A'
    msg += 'طريقة الدفع: ' + (pay === 'cod' ? 'الدفع عند الاستلام' : 'دفع أونلاين')
    window.open('https://wa.me/?text=' + msg, '_blank')
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', direction: 'rtl' }}>
        <div style={{ fontSize: '17px', fontWeight: 700 }}>السلة فارغة</div>
        <Link to="/" style={{ padding: '12px 24px', background: '#000', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 700 }}>العودة للمتجر</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', direction: 'rtl' }}>
      <header style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #f5f5f5', zIndex: 100 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px' }}>
          <Link to="/cart" style={{ display: 'flex', alignItems: 'center', color: '#1A1A1A' }}><FiChevronRight size={24} /></Link>
          <div style={{ fontWeight: 900, fontSize: '17px' }}>إتمام الطلب</div>
        </div>
      </header>

      <form onSubmit={send} style={{ maxWidth: '700px', margin: '0 auto', padding: '20px 16px 40px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <div style={{ fontWeight: 800, marginBottom: '12px', fontSize: '15px' }}>معلومات التوصيل</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input required placeholder="الاسم الكامل" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ padding: '14px 16px', border: '1px solid #e8e8e8', borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
            <input required placeholder="رقم الجوال" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ padding: '14px 16px', border: '1px solid #e8e8e8', borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
            <textarea required placeholder="العنوان الكامل" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} style={{ padding: '14px 16px', border: '1px solid #e8e8e8', borderRadius: '12px', fontSize: '14px', outline: 'none', minHeight: '90px', resize: 'vertical' }} />
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 800, marginBottom: '12px', fontSize: '15px' }}>طريقة الدفع</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1px solid #e8e8e8', borderRadius: '12px', cursor: 'pointer' }}>
              <input type="radio" checked={pay === 'cod'} onChange={() => setPay('cod')} style={{ width: '18px', height: '18px' }} />
              <span style={{ fontWeight: 600 }}>الدفع عند الاستلام</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1px solid #e8e8e8', borderRadius: '12px', cursor: 'pointer' }}>
              <input type="radio" checked={pay === 'online'} onChange={() => setPay('online')} style={{ width: '18px', height: '18px' }} />
              <span style={{ fontWeight: 600 }}>دفع أونلاين</span>
            </label>
          </div>
        </div>

        <div style={{ background: '#fafafa', padding: '16px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>عدد المنتجات</span>
            <span style={{ fontWeight: 700 }}>{items.reduce((s, i) => s + i.quantity, 0)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #eee' }}>
            <span style={{ fontWeight: 800 }}>المجموع الكلي</span>
            <span style={{ fontWeight: 900, fontSize: '18px' }}>{getCartTotal()} ر.س</span>
          </div>
        </div>

        <button type="submit" style={{ width: '100%', padding: '16px', background: '#000', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>تأكيد الطلب عبر واتساب</button>
      </form>
    </div>
  )
}
