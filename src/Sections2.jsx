/* Comparison · Reviews · NutritionFacts · FAQ · Subscribe · Footer */

function Comparison() {
  const mobile = useIsMobile();
  const cols = ['AVANCE', 'Greens powder', 'Protein shake'];
  const rows = [
    ['Complete plant protein', [true, false, true]],
    ['Postbiotic gut complex', [true, false, false]],
    ['Real, minimally-processed cacao', [true, false, false]],
    ['Served warm — a ritual', [true, false, false]],
    ['No artificial sweeteners', [true, false, false]],
    ['Vegan & dairy-free', [true, true, false]],
  ];
  const Cell = ({ v, hero }) => v
    ? <span style={{ display: 'inline-flex', width: 26, height: 26, borderRadius: '50%', background: hero ? 'var(--avance-green)' : 'var(--sage-tint)', alignItems: 'center', justifyContent: 'center' }}><Icon.check s={15} c={hero ? 'var(--paper)' : 'var(--avance-green)'} /></span>
    : <span style={{ display: 'inline-flex', color: 'var(--latte)' }}><Icon.x s={18} /></span>;
  return (
    <section style={{ background: 'var(--cream)', padding: mobile ? '72px 20px' : '64px 56px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <SectionHead kicker="Why AVANCE" title="One cup, fewer compromises" />
        <div style={{ marginTop: mobile ? 44 : 64, background: 'var(--paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1.4fr repeat(3,1fr)' : '2fr repeat(3,1fr)', alignItems: 'center', padding: mobile ? '18px 14px' : '22px 28px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
            <span />
            {cols.map((c, i) => <span key={c} style={{ textAlign: 'center', fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-body)', fontWeight: i === 0 ? 600 : 600, fontSize: mobile ? 11 : 14, letterSpacing: i === 0 ? '0.04em' : '0.02em', color: i === 0 ? 'var(--avance-green)' : 'var(--mocha)' }}>{c}</span>)}
          </div>
          {rows.map(([label, vals], r) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: mobile ? '1.4fr repeat(3,1fr)' : '2fr repeat(3,1fr)', alignItems: 'center', padding: mobile ? '16px 14px' : '18px 28px', borderBottom: r < rows.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: mobile ? 13 : 15, color: 'var(--espresso)', fontWeight: 500 }}>{label}</span>
              {vals.map((v, i) => <span key={i} style={{ textAlign: 'center' }}><Cell v={v} hero={i === 0} /></span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const mobile = useIsMobile();
  const data = [
    { s: 5, topic: 'Recovery', q: 'I came to AVANCE after knee surgery ended my marathon season. The 9pm cup became the recovery ritual I actually look forward to — and after years of chalky shakes wrecking my stomach, this is the first protein my gut just… accepts.', n: 'Elena Vásquez', loc: 'Denver, CO', m: 'Early tester', tag: 'Concept' },
    { s: 5, topic: 'Gut health', q: 'Two seasons on ski patrol means brutal cold and no real off-switch. A hot AVANCE at the end of a shift winds me down the way coffee never could. Three months in, the bloating I\u2019d just learned to live with is basically gone.', n: 'Marcus Brandt', loc: 'Park City, UT', m: 'Early tester', tag: 'Concept' },
    { s: 5, topic: 'Gut health', q: 'As a dietitian I read every panel twice and recommend almost nothing without a caveat. AVANCE is the exception — a complete plant protein, a real postbiotic dose, no gums or fillers. That it tastes like a treat is almost unfair.', n: 'Dr. Priya Nair, RD', loc: 'Brooklyn, NY', m: 'Early tester', tag: 'Concept' },
    { s: 5, topic: 'Daily routine', q: 'I swapped my second afternoon coffee for AVANCE and the 3pm crash just… stopped. It\u2019s become the small warm break that resets my whole afternoon. Six weeks in and I genuinely look forward to it.', n: 'James Okafor', loc: 'Seattle, WA', m: 'Early tester', tag: 'Concept' },
    { s: 5, topic: 'Gut health', q: 'I have a sensitive stomach and brace myself for new supplements. This one I tolerate completely — no cramping, no bloat. My mornings feel lighter and more regular than they have in years.', n: 'Sarah Lindqvist', loc: 'Austin, TX', m: 'Early tester', tag: 'Concept' },
    { s: 5, topic: 'Recovery', q: 'I lift five days a week and needed an evening protein that wouldn\u2019t sit like a brick. AVANCE hits 12g, tastes like dessert, and I sleep better on the nights I drink it. It\u2019s in my routine for good.', n: 'David Reyes', loc: 'Chicago, IL', m: 'Early tester', tag: 'Concept' },
  ];
  const topics = ['All', 'Recovery', 'Gut health', 'Daily routine'];
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? data : data.filter(d => d.topic === filter);
  return (
    <section id="reviews" style={{ background: 'var(--paper)', padding: mobile ? '72px 26px' : '64px 56px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHead kicker="Pre-launch" title="What early testers are saying" sub="AVANCE is in pre-launch — these are illustrative concept-testing quotes, not yet verified customer reviews." />

        <div style={{ display: 'flex', justifyContent: mobile ? 'flex-start' : 'center', marginTop: mobile ? 40 : 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)', padding: '12px 22px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--coffee)' }}>Early-access tasting panel — verified reviews coming at launch</div>
        </div>

        {/* topic filters */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', margin: mobile ? '32px 0 0' : '44px 0 0' }}>
          {topics.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{ cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, padding: '9px 18px', borderRadius: 'var(--radius-pill)', border: filter === t ? '1.5px solid var(--avance-green)' : '1.5px solid var(--border)', background: filter === t ? 'var(--avance-green)' : 'transparent', color: filter === t ? 'var(--paper)' : 'var(--espresso)', transition: 'all var(--dur) var(--ease-out)' }}>{t}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 22, marginTop: mobile ? 28 : 36 }}>
          {shown.map((d, i) => (
            <div key={d.n} style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16, transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stars s={d.s} size={15} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--mocha)', background: 'var(--sage-tint)', borderRadius: 999, padding: '3px 9px' }}>{d.topic}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: 'var(--cocoa)', margin: 0, flex: 1 }}>"{d.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 13, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--espresso)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500 }}>{d.n.split(' ').map(w => w[0]).slice(0,2).join('')}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14.5, color: 'var(--espresso)', display: 'flex', alignItems: 'center', gap: 7 }}>{d.n}<Icon.check s={13} c="var(--avance-green)" /></div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--mocha)', marginTop: 1 }}>{d.loc} · {d.m}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const mobile = useIsMobile();
  const items = [
    ['shield', '30-day taste guarantee'],
    ['truck', 'Free carbon-neutral shipping'],
    ['flask', 'Third-party lab tested'],
    ['leaf', '100% plant-based & vegan'],
  ];
  return (
    <section style={{ background: 'var(--sage-tint)', padding: mobile ? '40px 26px' : '40px 56px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', gap: mobile ? 26 : 40, justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {items.map(([ic, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 13, flex: mobile ? '1 1 42%' : '1' }}>
            <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--paper)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', color: 'var(--avance-green)' }}>{Icon[ic]({ s: 21, c: 'var(--avance-green)' })}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: mobile ? 13 : 14, fontWeight: 600, color: 'var(--espresso)', lineHeight: 1.3 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function NutritionFacts() {
  const mobile = useIsMobile();
  // NOTE: Calories, Total Carbohydrate, Dietary Fiber, Total Sugars and Fat are placeholder figures pending
  // final nutritional analysis/lab validation — do not treat as definitive or publish without lab confirmation.
  const pending = [['Calories', '120'], ['Total Carbohydrate', '6 g'], ['  Dietary Fiber', '3 g'], ['  Total Sugars', '1 g'], ['Fat', '2.5 g']];
  const facts = [...pending, ['Protein', '12 g'], ['Postbiotic complex', '1,500 mg'], ['Natural cacao', '12.9 g']];
  const inside = [
    ['Pea & rice protein', 'Complete amino acid profile for recovery.'],
    ['Postbiotic complex', 'Fermentation-derived, for gut-lining support.'],
    ['Natural cacao', 'Non-alkalized, naturally smooth.'],
  ];
  return (
    <section id="nutrition" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-cocoa)', color: 'var(--cream)', padding: mobile ? '72px 26px' : '64px 56px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--glow-top)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.96fr 1.04fr', gap: mobile ? 44 : 56, alignItems: 'start' }}>
        <div style={{ background: 'var(--paper)', color: 'var(--espresso)', borderRadius: 'var(--radius-md)', padding: '26px 28px', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, borderBottom: '6px solid var(--espresso)', paddingBottom: 6 }}>Supplement Facts</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--mocha)', padding: '8px 0', borderBottom: '2px solid var(--espresso)' }}>Serving size 30 g (1 scoop) · 13 servings</div>
          {facts.map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
              <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', color: k.startsWith('  ') ? 'var(--coffee)' : 'var(--espresso)', fontWeight: k.startsWith('  ') ? 400 : 600, paddingLeft: k.startsWith('  ') ? 14 : 0 }}>{k.trim()}</span>
              <span style={{ flex: 'none', fontWeight: 600, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', paddingLeft: 12 }}>{v}</span>
            </div>
          ))}
        </div>
        <div>
          <Eyebrow color="var(--sage)">What's inside</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: mobile ? 32 : 42, color: 'var(--paper)', margin: '16px 0 8px', lineHeight: 1.08 }}>Clean ingredients. Nothing to hide.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--on-dark-2)', margin: '0 0 32px', maxWidth: 480 }}>No gums, no artificial sweeteners, no synthetic fillers. If it's in the pouch, it's there to do a job.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {inside.map(([t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 16, padding: '18px 0', borderTop: '1px solid var(--border-dark)' }}>
                <span style={{ flex: 'none', marginTop: 2, color: 'var(--sage)' }}><Icon.leaf s={20} c="var(--sage)" /></span>
                <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18, color: 'var(--paper)' }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--on-dark-2)', marginTop: 3 }}>{b}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const mobile = useIsMobile();
  const [open, setOpen] = React.useState(0);
  const qs = [
    ['What exactly are postbiotics?', 'Postbiotics are the beneficial compounds produced during fermentation — the metabolites your gut actually uses. Unlike probiotics, they\u2019re stable, shelf-friendly, and don\u2019t depend on live cultures surviving the trip.'],
    ['How is it different from a greens or protein powder?', 'AVANCE is a warm, complete cup: a full plant protein, a postbiotic gut complex, and real cacao — designed as an evening recovery ritual rather than a morning chore.'],
    ['When should I drink it?', 'Most members make it an evening wind-down or a mid-afternoon reset. Sip it warm; it\u2019s built for the slow part of your day.'],
    ['Is it actually vegan?', 'Yes — 100% plant-based and dairy-free, with no artificial sweeteners or synthetic fillers.'],
    ['Can I pause or cancel my subscription?', 'Anytime, in two taps. Skip a delivery, change your cadence, or cancel with no fine print.'],
  ];
  return (
    <section id="faq" style={{ background: 'var(--cream)', padding: mobile ? '72px 26px' : '64px 56px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <SectionHead kicker="Questions" title="Good to know" />
        <div style={{ marginTop: mobile ? 36 : 52 }}>
          {qs.map(([q, a], i) => <Accordion key={i} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  const mobile = useIsMobile();
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-cocoa-soft)', padding: mobile ? '76px 26px' : '60px 56px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 60% at 50% 0%, rgba(231,176,110,0.16), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow color="var(--sage)">Join the ritual</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: mobile ? 30 : 38, color: 'var(--paper)', margin: '14px 0 8px' }}>10% off your first pouch</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--on-dark-2)', margin: '0 0 28px' }}>Plus early access to new functional blends. No spam — just the good stuff.</p>
        {done ? (
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--sage)' }}>You're in — check your inbox.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: 'flex', gap: 10, maxWidth: 460, margin: '0 auto', flexDirection: mobile ? 'column' : 'row' }}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 15, padding: '15px 20px', border: '1.5px solid var(--border-dark)', borderRadius: 'var(--radius-pill)', background: 'rgba(246,239,227,0.08)', color: 'var(--paper)', outline: 'none' }} />
            <Button variant="primary" size="md" style={{ justifyContent: 'center' }}>Get 10% off</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const mobile = useIsMobile();
  const cols = { Shop: ['Functional Cacao', 'The Collection', 'Subscribe & save', 'Starter kit', 'Gift sets'], Learn: ['The science', 'Postbiotics 101', 'Our ritual', 'Journal'], Support: ['FAQ', 'Shipping & returns', 'Contact', 'Account'] };
  return (
    <footer style={{ background: 'var(--grad-footer)', color: 'var(--on-dark-2)', padding: mobile ? '56px 26px 36px' : '76px 56px 44px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.7fr 1fr 1fr 1fr', gap: mobile ? 40 : 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Logo color="var(--cream)" size={24} layout="stacked" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--on-dark-2)', maxWidth: 300, margin: '24px auto 0', textAlign: 'center' }}>Premium functional nutrition for cold-weather wellness — recovery, gut health and ritual in one warm cup.</p>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 16 }}>{h}</div>
            {items.map(i => <a key={i} href="#" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--on-dark-2)', marginBottom: 12, transition: 'color var(--dur) var(--ease-out)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--on-dark-2)'}>{i}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1120, margin: '40px auto 0', paddingTop: 28, borderTop: '1px solid var(--border-dark)', display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 16, justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)' }}>We accept</span>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay', 'Shop Pay', 'Klarna'].map(p => (
            <span key={p} style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--on-dark-2)', border: '1px solid var(--border-dark)', borderRadius: 5, padding: '4px 9px' }}>{p}</span>
          ))}
        </div>
      </div>
      <p style={{ maxWidth: 1120, margin: '24px auto 0', fontFamily: 'var(--font-body)', fontSize: 11.5, lineHeight: 1.6, color: 'var(--mocha)', fontStyle: 'italic' }}>
        † These statements have not been evaluated by the Food &amp; Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before use if pregnant, nursing, or managing a medical condition.
      </p>
      <div style={{ maxWidth: 1120, margin: '24px auto 0', paddingTop: 24, borderTop: '1px solid var(--border-dark)', display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 18, justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--mocha)' }}>© 2025 AVANCE Nutrition LLC · Buenos Aires, ARG</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--mocha)' }}>Privacy · Terms · Accessibility</span>
          <Seal size={52} color="var(--sage)" />
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Comparison, Reviews, TrustStrip, NutritionFacts, FAQ, Subscribe, Footer });
