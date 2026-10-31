export default function Features() {
  const features = [
    { icon: '🚚', title: 'توصيل سريع', desc: 'خدمة توصيل آمنة وسريعة' },
    { icon: '💰', title: 'دفع عند الاستلام', desc: 'ادفع نقداً عند استلام طلبك' },
    { icon: '⭐', title: 'جودة عالية', desc: 'أجود أنواع البن المختارة بعناية' },
    { icon: '🔒', title: 'ضمان الجودة', desc: 'نضمن لك أفضل منتج دائماً' },
  ]

  return (
    <section style={{ padding: '60px 0', backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'right' }}>
              <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{feature.icon}</div>
              <div>
                <h3 style={{ fontWeight: '800', marginBottom: '4px', color: 'var(--primary)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
