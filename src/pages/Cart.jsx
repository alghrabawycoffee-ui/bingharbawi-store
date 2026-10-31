import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart()
  const total = getCartTotal()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontWeight: '800', marginBottom: '12px' }}>السلة فارغة</h2>
        <Link to="/" style={{ color: '#D97706', fontWeight: '700' }}>تسوق الآن</Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '110px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
        <Link to="/" style={{ color: '#1A1A1A' }}>
          <FiChevronRight size={24} />
        </Link>
        <span style={{ fontWeight: '700' }}>سلة التسوق</span>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', border: '1px solid #f1f1f1', borderRadius: '12px' }}>
            <img src={item.image} alt={item.name} style={{ width: '72px', height: '72px', borderRadius: '10px', objectFit: 'cover' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ fontWeight: '700', fontSize: '0.92rem' }}>{item.name}</h4>
                <span style={{ fontWeight: '800', color: '#D97706' }}>{item.price} ج.م</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => decreaseQuantity(item.id)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiMinus size={16} />
                </button>
                <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', borderTop: '1px solid #f1f1f1', padding: '12px 16px', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontWeight: '700' }}>الإجمالي</span>
          <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#D97706' }}>{total} ج.م</span>
        </div>
        <Link to="/checkout" style={{ display: 'block', width: '100%', padding: '14px', backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '12px', textAlign: 'center', fontWeight: '700' }}>
          إتمام الطلب
        </Link>
      </div>
    </div>
  )
}
