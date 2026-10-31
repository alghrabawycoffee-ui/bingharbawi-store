import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()
  const shipping = 0
  const total = getCartTotal() + shipping

  if (cart.length === 0) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#F4F0EF', minHeight: 'calc(100vh - 200px)' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '16px', color: '#251A16', fontWeight: '700' }}>سلة المشتريات</h2>
        <p style={{ color: '#654D3C', marginBottom: '32px' }}>سلتك فارغة حالياً</p>
        <Link to="/products" style={{ padding: '12px 32px', borderRadius: '8px', background: 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)', color: '#fff', fontWeight: '600', border: '1px solid #EFC7A2' }}>
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F4F0EF', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container" style={{ paddingBlock: '60px', paddingBottom: '180px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '40px', color: '#251A16', fontWeight: '700' }}>سلة المشتريات</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', backgroundColor: '#fff', borderRadius: '11px', padding: '20px', border: '1px solid rgba(239, 199, 162, 0.4)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '250px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#251A16', borderRadius: '8px', padding: '8px' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#251A16', marginBottom: '6px' }}>{item.name}</h4>
                    <span style={{ color: '#4D311A', fontWeight: '600' }}>{item.price} ج.م</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #EFC7A2', borderRadius: '8px', padding: '6px 14px' }}>
                    <button onClick={() => decreaseQuantity(item.id)} style={{ fontSize: '1.2rem', color: '#251A16' }}>-</button>
                    <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} style={{ fontSize: '1.2rem', color: '#251A16' }}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: '#654D3C', fontWeight: '500' }}>إزالة</button>
                </div>
              </div>
            ))}
          </div>

          <aside>
            <div style={{ backgroundColor: '#fff', borderRadius: '11px', border: '1px solid rgba(239, 199, 162, 0.4)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#251A16' }}>ملخص الطلب</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#654D3C' }}>
                  <span>المجموع الفرعي</span>
                  <span>{getCartTotal()} ج.م</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#654D3C' }}>
                  <span>الشحن</span>
                  <span>{shipping === 0 ? 'مجاني' : shipping + ' ج.م'}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#EFC7A2' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>الإجمالي</span>
                  <span style={{ fontWeight: '700', fontSize: '1.4rem', color: '#251A16' }}>{total} ج.م</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(244, 240, 239, 0.98)', backdropFilter: 'blur(10px)', borderTop: '1px solid #EFC7A2', zIndex: 90 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingBlock: '14px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: '#654D3C', display: 'block' }}>الإجمالي</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#251A16' }}>{total} ج.م</span>
          </div>
          <Link to="/checkout" style={{ padding: '14px 40px', borderRadius: '8px', background: 'linear-gradient(91deg, #232629 0.92%, #4D311A 53.14%, #232629 93.96%)', color: '#fff', fontWeight: '600', border: '1px solid #EFC7A2' }}>
            إتمام الطلب
          </Link>
        </div>
      </div>
    </div>
  )
}
