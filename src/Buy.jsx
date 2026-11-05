/* Commerce: Buy block + Subscription flow */

function BuyGallery({ mobile }) {
  const shots = [
    { src: './assets/r-pouch-front.jpg', label: 'Front', pos: 'center center' },
    { src: './assets/r-pouch-back.jpg', label: 'Back — Supplement Facts', pos: 'center center' },
  ];
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-lg)', background: 'linear-gradient(160deg,#2a1c12,#160d07)', aspectRatio: mobile ? '4/3.4' : '1/1', maxHeight: mobile ? 'none' : 480 }}>
        {shots.map((s, i) => (
          <img key={i} src={s.src} alt={'AVANCE Functional Cacao — ' + s.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos, opacity: active === i ? 1 : 0, transition: 'opacity .5s var(--ease-out)' }} />
        ))}
        <div style={{ position: 'absolute', top: 16, right: 16 }}><Seal size={56} color="rgba(246,239,227,0.9)" /></div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        {shots.map((s, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={s.label} style={{ flex: 1, cursor: 'pointer', padding: 0, border: active === i ? '2px solid var(--avance-green)' : '2px solid transparent', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'linear-gradient(160deg,#2a1c12,#160d07)', aspectRatio: '1', maxHeight: 96, transition: 'border-color var(--dur) var(--ease-out)' }}>
            <img src={s.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', opacity: active === i ? 1 : 0.66 }} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Buy({ onAdd }) {
  const mobile = useIsMobile();
  const [qty, setQty] = React.useState(1);
  const [plan, setPlan] = React.useState('subscribe');
  const [freq, setFreq] = React.useState('30');
  const price = plan === 'subscribe' ? 45.76 : 52;
  return (
    <section id="buy" style={{ background: 'var(--paper)', padding: mobile ? '72px 26px' : '76px 56px' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.92fr 1fr', gap: mobile ? 36 : 52, alignItems: 'start' }}>
        <BuyGallery mobile={mobile} />
        <div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Stars s={5} size={16} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--mocha)', whiteSpace: 'nowrap' }}>Launching soon</span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--avance-green)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--avance-green)' }} />In stock
            </span>
          </div>
          <h2 tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: mobile ? 32 : 30, color: 'var(--espresso)', margin: '0 0 5px', letterSpacing: '-0.01em' }}>Functional Cacao</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--coffee)', margin: '0 0 6px' }}>400 g · 13 servings · Hot drink powder</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, margin: '0 0 16px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--espresso)' }}>${price.toFixed(2).replace('.00','')}</span>
            {plan === 'subscribe' && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--mocha)', textDecoration: 'line-through' }}>$52</span>}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--avance-green)' }}>${(price / 13.33).toFixed(2)} / serving</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
            {[['subscribe', 'Subscribe & save', 'From $45.76 · cancel anytime'], ['once', 'One-time purchase', '$52']].map(([key, t, s]) => (
              <button key={key} onClick={() => setPlan(key)} style={{ textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', borderRadius: 'var(--radius-md)', background: plan === key ? 'var(--sage-tint)' : 'var(--cream)', border: plan === key ? '1.5px solid var(--avance-green)' : '1.5px solid var(--border)', transition: 'all var(--dur) var(--ease-out)' }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid ' + (plan === key ? 'var(--avance-green)' : 'var(--taupe)'), display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{plan === key && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--avance-green)' }} />}</span>
                <span style={{ flex: 1 }}><span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--espresso)', display: 'block' }}>{t}</span><span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--mocha)' }}>{s}</span></span>
                {key === 'subscribe' && <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--paper)', background: 'var(--avance-green)', padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap' }}>SAVE 12%</span>}
              </button>
            ))}
          </div>

          {plan === 'subscribe' && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mocha)', marginBottom: 8 }}>Deliver every</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[['30', '30 days'], ['45', '45 days'], ['60', '60 days']].map(([v, l]) => (
                  <button key={v} onClick={() => setFreq(v)} style={{ flex: 1, cursor: 'pointer', padding: '9px 0', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, border: freq === v ? '1.5px solid var(--avance-green)' : '1.5px solid var(--border)', background: freq === v ? 'var(--avance-green)' : 'transparent', color: freq === v ? 'var(--paper)' : 'var(--espresso)', transition: 'all var(--dur) var(--ease-out)' }}>{l}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1.5px solid var(--border)', borderRadius: 'var(--radius-pill)', padding: '11px 16px' }}>
              <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--espresso)', display: 'flex' }}><Icon.minus /></button>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, minWidth: 16, textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--espresso)', display: 'flex' }}><Icon.plus /></button>
            </div>
            <Button variant="primary" size="lg" style={{ flex: 1, justifyContent: 'center', whiteSpace: 'nowrap' }} onClick={() => onAdd(qty)}><span>Add to cart · ${price * qty}</span></Button>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--mocha)', margin: '10px 0 0', textAlign: 'center' }}>or 4 interest-free payments of ${(price * qty / 4).toFixed(2)}</p>

          {/* trust + fulfilment */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 18px', margin: '18px 0 0', padding: '16px 0 0', borderTop: '1px solid var(--border)' }}>
            {[['truck', 'Fast shipping', 'Ships in 1–2 days, free over $35'], ['recovery', '30-day guarantee', 'Love it or your money back'], ['shield', 'Secure checkout', '256-bit SSL encrypted'], ['leaf', 'Cancel anytime', 'No lock-in, no fine print']].map(([ic, t, s]) => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ flex: 'none', color: 'var(--avance-green)', marginTop: 1 }}>{Icon[ic]({ s: 18, c: 'var(--avance-green)' })}</span>
                <span style={{ minWidth: 0 }}><span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--espresso)', display: 'block', lineHeight: 1.3 }}>{t}</span><span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--mocha)', display: 'block', lineHeight: 1.4, marginTop: 2 }}>{s}</span></span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 0', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mocha)', marginRight: 4 }}>We accept</span>
            {['VISA', 'MC', 'AMEX', 'PayPal', 'Pay', 'Shop'].map(p => (
              <span key={p} style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--coffee)', border: '1px solid var(--border)', borderRadius: 5, padding: '4px 8px', background: 'var(--cream)' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionFlow() {
  const mobile = useIsMobile();
  const steps = [
    ['Choose your cadence', 'Every 30, 45 or 60 days — whatever matches your ritual.'],
    ['We ship, carbon-neutral', 'A fresh matte pouch arrives before you run out. Always 12% off.'],
    ['Pause or cancel anytime', 'No lock-in, no fine print. Skip a month in two taps.'],
  ];
  return (
    <section style={{ background: 'var(--sage-tint)', padding: mobile ? '72px 26px' : '64px 56px' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto' }}>
        <SectionHead kicker="Subscribe & save" title="A ritual that restocks itself" sub="Members save 12% on every pouch, get free shipping, and early access to new functional blends." />
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: mobile ? 28 : 24, marginTop: mobile ? 48 : 64, position: 'relative' }}>
          {steps.map(([t, b], i) => (
            <div key={t} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--avance-green)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>{i + 1}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, color: 'var(--espresso)', margin: '0 0 10px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--coffee)', margin: '0 auto', maxWidth: 260 }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: mobile ? 40 : 52 }}>
          <Button variant="dark" size="lg" onClick={() => { const b = document.getElementById('buy'); if (b) window.scrollTo({ top: b.offsetTop - 70, behavior: 'smooth' }); }}>Start your subscription</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Buy, SubscriptionFlow });
