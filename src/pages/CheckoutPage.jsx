import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [pay, setPay] = useState('cod')

  const send = (e) => {
    e.preventDefault()
    let msg = 'طلب بن الغرباوي%0A%0A'
    msg += 'الاسم: ' + form.name + '%0A'
    msg += 'الجوال: ' + form.phone + '%0A'
    msg += 'العنوان: ' + form.address + '%0A%0A'
    cart.forEach(i => msg += i.name + ' x' + i.qty + ' - ' + (i.price*i.qty) + ' ر.س%0A')
    msg += '%0Aالإجمالي: ' + total + ' ر.س%0Aطريقة الدفع: ' + (pay === 'cod' ? 'عند الاستلام' : 'أونلاين')
    window.open('https://wa.me/?text=' + msg, '_blank')
    clearCart()
  }

  if (cart.length === 0) return <div style={{ padding: 40, textAlign: 'center' }}>السلة فارغة</div>

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderBottom: '1px solid #f2f2f2' }}>
        <Link to="/cart" style={{ display: 'flex' }}><FiChevronRight size={22} /></Link>
        <div style={{ fontWeight: 800 }}>إتمام الطلب</div>
      </header>
      <form onSubmit={send} style={{ maxWidth: 700, margin: '0 auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input required placeholder="الاسم الكامل" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }} />
        <input required placeholder="رقم الجوال" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }} />
        <textarea required placeholder="العنوان" value={form.address} onChange={e => setForm({...form, address: e.target.value})} style={{ padding: 12, border: '1px solid #eee', borderRadius: 8, minHeight: 70 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}><input type="radio" checked={pay === 'cod'} onChange={() => setPay('cod')} /> الدفع عند الاستلام</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}><input type="radio" checked={pay === 'online'} onChange={() => setPay('online')} /> دفع أونلاين</label>
        </div>
        <button type="submit" style={{ padding: 14, background: '#000', color: '#fff', borderRadius: 10, fontWeight: 800 }}>تأكيد الطلب عبر واتساب - {total} ر.س</button>
      </form>
    </div>
  )
}
