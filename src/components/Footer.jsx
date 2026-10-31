export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: '#3b2314', color: '#fff', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '800' }}>☕ بن الغرباوي</h3>
        <p style={{ opacity: '0.9', marginBottom: '10px' }}>أجود أنواع البن المحمص بعناية</p>
        <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>جميع الحقوق محفوظة © بن الغرباوي {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
