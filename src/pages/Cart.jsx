export default function Cart() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b2314' }}>سلة المشتريات 🛒</h2>
      <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '20px' }}>السلة فاضية حالياً.</p>
      <button style={{ padding: '12px 30px', backgroundColor: '#8b5a2b', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
        إتمام الطلب
      </button>
    </div>
  )
}
