import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// نفس البيانات الوهمية
const dummyProducts = [
  { id: '1', name: 'بن تركي فاتح', price: 150, desc: 'بن تركي فاتح محمص بعناية، مناسب لقهوة الصباح.', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'بن تركي وسط', price: 150, desc: 'مزيج متوازن من البن التركي، طعم غني.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: 'بن تركي غامق', price: 150, desc: 'بن غامق للعشاق، رائحة قوية وطعم مميز.', image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: 'بن برازيلي', price: 200, desc: 'بن برازيلي فاخر، اختيار مثالي لعشاق القهوة.', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800&auto=format&fit=crop' },
]

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const product = dummyProducts.find(p => p.id === id)

  if (!product) return <div style={{ padding: '60px', textAlign: 'center' }}>المنتج غير موجود</div>

  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '400px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
      
      <div style={{ flex: 1, minWidth: '300px' }}>
        <Link to="/products" style={{ fontSize: '0.9rem', display: 'inline-block', marginBottom: '20px' }}>← رجوع للمنتجات</Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#3b2314' }}>{product.name}</h1>
        <p style={{ fontSize: '1.8rem', color: '#8b5a2b', fontWeight: '800', marginBottom: '20px' }}>{product.price} ج.م</p>
        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>{product.desc}</p>
        
        <button 
          onClick={() => addToCart(product)}
          style={{ padding: '15px 40px', backgroundColor: '#8b5a2b', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '1.2rem', width: '100%' }}
        >
          أضف للسلة 🛒
        </button>
      </div>
    </div>
  )
}
