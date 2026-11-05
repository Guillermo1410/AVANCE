/* Core narrative: Pillars · Story (ingredient science) · Ritual */

function Pillars() {
  const mobile = useIsMobile();
  const items = [
    { kind: 'cacao', name: 'Natural Cacao', body: 'Natural, non-alkalized cacao — polyphenols, a gentle lift, and a grounding ritual you look forward to.' },
    { kind: 'protein', name: 'Plant Protein', body: 'A complete pea-and-rice protein blend with all nine essential amino acids to support daily recovery.' },
    { kind: 'postbiotic', name: 'Postbiotics', body: 'Fermentation-derived postbiotics that nourish the gut lining — calm digestion you can actually feel.' },
  ];
  return (
    <section id="composition" className="compact-section" style={{ background: 'var(--paper)', padding: mobile ? '72px 26px' : '64px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead kicker="Three functional pillars" title="Formulated, not faked" sub="Every scoop earns its place. No fillers, no fairy dust — just three ingredients doing real, measurable work." />
        <div className="pillars-compact">
          {items.map(it => <div key={it.kind} className="pillar-compact">
            <div className="pillar-icon"><PillarBadge kind={it.kind} size={44} /></div>
            <h3>{it.name}</h3><p>{it.body}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}

/* Cinematic dark storytelling — postbiotics / gut / recovery / ritual */
function Story() {
  const mobile = useIsMobile();
  const beats = [
    { icon: 'drop', k: 'Postbiotics', t: 'Where gut health begins', b: 'Postbiotics are the beneficial compounds left after fermentation — the part your gut actually uses. Ours support the intestinal lining and a calm, balanced microbiome, without the guesswork of live probiotics.' },
    { icon: 'spark', k: 'Recovery', t: 'Protein that works overnight', b: 'A complete plant protein delivers the amino acids muscles need to repair. Sipped warm in the evening, it turns winding down into recovery.' },
    { icon: 'clock', k: 'Ritual', t: 'A warm pause, on purpose', b: 'Cold-weather wellness is about slowing down. One hot cup becomes a daily anchor — the kind of ritual that quietly changes how you feel.' },
  ];
  return (
    <section id="story" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-cocoa)', color: 'var(--cream)', padding: mobile ? '76px 26px' : '66px 56px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--glow-top)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.92fr 1.08fr', gap: mobile ? 48 : 72, alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(246,239,227,0.12)', order: mobile ? 2 : 1, maxHeight: mobile ? 'none' : 420 }}>
            <img src={AVANCE_MEDIA.story.src} alt={AVANCE_MEDIA.story.alt} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 55%', filter: 'brightness(1.06) saturate(1.03)' }} />
          </div>
          <div style={{ order: mobile ? 1 : 2 }}>
            <Eyebrow color="var(--sage)">The science, made warm</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: mobile ? 34 : 'clamp(30px, 3.4vw, 38px)', lineHeight: 1.08, color: 'var(--paper)', margin: '14px 0 0' }}>Biotech credibility,<br/>wellness warmth.</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: 'var(--on-dark-2)', margin: '18px 0 0', maxWidth: 480 }}>
              We took what longevity science knows about the gut and built it into something you'd actually want to drink.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: mobile ? 36 : 40, marginTop: mobile ? 56 : 56 }}>
          {beats.map(be => (
            <div key={be.k}>
              <span style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage)' }}>{Icon[be.icon]({ s: 20, c: 'var(--sage)' })}</span>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sage)', margin: '16px 0 6px' }}>{be.k}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, color: 'var(--paper)', margin: '0 0 8px' }}>{be.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--on-dark-2)', margin: 0 }}>{be.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return <section id="ritual" className="compact-section ritual-section">
    <div style={{maxWidth: 1020, margin: '0 auto'}}>
      <SectionHead kicker="The ritual" title="Three calm steps" />
      <ol className="ritual-steps">
        {[['Scoop', 'One 30 g scoop into your favorite mug.'], ['Pour', 'Add 200 ml hot water or warm plant milk.'], ['Stir & savor', 'Stir for ten seconds. Breathe. Take your pause.']].map(([title, body], i) => <li key={title}>
          <span className="ritual-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <div><h3>{title}</h3><p>{body}</p></div>
        </li>)}
      </ol>
    </div>
  </section>;
}

Object.assign(window, { Pillars, Story, HowItWorks });
