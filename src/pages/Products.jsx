import { useCart } from '../context/CartContext'

const dummyProducts = [
  { id: '1', name: 'بن تركي فاتح', price: 150 },
  { id: '2', name: 'بن تركي وسط', price: 150 },
  { id: '3', name: 'بن تركي غامق', price: 150 },
  { id: '4', name: 'بن برازيلي', price: 200 },
]

export default function Products() {
  const { addToCart } = useCart()

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b2314' }}>كل المنتجات</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {dummyProducts.map((item) => (
          <div key={item.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ height: '150px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px' }}></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.name}</h3>
            <p style={{ color: '#8b5a2b', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>{item.price} ج.م</p>
            <button 
              onClick={() => addToCart(item)}
              style={{ width: '100%', padding: '10px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              أضف للسلة +
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
