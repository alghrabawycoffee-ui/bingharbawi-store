import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      {/* القسم الرئيسي (Hero) */}
      <div style={{ 
        position: 'relative', 
        height: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(43, 29, 18, 0.7), rgba(43, 29, 18, 0.7)), url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '800px', padding: '20px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>أهلاً بيك في بن الغرباوي ☕</h1>
          <p style={{ fontSize: '1.4rem', marginBottom: '40px', lineHeight: '1.6' }}>
            أصل البن الحقيقي. اختار منتجاتك المفضلة واعمل طلبك دلوقتي وهنوصلك لباب البيت.
          </p>
          <Link to="/products" style={{ 
            display: 'inline-block', 
            padding: '16px 50px', 
            backgroundColor: '#d97706', 
            color: '#fff', 
            fontSize: '1.3rem', 
            fontWeight: '700',
            borderRadius: '50px', 
            boxShadow: '0 8px 20px rgba(217, 119, 6, 0.4)',
            transition: 'transform 0.2s'
          }}>
            تصفح منتجاتنا
          </Link>
        </div>
      </div>

      {/* قسم المميزات */}
      <div style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#3b2314', marginBottom: '50px', fontWeight: '800' }}>ليه تختار بن الغرباوي؟</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌱</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>بن طازج</h3>
            <p style={{ color: '#666' }}>بن محمص يوميًا ومستورد من أفضل المزارع.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚚</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>توصيل سريع</h3>
            <p style={{ color: '#666' }}>بنوصل طلبك لباب البيت في أسرع وقت.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>أفضل جودة</h3>
            <p style={{ color: '#666' }}>أجود أنواع البن البرازيلي والتركي.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
