import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const dummyProducts = [
  { id: '1', name: 'بن تركي فاتح', price: 150, desc: 'بن تركي فاتح محمص بعناية، مناسب لقهوة الصباح. نكهة ناعمة ومتوازنة.', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'بن تركي وسط', price: 150, desc: 'مزيج متوازن من البن التركي، طعم غني ورائحة مميزة.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: 'بن تركي غامق', price: 150, desc: 'بن غامق للعشاق، رائحة قوية وطعم مميز يدوم.', image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: 'بن برازيلي', price: 200, desc: 'بن برازيلي فاخر، اختيار مثالي لعشاق القهوة الأصيلة.', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800&auto=format&fit=crop' },
]

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const product = dummyProducts.find(p => p.id === id)

  if (!product) return <div style={{ padding: '60px', textAlign: 'center' }}>المنتج غير موجود</div>

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
      
      {/* صورة المنتج */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} 
        />
      </div>
      
      {/* تفاصيل المنتج */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <Link to="/products" style={{ fontSize: '1rem', display: 'inline-block', marginBottom: '30px', color: '#d97706', fontWeight: '700' }}>
          ← رجوع للمنتجات
        </Link>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px', color: '#3b2314', fontWeight: '800' }}>{product.name}</h1>
        <p style={{ fontSize: '2rem', color: '#d97706', fontWeight: '800', marginBottom: '30px' }}>{product.price} ج.م</p>
        
        <div style={{ width: '50px', height: '4px', backgroundColor: '#3b2314', marginBottom: '30px', borderRadius: '2px' }}></div>
        
        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '50px' }}>{product.desc}</p>
        
        <button 
          onClick={() => addToCart(product)}
          style={{ 
            padding: '18px 50px', 
            backgroundColor: '#3b2314', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '50px', 
            cursor: 'pointer', 
            fontWeight: '700', 
            fontSize: '1.3rem', 
            boxShadow: '0 10px 20px rgba(59, 35, 20, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          أضف للسلة 🛒
        </button>
      </div>
    </div>
  )
}
