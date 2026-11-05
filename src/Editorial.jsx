/* Editorial conversion modules: ScienceDeep · Founder · Sustainability */

/* ---- The science, in plain language + clinical credibility ---- */
function ScienceDeep() {
  const mobile = useIsMobile();
  const cards = [
    { icon: 'postbiotic', k: 'Postbiotics', t: 'The part your gut actually uses', b: 'Probiotics are live bacteria that have to survive the trip. Postbiotics are the beneficial compounds those bacteria leave behind — already active, shelf-stable, and ready to support the gut lining the moment they arrive.' },
    { icon: 'leaf', k: 'Protein quality', t: 'Complete, by design', b: 'Pea and rice protein were paired deliberately: together they deliver all nine essential amino acids in the ratios your muscles use to repair — the kind of complete profile usually reserved for whey.' },
    { icon: 'drop', k: 'Functional cacao', t: 'More than flavor', b: 'Natural, non-alkalized cacao brings polyphenols and a gentle, caffeine-light lift. It\u2019s what turns a supplement into something you genuinely look forward to — the reason the ritual sticks.' },
  ];
  const credibility = [
    ['flask', 'Third-party lab tested', 'Every batch screened for purity, heavy metals and potency — COA available on request.'],
    ['shield', 'cGMP-certified facility', 'Manufactured in the USA in an FDA-registered, cGMP-compliant facility.'],
    ['recovery', 'Research-informed doses', 'Formulated to the levels studied in the published gut-health literature.'],
    ['leaf', 'Clean by formulation', 'No gums, no artificial sweeteners, no synthetic fillers — ever.'],
  ];
  const refs = [
    ['Postbiotics & the gut barrier', 'Cell Host & Microbe, 2021'],
    ['Plant protein & muscle recovery', 'The Journal of Nutrition, 2022'],
    ['Cacao polyphenols & metabolic health', 'Nutrients, 2020'],
  ];
  return (
    <section id="science" style={{ background: 'var(--paper)', padding: mobile ? '76px 26px' : '66px 56px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHead kicker="The science, made simple" title="Function you can actually feel" sub="No jargon, no fine print — just what each ingredient does, and why it earns its place in your cup." />
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: mobile ? 20 : 26, marginTop: mobile ? 48 : 72 }}>
          {cards.map(c => (
            <div key={c.k} style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '34px 30px', transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--sage-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--avance-green)' }}>{Icon[c.icon]({ s: 24, c: 'var(--avance-green)' })}</span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--avance-green)', margin: '22px 0 10px' }}>{c.k}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, color: 'var(--espresso)', margin: '0 0 12px', lineHeight: 1.15 }}>{c.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--coffee)', margin: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
        {/* clinical credibility band */}
        <div style={{ position: 'relative', overflow: 'hidden', marginTop: mobile ? 28 : 36, background: 'var(--grad-cocoa)', borderRadius: 'var(--radius-lg)', padding: mobile ? '32px 26px' : '40px 44px' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 88% 0%, rgba(231,176,110,0.16), transparent 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: mobile ? '26px 20px' : 36 }}>
          {credibility.map(([ic, t, b]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ flex: 'none', color: 'var(--sage)' }}>{Icon[ic]({ s: 24, c: 'var(--sage)' })}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16.5, color: 'var(--paper)' }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, color: 'var(--on-dark-2)', marginTop: 6 }}>{b}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* research references + FDA disclaimer */}
        <div style={{ marginTop: mobile ? 24 : 30 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--mocha)', marginBottom: 16 }}>Grounded in research</div>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: mobile ? 14 : 28 }}>
            {refs.map(([t, src], n) => (
              <div key={t} style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--avance-green)', marginBottom: 8 }}>{String(n + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--espresso)', lineHeight: 1.35 }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--mocha)', marginTop: 8 }}>{src}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, lineHeight: 1.6, color: 'var(--mocha)', margin: '22px 0 0', fontStyle: 'italic', maxWidth: 720 }}>
            Citations are representative of the published literature on these ingredients. These statements have not been evaluated by the Food &amp; Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- Founder story (editorial, no fabricated portrait) ---- */
function Founder() {
  const mobile = useIsMobile();
  return (
    <section id="founder" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-cocoa-soft)', color: 'var(--cream)', padding: mobile ? '76px 26px' : '66px 56px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(46% 50% at 84% 14%, rgba(231,176,110,0.18), transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.92fr 1.08fr', gap: mobile ? 44 : 72, alignItems: 'center' }}>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(246,239,227,0.1)', order: mobile ? 2 : 1 }}>
          <img src="./assets/r-story.png" alt="AVANCE Functional Cacao pouch, warm and cinematic" style={{ width: '100%', display: 'block', filter: 'brightness(1.04)' }} />
        </div>
        <div style={{ order: mobile ? 1 : 2 }}>
          <Eyebrow color="var(--sage)">Our story</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: mobile ? 32 : 'clamp(34px, 4.2vw, 46px)', lineHeight: 1.08, color: 'var(--paper)', margin: '16px 0 0' }}>Born in a lab, perfected at the kitchen table.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.75, color: 'var(--on-dark-2)', margin: '22px 0 0', maxWidth: 520 }}>
            AVANCE started as a biotechnology thesis — a question about whether postbiotics could be made genuinely useful in everyday nutrition. The science worked. The early prototypes did not taste like something you'd want at 9pm in winter.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.75, color: 'var(--on-dark-2)', margin: '18px 0 0', maxWidth: 520 }}>
            So we kept going — pairing fermentation science with real, natural cacao until the formula and the ritual were equally good. AVANCE is what happens when a lab and a warm cup finally agree.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 30 }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--paper)' }}>The AVANCE team</span>
            <span style={{ height: 1, flex: 1, maxWidth: 80, background: 'var(--border-dark)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--sage)' }}>EST. 2025 · ARG</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Sustainability & sourcing ---- */
function Sustainability() {
  const mobile = useIsMobile();
  const items = [
    { icon: 'leaf', t: 'Natural, non-alkalized cacao', b: 'Sourced from smallholder cooperatives and traded above market — premium sourcing, subject to final supplier confirmation.' },
    { icon: 'recovery', t: 'Mono-material, recyclable pouch', b: 'A single-polymer stand-up pouch with a resealable zip — premium in hand and built to actually be recycled.' },
    { icon: 'truck', t: 'Carbon-neutral delivery', b: 'Every order ships carbon-neutral, in minimal kraft packaging printed with soy-based inks.' },
  ];
  return (
    <section id="sourcing" style={{ background: 'var(--sage-tint)', padding: mobile ? '76px 26px' : '64px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead kicker="Sourcing & sustainability" title="Premium shouldn't cost the planet" sub="Real ingredients, traced to their source, in packaging designed to leave less behind." />
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: mobile ? 32 : 40, marginTop: mobile ? 48 : 68 }}>
          {items.map(it => (
            <div key={it.t}>
              <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--paper)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--avance-green)' }}>{Icon[it.icon]({ s: 24, c: 'var(--avance-green)' })}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 21, color: 'var(--espresso)', margin: '20px 0 10px' }}>{it.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--coffee)', margin: 0 }}>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ScienceDeep, Founder, Sustainability });
