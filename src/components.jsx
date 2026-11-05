/* Replace these image paths when the final photography is ready. */
const AVANCE_MEDIA = {
  hero: {src: './assets/r-cup.jpg', position: '55% 66%', alt: 'Cacao powder and ingredients arranged on a warm wooden table'},
  'Three functional pillars': {src: './assets/r-cup.jpg', position: '70% 55%', alt: 'Cacao and plant ingredients'},
  'The science, made simple': {src: './assets/r-cup.jpg', position: '85% 45%', alt: 'Plant ingredients in bowls'},
  'Why AVANCE': {src: './assets/r-cup.jpg', position: '50% 70%', alt: 'A close detail of cacao powder'},
  'The ritual': {src: './assets/r-cup.jpg', position: '20% 30%', alt: 'A warm cup of cacao'},
  'Subscribe & save': {src: './assets/r-story.png', position: '50% 50%', alt: 'AVANCE product scene'},
  'Sourcing & sustainability': {src: './assets/r-cup.jpg', position: '75% 70%', alt: 'Ingredients and cacao on a wooden table'},
  'Questions': {src: './assets/r-cup.jpg', position: '20% 30%', alt: 'The daily cacao ritual'},
  'Pre-launch': {src: './assets/r-cup.jpg', position: '20% 30%', alt: 'A warm cacao cup'},
  nutrition: {src: './assets/r-cup.jpg', position: '65% 65%', alt: 'Ingredients for functional cacao'},
  newsletter: {src: './assets/r-cup.jpg', position: '20% 30%', alt: 'A warm cacao ritual'},
  story: {src: './assets/r-cup.jpg', alt: 'Warm functional cacao, prepared'},
  founder: {src: './assets/r-story.png', alt: 'AVANCE Functional Cacao product scene'}
};

function SectionMedia({slot, hero = false}) {
  const media = AVANCE_MEDIA[slot];
  if (!media || !media.src) return null;
  return <figure className={'section-media' + (hero ? ' section-media--hero' : '')} data-media-slot={slot}>
    <img src={media.src} alt={media.alt || ''} loading={hero ? 'eager' : 'lazy'} decoding="async" style={{objectPosition: media.position || 'center'}} />
  </figure>;
}

/* AVANCE Landing UI Kit — shared primitives. Attached to window for cross-file use. */

// ---- "Soft Plus" — the official AVANCE mark: four soft petals in a cross (per packaging) ----
const AV_PETALS = "M20 3.5C15 9 15 15 20 19.5C25 15 25 9 20 3.5Z M20 36.5C15 31 15 25 20 20.5C25 25 25 31 20 36.5Z M3.5 20C9 15 15 15 19.5 20C15 25 9 25 3.5 20Z M36.5 20C31 15 25 15 20.5 20C25 25 31 25 36.5 20Z";
function PlusMark({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ display: 'block' }}>
      <path d={AV_PETALS} fill={color} />
    </svg>
  );
}
// Soft Plus inside a soft squircle (app icon / avatar / chips)
function PlusBadge({ size = 56, bg = 'var(--avance-green)', color = 'var(--paper)', radius = 0.32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * radius, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PlusMark size={size * 0.5} color={color} />
    </div>
  );
}
// Back-compat alias (older code referenced LogoMark as the brand glyph)
const LogoMark = PlusMark;

// ---- PRIMARY logo — wordmark-first: + / AVANCE / thin rule ----
function Logo({ id, color = 'var(--espresso)', size = 28, layout = 'stacked', sub = false }) {
  if (layout === 'inline') {
    return (
      <div id={id} style={{ display: 'flex', alignItems: 'center', gap: size * 0.42, width: 'fit-content' }}>
        <PlusMark size={size * 0.92} color={color} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size, letterSpacing: '0.2em', color, lineHeight: 1, paddingLeft: '0.1em' }}>AVANCE</span>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.2 }}>
      <PlusMark size={size * 0.92} color={color} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size, letterSpacing: '0.26em', color, lineHeight: 1, paddingLeft: '0.26em', marginTop: size * 0.04 }}>AVANCE</span>
      <span style={{ width: size * 1.5, height: 1, background: color, opacity: 0.5, marginTop: size * 0.04 }} />
      {sub && <span style={{ fontFamily: 'var(--font-body)', fontSize: size * 0.28, fontWeight: 500, letterSpacing: '0.34em', color, opacity: 0.7, marginTop: size * 0.1, paddingLeft: '0.34em' }}>FUNCTIONAL NUTRITION</span>}
    </div>
  );
}

// ---- SECONDARY mark — the circular AVANCE seal (approved reference) ----
function Seal({ size = 120, color = 'currentColor', solidBg }) {
  const id = React.useMemo(() => 'sl' + Math.random().toString(36).slice(2, 7), []);
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ display: 'block' }}>
      {solidBg && <circle cx="100" cy="100" r="99" fill={solidBg} />}
      <defs>
        <path id={id + 'b'} d="M20,100 A80,80 0 0 0 180,100" />
      </defs>
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="1.4" />
      <circle cx="100" cy="100" r="87" stroke={color} strokeWidth="1" opacity="0.7" />
      <g transform="translate(81 48)"><path d={AV_PETALS} fill={color} /></g>
      <text x="100" y="116" textAnchor="middle" fontFamily="var(--font-display)" fontSize="25" fontWeight="400" letterSpacing="3" fill={color}>AVANCE</text>
      <line x1="86" y1="129" x2="114" y2="129" stroke={color} strokeWidth="1.2" />
      <text fontFamily="var(--font-body)" fontSize="8.5" fontWeight="500" letterSpacing="2.2" fill={color}>
        <textPath href={'#' + id + 'b'} startOffset="50%" textAnchor="middle">SCIENCE · NATURE · WELLNESS</textPath>
      </text>
    </svg>
  );
}

// ---- Icons (single-weight, matching the packaging line-icon language) ----
const Icon = {
  cart: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/></svg>,
  arrow: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>,
  plus: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  minus: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/></svg>,
  star: (p) => <svg width={p.s||16} height={p.s||16} viewBox="0 0 24 24" fill={p.c||'currentColor'}><path d="M12 2l2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.3l1.4-6.7-5-4.6 6.8-.7z"/></svg>,
  chevron: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
  leaf: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20C6 20 3 16 3 11c5 0 9 1 11 4 1 2 0 5-3 5z"/><path d="M3 11C9 5 16 4 21 4c0 8-5 13-10 13"/></svg>,
  // gut health — rounded glyph with wave (front-of-pack)
  gut: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v4a4 4 0 0 0 8 0V3"/><path d="M16 11a4 4 0 0 1-8 0"/><path d="M6.5 9.5c0 5 2 6.5 5.5 6.5s5.5-1.5 5.5-6.5"/><path d="M9 19.5h6"/></svg>,
  // postbiotics — dotted culture circle (back-of-pack)
  postbiotic: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="8" r="1.1" fill={p.c||'currentColor'}/><circle cx="8.5" cy="11" r="1.1" fill={p.c||'currentColor'}/><circle cx="15.5" cy="11" r="1.1" fill={p.c||'currentColor'}/><circle cx="10" cy="14.5" r="1.1" fill={p.c||'currentColor'}/><circle cx="14" cy="14.5" r="1.1" fill={p.c||'currentColor'}/><circle cx="12" cy="11.5" r="1.1" fill={p.c||'currentColor'}/></svg>,
  // recovery — circular refresh arrows
  recovery: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8a8 8 0 0 0-14-2.5L4 8"/><path d="M4 4v4h4"/><path d="M4 16a8 8 0 0 0 14 2.5L20 16"/><path d="M20 20v-4h-4"/></svg>,
  // ritual — steaming cup
  ritual: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 11h12v3a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"/><path d="M17 12h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c-.5 1 .5 2 0 3M12 2.5c-.5 1 .5 2 0 3"/></svg>,
  drop: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>,
  spark: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>,
  clock: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  truck: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>,
  shield: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>,
  flask: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3"/><path d="M8 15h8"/></svg>,
  x: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  menu: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.8" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
};

// ---- Trust badge (outline circle + glyph + label) ----
function TrustBadge({ icon, label, color = 'var(--espresso)', mono = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 46, height: 46, borderRadius: '50%', border: '1.4px solid ' + color, display: 'flex', alignItems: 'center', justifyContent: 'center', color, opacity: 0.92 }}>{Icon[icon]({ s: 22, c: color })}</span>
      <span style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color, textAlign: 'center', lineHeight: 1.3, maxWidth: 76 }}>{label}</span>
    </div>
  );
}

// ---- Pillar badge ----
function PillarBadge({ kind, size = 76 }) {
  const isGreen = kind === 'protein';
  const bg = isGreen ? 'var(--avance-green)' : 'var(--espresso)';
  const ink = 'var(--cream)';
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {kind === 'cacao' && <svg width={size*0.45} height={size*0.45} viewBox="0 0 34 34" fill="none" stroke={ink} strokeWidth="1.6"><ellipse cx="17" cy="17" rx="8" ry="12" transform="rotate(28 17 17)"/><path d="M13 9 L21 25" strokeWidth="1.4"/></svg>}
      {kind === 'protein' && <svg width={size*0.45} height={size*0.45} viewBox="0 0 34 34" fill={ink}><path d="M17 5C9 9 8 20 9 27c7 1 16-2 19-10C25 9 17 5 17 5Z"/></svg>}
      {kind === 'postbiotic' && <svg width={size*0.45} height={size*0.45} viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="11" stroke={ink} strokeWidth="1.4"/><circle cx="17" cy="12" r="1.6" fill={ink}/><circle cx="12" cy="18" r="1.6" fill={ink}/><circle cx="22" cy="18" r="1.6" fill={ink}/><circle cx="17" cy="20" r="1.6" fill={ink}/></svg>}
    </div>
  );
}

// ---- Button ----
function Button({ children, variant = 'primary', size = 'md', onClick, style }) {
  const base = {
    fontFamily: 'var(--font-body)', fontWeight: 600, border: 'none', cursor: 'pointer',
    borderRadius: 'var(--radius-pill)', transition: 'all var(--dur) var(--ease-out)',
    display: 'inline-flex', alignItems: 'center', gap: 8, letterSpacing: '0.01em', whiteSpace: 'nowrap',
    padding: size === 'lg' ? '16px 32px' : size === 'sm' ? '9px 18px' : '13px 26px',
    fontSize: size === 'lg' ? 16 : size === 'sm' ? 13 : 14,
  };
  const variants = {
    primary: { background: 'var(--avance-green)', color: 'var(--paper)' },
    dark: { background: 'var(--espresso)', color: 'var(--cream)' },
    ghost: { background: 'transparent', color: 'var(--espresso)', border: '1.5px solid var(--border)' },
    light: { background: 'var(--cream)', color: 'var(--espresso)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? (variant === 'primary' ? { background: 'var(--green-mid)', transform: 'translateY(-2px)', boxShadow: '0 10px 28px rgba(76,107,50,0.34), 0 0 0 6px rgba(76,107,50,0.10)' } : variant === 'dark' ? { background: 'var(--cocoa)', transform: 'translateY(-2px)', boxShadow: 'var(--shadow-md)' } : variant === 'ghost' ? { borderColor: 'var(--coffee)', background: 'var(--cream)' } : { transform: 'translateY(-2px)', boxShadow: 'var(--shadow-md)' }) : {};
  return <button style={{ ...base, ...variants[variant], ...hoverStyle, ...style }} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</button>;
}

function Chip({ children, active }) {
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 'var(--radius-pill)', padding: '9px 18px', border: '1.5px solid var(--border)', color: 'var(--espresso)', background: active ? 'var(--sage-tint)' : 'transparent', whiteSpace: 'nowrap' }}>{children}</span>;
}

function Eyebrow({ children, color = 'var(--avance-green)' }) {
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color }}>{children}</span>;
}

// ---- responsive hook ----
function useIsMobile(bp = 760) {
  const [m, setM] = React.useState(typeof window !== 'undefined' && window.innerWidth < bp);
  React.useEffect(() => {
    const fn = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', fn); return () => window.removeEventListener('resize', fn);
  }, [bp]);
  return m;
}

// ---- star rating ----
function Stars({ s = 5, size = 15, color = 'var(--avance-green)' }) {
  return <span style={{ display: 'inline-flex', gap: 3 }}>{[1,2,3,4,5].map(i => <Icon.star key={i} s={size} c={i <= s ? color : 'var(--latte)'} />)}</span>;
}

// ---- editorial section header ----
function SectionHead({ kicker, title, sub, align = 'center', dark = false, maxW = 640 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? maxW : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      <SectionMedia slot={kicker} />
      <Eyebrow color={dark ? 'var(--sage)' : 'var(--avance-green)'}>{kicker}</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 4.4vw, 46px)', lineHeight: 1.06, letterSpacing: '-0.015em', color: dark ? 'var(--paper)' : 'var(--espresso)', margin: '16px 0 0' }}>{title}</h2>
      {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: dark ? 'var(--on-dark-2)' : 'var(--coffee)', margin: '18px auto 0', maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}

function Divider({ color = 'var(--border)', w = 56 }) {
  return <div style={{ width: w, height: 1, background: color }} />;
}

// ---- accordion (FAQ) ----
function Accordion({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={onToggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '24px 4px', textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, color: 'var(--espresso)' }}>{q}</span>
        <span style={{ flex: 'none', transition: 'transform var(--dur) var(--ease-out)', transform: open ? 'rotate(180deg)' : 'none', color: 'var(--avance-green)', display: 'flex' }}><Icon.chevron /></span>
      </button>
      <div style={{ maxHeight: open ? 240 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-out)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--coffee)', margin: '0 4px 26px', maxWidth: 640 }}>{a}</p>
      </div>
    </div>
  );
}

Object.assign(window, { LogoMark, PlusMark, PlusBadge, Logo, Seal, TrustBadge, Icon, PillarBadge, Button, Chip, Eyebrow, useIsMobile, Stars, SectionHead, Divider, Accordion });
