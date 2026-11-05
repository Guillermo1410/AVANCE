/* Hero — cinematic campaign split. Product lives in a warm scene on the right;
   copy on a rich warm-dark field. Soft glow + rising steam for atmosphere. */
function Hero({ onShop }) {
  const mobile = useIsMobile();
  return (
    <section style={{ position: 'relative', minHeight: mobile ? 'auto' : '92vh', overflow: 'hidden',
      background: 'var(--grad-hero)' }}>
      {/* ambient warm light — top-right glow + soft caramel reflection */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(50% 55% at 80% 22%, rgba(231,176,110,0.30), transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(38% 40% at 12% 88%, rgba(180,120,66,0.16), transparent 70%)', pointerEvents: 'none' }} />
      <style>{`
        @keyframes avFloat { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-14px) } }
        @keyframes avFadeUp { from{ opacity:0; transform: translateY(22px) } to{ opacity:1; transform:none } }
        .av-fu { animation: avFadeUp .9s var(--ease-out) both; }
        .av-float { animation: avFloat 6.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce){ .av-fu, .av-float{ animation:none } }
      `}</style>

      <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto', minHeight: mobile ? 'auto' : '92vh',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '55% 45%', alignItems: 'center', gap: mobile ? 0 : 24,
        padding: mobile ? '120px 26px 0' : '96px 56px 32px' }}>

        {/* copy */}
        <div className="av-fu" style={{ order: mobile ? 2 : 1, padding: mobile ? '36px 0 52px' : 0, textAlign: 'left' }}>
          <div style={{ marginBottom: 26 }}>
            <span id="hero-kicker" style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)' }}>Science · Nature · Wellness</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: mobile ? 62 : 'clamp(64px, 6.6vw, 104px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--paper)', margin: 0, marginLeft: '-0.02em', transform: mobile ? 'none' : 'translateX(-28px)' }}>
            The warm cup<br/>that does<br/><span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 500 }}>more.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: mobile ? 18.5 : 20, lineHeight: 1.5, color: 'rgba(246,239,227,0.9)', maxWidth: 530, margin: '28px 0 0' }}>
            A daily ritual of real cacao, complete plant protein and a postbiotic complex — for calm recovery, a settled gut, and a few warm minutes that belong to you.
          </p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', margin: '28px 0 0', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onShop} style={{ fontSize: 18, padding: '21px 44px' }}>Shop Functional Cacao</Button>
            <button onClick={() => { const s = document.getElementById('story'); if (s) window.scrollTo({ top: s.offsetTop - 60, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 11, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16.5, color: 'var(--paper)' }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', border: '1.4px solid rgba(246,239,227,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon.arrow s={19} c="var(--paper)" /></span>
              The ritual
            </button>
          </div>
          <div style={{ display: 'flex', gap: mobile ? 18 : 34, margin: '18px 0 0', flexWrap: 'wrap' }}>
            {['100% Plant-based', 'No artificial sweeteners', '12 g plant protein'].map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(246,239,227,0.64)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* isolated product — floats directly on the hero, oversized & bleeding right */}
        <div className="av-fu" style={{ order: mobile ? 1 : 2, position: 'relative', alignSelf: mobile ? 'auto' : 'stretch', minHeight: mobile ? 460 : '92vh', boxSizing: 'border-box', paddingTop: mobile ? 0 : 40, paddingBottom: mobile ? 0 : 28, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
          <div style={{ transform: mobile ? 'none' : 'translateX(-20px) translateY(10px)' }}>
            <div className="av-float" style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', filter: 'drop-shadow(0 56px 72px rgba(10,6,2,0.66))' }}>
              {/* almost-imperceptible warm glow to separate product from background */}
              <div style={{ position: 'absolute', inset: '-8% -12%', background: 'radial-gradient(closest-side, rgba(181,122,63,0.13), transparent 72%)', filter: 'blur(22px)', zIndex: 0, pointerEvents: 'none' }} />
              <img src="./assets/hero-pouch-v6.png" alt="AVANCE Functional Cacao — 400 g pouch" style={{ position: 'relative', zIndex: 1, display: 'block', height: mobile ? 540 : 'min(660px, 70vh)', width: 'auto', maxWidth: 'none', alignSelf: 'flex-end' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
