import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const dummyProducts = [
  { id: '1', name: 'بن تركي فاتح', price: 150, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=500&auto=format&fit=crop' },
  { id: '2', name: 'بن تركي وسط', price: 150, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop' },
  { id: '3', name: 'بن تركي غامق', price: 150, image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=500&auto=format&fit=crop' },
  { id: '4', name: 'بن برازيلي', price: 200, image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=500&auto=format&fit=crop' },
]

export default function Products() {
  const { addToCart } = useCart()

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#3b2314', fontWeight: '800' }}>كل المنتجات</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
        {dummyProducts.map((item) => (
          <div key={item.id} className="product-card" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'center', transition: 'transform 0.2s' }}>
            
            {/* رابط لصفحة التفاصيل */}
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />
            </Link>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>{item.name}</h3>
            <p style={{ color: '#8b5a2b', fontWeight: '800', fontSize: '1.2rem', marginBottom: '20px' }}>{item.price} ج.م</p>
            
            <button 
              onClick={() => addToCart(item)}
              style={{ width: '100%', padding: '12px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', transition: 'background 0.2s' }}
            >
              أضف للسلة 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
