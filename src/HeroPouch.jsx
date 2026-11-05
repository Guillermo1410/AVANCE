/* AVANCE pouch — faithful CSS recreation of the NEW front-of-pack reference.
   Front-of-pack: "+" / AVANCE / thin rule / FUNCTIONAL <FLAVOR> / claim /
   three line-icon pillars / 100% plant-based badge / colored base band.
   Parametrized per flavor for the functional line. */

const FLAVORS = {
  cacao:  { key:'cacao',  name:'Functional Cacao',  flavor:'Cacao',  accent:'#2B3A1A', accentText:'#3C5226', wash:'var(--cacao-wash)',  hero:'Real natural cacao',     tagline:'The original warm cup.',   note:'Polyphenol-rich cacao for a grounding evening ritual.' },
  matcha: { key:'matcha', name:'Functional Matcha', flavor:'Matcha', accent:'#3F4A1E', accentText:'#566127', wash:'var(--matcha-wash)', hero:'Ceremonial-grade matcha', tagline:'Calm, clean focus.',       note:'Shade-grown matcha for steady, jitter-free clarity.' },
  golden: { key:'golden', name:'Functional Golden', flavor:'Golden', accent:'#6E4E18', accentText:'#8A6320', wash:'var(--golden-wash)', hero:'Turmeric + ginger',       tagline:'Warmth that soothes.',     note:'Turmeric and ginger for a soothing, anti-inflammatory cup.' },
  chai:   { key:'chai',   name:'Functional Chai',   flavor:'Chai',   accent:'#6B3A24', accentText:'#8A4B2E', wash:'var(--chai-wash)',   hero:'Spiced black tea',       tagline:'A spiced evening ritual.', note:'Cardamom, cinnamon and clove over a black-tea base.' },
};

/* small line-icon pillar used on pack (thin circle frame + glyph) */
function PackPillar({ icon, title, sub, color }) {
  const glyph = {
    gut: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4v3a3 3 0 0 0 6 0V4"/><path d="M15 10a3 3 0 0 1-6 0"/><path d="M7.5 9c0 4.5 1.8 6 4.5 6s4.5-1.5 4.5-6"/><path d="M9.5 18h5"/></svg>,
    leaf: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4C8 7 7 12 8 17c5 .5 9-1.5 8-7"/><path d="M9 16c2-4 5-6 8-6"/></svg>,
    recovery: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9a7 7 0 0 0-12-2.5"/><path d="M5 4v3h3"/><path d="M5 15a7 7 0 0 0 12 2.5"/><path d="M19 20v-3h-3"/></svg>,
  }[icon];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
      <span style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid ' + color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{glyph}</span>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.04em', color, textAlign: 'center' }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 8, color, opacity: 0.7, textAlign: 'center' }}>{sub}</div>
    </div>
  );
}

/* Pouch rendered at a fixed 320×486 design; flex column so content never overlaps */
function Pouch({ flavor = 'cacao', scale = 1, onClick, selected }) {
  const f = FLAVORS[flavor];
  const ink = '#241a12';
  const W = 320, H = 486;
  const pouch = (
    <div style={{ width: W, height: H, borderRadius: 14, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', background: 'linear-gradient(105deg,#efe7d7,#e4d8c4)',
      boxShadow: selected ? '0 22px 48px rgba(30,20,12,0.34)' : '0 14px 34px rgba(30,20,12,0.20)',
      outline: selected ? '2px solid ' + f.accentText : 'none', outlineOffset: 4, transition: 'all var(--dur) var(--ease-out)', cursor: onClick ? 'pointer' : 'default' }}>
      {/* heat-seal top */}
      <div style={{ height: 48, flex: 'none', background: 'linear-gradient(#2c1d12,#1d130b)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 13, height: 1, background: 'rgba(246,239,227,0.12)' }} />
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 21, width: 76, height: 5, borderRadius: 3, background: 'rgba(246,239,227,0.15)' }} />
      </div>
      {/* body */}
      <div style={{ flex: 1, padding: '22px 24px 8px', textAlign: 'center', color: ink, display: 'flex', flexDirection: 'column' }}>
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none" style={{ margin: '0 auto', display: 'block' }}><path d="M20 3.5C15 9 15 15 20 19.5C25 15 25 9 20 3.5Z M20 36.5C15 31 15 25 20 20.5C25 25 25 31 20 36.5Z M3.5 20C9 15 15 15 19.5 20C15 25 9 25 3.5 20Z M36.5 20C31 15 25 15 20.5 20C25 25 31 25 36.5 20Z" fill={ink}/></svg>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 37, fontWeight: 400, letterSpacing: '0.16em', lineHeight: 1, marginTop: 9, paddingLeft: '0.16em' }}>AVANCE</div>
        <div style={{ width: 52, height: 1, background: ink, opacity: 0.4, margin: '12px auto' }} />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 500, letterSpacing: '0.03em', color: f.accentText, lineHeight: 1.05 }}>FUNCTIONAL {f.flavor.toUpperCase()}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.01em', color: ink, marginTop: 8, whiteSpace: 'nowrap' }}>PLANT PROTEIN + POSTBIOTICS</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.14em', color: f.accentText, marginTop: 8, whiteSpace: 'nowrap' }}>100% PLANT-BASED · VEGAN</div>
        {/* pillars */}
        <div style={{ display: 'flex', gap: 4, marginTop: 'auto', padding: '0 2px' }}>
          <PackPillar icon="gut" title="GUT HEALTH" sub="postbiotics" color={ink} />
          <div style={{ width: 1, background: ink, opacity: 0.2 }} />
          <PackPillar icon="leaf" title="PLANT PROTEIN" sub="12g / serving" color={ink} />
          <div style={{ width: 1, background: ink, opacity: 0.2 }} />
          <PackPillar icon="recovery" title="RECOVERY" sub="muscle & body" color={ink} />
        </div>
      </div>
      {/* colored base band */}
      <div style={{ flex: 'none', height: 78, background: f.accent, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', color: 'rgba(255,255,255,0.94)' }}>
        <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, lineHeight: 1 }}>13</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 7, letterSpacing: '0.08em', marginTop: 2 }}>SERVINGS</div></div>
        <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 8.5, letterSpacing: '0.04em', lineHeight: 1.5 }}>HOT DRINK POWDER<br/>DIETARY SUPPLEMENT</div>
        <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'var(--font-body)', fontSize: 8, opacity: 0.85 }}>NET WT.</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500 }}>400 g</div></div>
      </div>
    </div>
  );
  return (
    <div onClick={onClick} style={{ width: W * scale, height: H * scale, flex: 'none' }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>{pouch}</div>
    </div>
  );
}

Object.assign(window, { FLAVORS, Pouch, PackPillar });
