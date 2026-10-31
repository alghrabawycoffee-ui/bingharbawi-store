import { useCart } from '../../context/CartContext'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()
  const total = getCartTotal()
  const freeShipping = 199
  const progress = Math.min((total / freeShipping) * 100, 100)

  if (!isOpen) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100%', maxWidth: '420px', backgroundColor: '#FFFFFF', zIndex: 1001, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2E2E2E' }}>محتويات السلة</h2>
          <button onClick={onClose} style={{ color: '#2E2E2E' }}>
            <FiX size={24} />
          </button>
        </div>

        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>
              {total >= freeShipping ? 'أحصل على شحن مجاني الآن' : أضف  ج.م للحصول على شحن مجاني}
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f1f1', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{ width: progress + '%', height: '100%', backgroundColor: '#22c55e', transition: 'width 0.3s' }}></div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b6b6b' }}>
              <p>السلة فارغة</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid #f1f1f1' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4 style={{ fontWeight: '700', fontSize: '0.92rem', flex: 1 }}>{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: '#D9534F' }}>
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '800', color: '#F5B000' }}>{item.price} ج.م</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #f1f1f1', borderRadius: '8px', padding: '6px 12px' }}>
                        <button onClick={() => decreaseQuantity(item.id)} style={{ color: '#2E2E2E' }}>
                          <FiMinus size={16} />
                        </button>
                        <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} style={{ color: '#2E2E2E' }}>
                          <FiPlus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '16px', borderTop: '1px solid #f1f1f1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>المجموع الفرعي</span>
                <span style={{ fontWeight: '700' }}>{total} ج.م</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>الخصم</span>
                <span style={{ color: '#D9534F', fontWeight: '700' }}>0 ج.م</span>
              </div>
              <div style={{ height: '1px', backgroundColor: '#f1f1f1' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '800' }}>الإجمالي</span>
                <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#F5B000' }}>{total} ج.م</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <input
                type="text"
                placeholder="كود الخصم"
                style={{ flex: 1, padding: '12px', border: '1px solid #f1f1f1', borderRadius: '8px' }}
              />
              <button style={{ padding: '12px 24px', backgroundColor: '#FFC107', borderRadius: '8px', fontWeight: '700' }}>
                تطبيق
              </button>
            </div>
            <button onClick={onClose} style={{ width: '100%', padding: '14px', backgroundColor: '#FFC107', borderRadius: '12px', fontWeight: '800', fontSize: '1rem' }}>
              متابعة الطلب
            </button>
          </div>
        )}
      </div>
    </>
  )
}
