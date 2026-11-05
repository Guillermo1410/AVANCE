/* Product-first campaign hero, with a full-width ingredient strip. */
function Hero({ onShop }) {
  return (
    <section id="home" className="avance-hero">
      <SectionMedia slot="hero" hero />
      <div className="hero-layout">
        <div className="hero-product">
          <img src="./assets/hero-pouch-v6.png" alt="AVANCE Functional Cacao — 400 g pouch" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero-copy">
          <div id="hero-kicker">Science · Nature · Wellness</div>
          <h1>The warm cup<br/>that does <em>more.</em></h1>
          <p>A daily ritual of real cacao, complete plant protein and a postbiotic complex — for calm recovery, a settled gut, and a few warm minutes that belong to you.</p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" onClick={onShop}>Shop Functional Cacao</Button>
            <a href="#product">Explore the ingredients <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-highlights">
            {['100% Plant-based', 'No artificial sweeteners', '12 g plant protein'].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
