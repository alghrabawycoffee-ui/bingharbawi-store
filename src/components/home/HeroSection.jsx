import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="section" style={{ paddingTop: 'clamp(var(--space-9), 12vw, var(--space-12))' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(var(--space-7), 8vw, var(--space-10))', alignItems: 'center' }}>
        <div className="hero-content" style={{ gridColumn: '1 / span 6', display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="section-header__eyebrow">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
              محمص بعناية في كل دفعة
            </div>
            <h1 style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)', fontWeight: '800', lineHeight: '1.08', letterSpacing: '-0.04em' }}>
              بن الغرباوي
              <br />
              <span style={{ color: 'var(--accent)' }}>نكهة فاخرة تدوم</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.18rem)', color: 'var(--text-secondary)', maxWidth: '560px' }}>
              مجموعة منتقاة بعناية من أجود حبوب البن، محمصة وفق معايير دقيقة لتمنحك توازنًا مثاليًا بين الحموضة، الحلاوة، والقوام.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <Link to="/products" className="btn btn--primary">تصفح المتجر</Link>
            <Link to="/products" className="btn btn--ghost">عرض المجموعات</Link>
          </div>
        </div>
        <div className="hero-media" style={{ gridColumn: '7 / span 6', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-12% -16% -18% 10%', background: 'radial-gradient(circle, rgba(185, 154, 93, 0.14) 0%, transparent 70%)' }}></div>
          <figure style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}>
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop" 
              alt="فنجان قهوة مع حبوب البن" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
