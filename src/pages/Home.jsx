import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '3rem', color: '#3b2314', marginBottom: '20px' }}>أهلاً بيك في بن الغرباوي ☕</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 40px' }}>
        أصل البن الحقيقي. اختار منتجاتك المفضلة واعمل طلبك دلوقتي وهنوصلك لباب البيت.
      </p>
      <Link to="/products" style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#8b5a2b', color: '#fff', fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 4px 15px rgba(139,90,43,0.3)' }}>
        تصفح منتجاتنا
      </Link>
    </div>
  )
}
