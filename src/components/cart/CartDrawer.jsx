import { useCart } from '../../context/CartContext'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart()
  const total = getCartTotal()

  if (!isOpen) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100%', maxWidth: '400px', backgroundColor: '#FFFFFF', zIndex: 1001, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '800', color: '#1A1A1A' }}>سلة المشتريات</h2>
          <button onClick={onClose} style={{ color: '#1A1A1A' }}>
            <FiX size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b6b6b' }}>
              <p>سلة المشتريات فارغة</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '12px', paddingBottom: '14px', borderBottom: '1px solid #f5f5f5' }}>
                  <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4 style={{ fontWeight: '700', fontSize: '0.9rem', flex: 1 }}>{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: '#999' }}>
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '800', color: '#1A1A1A' }}>{item.price} ر.س</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '4px 10px' }}>
                        <button onClick={() => decreaseQuantity(item.id)} style={{ color: '#1A1A1A' }}>
                          <FiMinus size={14} />
                        </button>
                        <span style={{ fontWeight: '700', minWidth: '16px', textAlign: 'center', fontSize: '0.9rem' }}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} style={{ color: '#1A1A1A' }}>
                          <FiPlus size={14} />
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
          <div style={{ padding: '16px', borderTop: '1px solid #f5f5f5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontWeight: '700' }}>المجموع</span>
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>{total} ر.س</span>
            </div>
            <button onClick={onClose} style={{ width: '100%', padding: '13px', backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '8px', fontWeight: '800' }}>
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </>
  )
}
