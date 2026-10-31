import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a100a', color: '#ffffff', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', paddingBottom: '60px', textAlign: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '2.2rem' }}>☕</span>
            <span style={{ fontSize: '2rem', fontWeight: '900', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</span>
          </Link>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s', fontFamily: 'Cairo, Tajawal, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              الرئيسية
            </Link>
            <Link to="/products" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s', fontFamily: 'Cairo, Tajawal, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              المنتجات
            </Link>
            <Link to="/about" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s', fontFamily: 'Cairo, Tajawal, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              من نحن
            </Link>
            <Link to="/contact" style={{ color: '#cccccc', fontWeight: '500', transition: 'color 0.2s', fontFamily: 'Cairo, Tajawal, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}>
              تواصل معنا
            </Link>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            <a href="#" style={{ color: '#cccccc', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" style={{ color: '#cccccc', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" style={{ color: '#cccccc', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'} aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingBlock: '24px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#999999', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} بن الغرباوي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
