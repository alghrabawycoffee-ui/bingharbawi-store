import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()
  const shipping = 0
  const total = getCartTotal() + shipping

  if (cart.length === 0) {
    return (
      <div style={{ padding: '160px 20px 100px', textAlign: 'center', backgroundColor: '#1a100a', minHeight: '100vh' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '16px', color: '#d4af37', fontWeight: '800', fontFamily: 'Cairo, Tajawal, sans-serif' }}>سلة المشتريات</h2>
        <p style={{ color: '#cccccc', marginBottom: '40px' }}>سلتك فارغة حالياً</p>
        <Link to="/products" style={{ padding: '12px 40px', border: '2px solid #d4af37', color: '#d4af37', fontWeight: '700', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
          تصفح المنتجات
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#1a100a', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '160px 20px 200px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '50px', color: '#d4af37', fontWeight: '800', fontFamily: 'Cairo, Tajawal, sans-serif' }}>سلة المشتريات</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', backgroundColor: '#2a1a12', borderRadius: '12px', padding: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flex: '1', minWidth: '250px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div>
                    <h4 style={{ fontWeight: '700', color: '#ffffff', marginBottom: '8px', fontFamily: 'Cairo, Tajawal, sans-serif' }}>{item.name}</h4>
                    <span style={{ color: '#d4af37', fontWeight: '800' }}>{item.price} ج.م</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: '4px', padding: '8px 16px' }}>
                    <button onClick={() => decreaseQuantity(item.id)} style={{ fontSize: '1.2rem', color: '#ffffff' }}>-</button>
                    <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center', color: '#ffffff' }}>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} style={{ fontSize: '1.2rem', color: '#ffffff' }}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: '#cccccc', fontWeight: '600' }}>إزالة</button>
                </div>
              </div>
            ))}
          </div>

          <aside>
            <div style={{ backgroundColor: '#2a1a12', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>ملخص الطلب</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cccccc' }}>
                  <span>المجموع الفرعي</span>
                  <span>{getCartTotal()} ج.م</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cccccc' }}>
                  <span>الشحن</span>
                  <span>{shipping === 0 ? 'مجاني' : shipping + ' ج.م'}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#ffffff' }}>الإجمالي</span>
                  <span style={{ fontWeight: '800', fontSize: '1.6rem', color: '#d4af37' }}>{total} ج.م</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26, 16, 10, 0.98)', borderTop: '1px solid rgba(212, 175, 55, 0.3)', zIndex: 90 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingBlock: '16px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: '#cccccc', display: 'block' }}>الإجمالي</span>
            <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#d4af37' }}>{total} ج.م</span>
          </div>
          <Link to="/checkout" style={{ padding: '14px 48px', border: '2px solid #d4af37', color: '#d4af37', fontWeight: '700', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            إتمام الطلب
          </Link>
        </div>
      </div>
    </div>
  )
}
