export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: '#3b2314', color: '#fff', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ opacity: '0.9' }}>جميع الحقوق محفوظة © بن الغرباوي {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
