import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { getCartCount } = useCart()
  const { user, isAdmin, logout } = useAuth()
  const count = getCartCount()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(26, 16, 10, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.18)' : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', paddingBlock: '14px' }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.8rem', cursor: 'pointer' }}
        >
          ☰
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>الرئيسية</Link>
          <Link to="/products" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</Link>
          <Link to="/about" style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من نحن</Link>
          {isAdmin && <Link to="/admin" style={{ fontWeight: '700', color: '#d4af37', fontSize: '0.98rem', fontFamily: 'Cairo, Tajawal, sans-serif' }}>لوحة الإدارة</Link>}
        </nav>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.9rem' }}>☕</span>
          <span style={{ fontSize: '1.7rem', fontWeight: '900', letterSpacing: '-0.01em', color: '#d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>بن الغرباوي</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#ffffff', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.66 17h8.66a2 2 0 0 0 1.97-1.61L23 6H6"></path>
            </svg>
            <span>السلة</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#d4af37', color: '#1a100a', fontSize: '0.85rem', fontWeight: '700', padding: '0 6px' }}>{count}</span>
          </Link>
          {user ? (
            <button onClick={logout} style={{ padding: '8px 22px', borderRadius: '4px', border: '1.5px solid #d4af37', color: '#d4af37', fontWeight: '700', fontSize: '0.92rem', fontFamily: 'Cairo, Tajawal, sans-serif', cursor: 'pointer', background: 'none' }}>تسجيل الخروج</button>
          ) : (
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 24px', borderRadius: '4px', backgroundColor: 'transparent', color: '#d4af37', fontWeight: '700', fontSize: '0.92rem', border: '1.5px solid #d4af37', fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>حسابي</span>
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: 'rgba(26, 16, 10, 0.98)', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBlock: '18px' }}>
            <Link onClick={() => setMenuOpen(false)} to="/" style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Cairo, Tajawal, sans-serif' }}>الرئيسية</Link>
            <Link onClick={() => setMenuOpen(false)} to="/products" style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Cairo, Tajawal, sans-serif' }}>منتجاتنا</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Cairo, Tajawal, sans-serif' }}>من نحن</Link>
            <Link onClick={() => setMenuOpen(false)} to="/cart" style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Cairo, Tajawal, sans-serif' }}>السلة ({count})</Link>
            {user ? (
              <button onClick={() => { logout(); setMenuOpen(false) }} style={{ color: '#d4af37', fontWeight: '700', textAlign: 'right', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, Tajawal, sans-serif' }}>تسجيل الخروج</button>
            ) : (
              <Link onClick={() => setMenuOpen(false)} to="/login" style={{ color: '#d4af37', fontWeight: '700' }}>حسابي</Link>
            )}
            {isAdmin && <Link onClick={() => setMenuOpen(false)} to="/admin" style={{ color: '#d4af37', fontWeight: '700' }}>لوحة الإدارة</Link>}
          </div>
        </div>
      )}
    </header>
  )
}
