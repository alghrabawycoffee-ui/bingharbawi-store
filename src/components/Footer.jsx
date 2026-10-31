import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a100a', color: '#ffffff', paddingTop: '60px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', paddingBottom: '40px', textAlign: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem' }}>☕</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ffffff', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</span>
          </Link>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              الرئيسية
            </Link>
            <Link to="/products" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              المنتجات
            </Link>
            <Link to="/about" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              من نحن
            </Link>
            <Link to="/contact" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              تواصل معنا
            </Link>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ color: '#cccccc', fontSize: '1.4rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Facebook">
              📘
            </a>
            <a href="#" style={{ color: '#cccccc', fontSize: '1.4rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Instagram">
              📸
            </a>
            <a href="#" style={{ color: '#cccccc', fontSize: '1.4rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingBlock: '24px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#999999', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} بن الغرباوي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
