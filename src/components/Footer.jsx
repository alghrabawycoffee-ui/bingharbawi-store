export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3b2314', color: '#fff', padding: '30px 0', marginTop: '60px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ opacity: '0.9' }}>جميع الحقوق محفوظة © بن الغرباوي {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
