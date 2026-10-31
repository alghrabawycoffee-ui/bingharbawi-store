export default function Products() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b2314' }}>كل المنتجات</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {/* كروت وهمية مؤقتة */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ height: '150px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px' }}></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>منتج رقم {item}</h3>
            <p style={{ color: '#8b5a2b', fontWeight: 'bold', fontSize: '1.1rem' }}>150 ج.م</p>
          </div>
        ))}
      </div>
    </div>
  )
}
