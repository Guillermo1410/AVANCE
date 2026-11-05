/* App shell — composes the page + a working cart drawer */
function CartDrawer({ open, items, onClose, total }) {
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(30,20,12,0.4)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity var(--dur) var(--ease-out)', zIndex: 90 }} />
      <aside style={{ position: 'fixed', top: 0, right: 0, height: '100%', width: 380, maxWidth: '90vw', background: 'var(--paper)', boxShadow: 'var(--shadow-xl)', zIndex: 100, transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform var(--dur-slow) var(--ease-out)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px 26px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, color: 'var(--espresso)' }}>Your cart</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--mocha)' }}>×</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '20px 26px' }}>
          {items.length === 0 ? <p style={{ fontFamily: 'var(--font-body)', color: 'var(--mocha)', fontSize: 15 }}>Your cart is empty.</p> :
            items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', overflow: 'hidden' }}>
                  <img src="./assets/r-pouch-front.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--espresso)' }}>Functional Cacao</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--mocha)' }}>Qty {it.qty} · ${it.qty * 52}</div>
                </div>
              </div>
            ))}
        </div>
        <div style={{ padding: '20px 26px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontFamily: 'var(--font-body)' }}>
            <span style={{ color: 'var(--coffee)' }}>Subtotal</span><span style={{ fontWeight: 700, color: 'var(--espresso)' }}>${total}</span>
          </div>
          <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }}>Checkout</Button>
        </div>
      </aside>
    </>
  );
}

const AVANCE_PAGES = {
  home: {title: 'Home'},
  product: {title: 'The product', sub: 'Ingredients, preparation and nutrition.'},
  shop: {title: 'Shop AVANCE', sub: 'Choose your pouch and your routine.'},
  science: {title: 'The science', sub: 'A closer look at the formulation and the alternatives.'},
  about: {title: 'Meet AVANCE', sub: 'Our story, our approach and our ingredients.'},
  faq: {title: 'Frequently asked questions', sub: 'Practical answers about your daily ritual.'}
};
function pageFromHash() {
  const key = window.location.hash.slice(1);
  const aliases = {buy:'shop', composition:'product', nutrition:'product', comparison:'science', founder:'about', sourcing:'about', story:'about', reviews:'about'};
  return AVANCE_PAGES[key] ? key : (aliases[key] || 'home');
}
function LandingApp() {
  const [page, setPage] = React.useState(pageFromHash);
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const sync = () => {
      document.documentElement.style.setProperty('--viewport-width', document.documentElement.clientWidth + 'px');
      const header = document.querySelector('header');
      if (header) document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
    };
    sync();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    const header = document.querySelector('header');
    if (header && observer) observer.observe(header);
    window.addEventListener('resize', sync);
    document.fonts?.ready.then(sync);
    return () => { observer?.disconnect(); window.removeEventListener('resize', sync); };
  }, []);

  const navigate = (next) => {
    if (!AVANCE_PAGES[next]) return;
    setPage(next);
    if (window.location.hash !== '#' + next) window.location.hash = next;
    else window.scrollTo({top: 0, behavior: 'auto'});
  };
  const shop = () => navigate('shop');
  React.useEffect(() => {
    const change = () => setPage(pageFromHash());
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  React.useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'});
    document.getElementById('page-content')?.focus({preventScroll: true});
  }, [page]);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.qty * 48, 0);
  const add = (qty) => { setCart([...cart, { qty }]); setOpen(true); };
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav cartCount={count} onCart={() => setOpen(true)} onMenuChange={setMenuOpen} currentPage={page} onNavigate={navigate} />
      <main id="page-content" tabIndex={-1} className={page === 'home' ? 'page-home' : 'category-page'}>
        {page !== 'home' && <div className="category-title"><h1>{AVANCE_PAGES[page].title}</h1><p>{AVANCE_PAGES[page].sub}</p></div>}
        {page === 'home' && <>
          <Hero onShop={shop} />
          <Pillars />
          <Buy onAdd={add} />
          <HowItWorks />
          <details className="home-disclosure"><summary>Ingredients &amp; nutrition facts</summary><NutritionFacts /></details>
          <div className="home-next"><p>Want to know more about your cup?</p><a href="#product">Explore the product ↗</a><a href="#science">Read the science ↗</a></div>
        </>}
        {page === 'product' && <><Pillars /><NutritionFacts /><HowItWorks /></>}
        {page === 'shop' && <><Buy onAdd={add} /><TrustStrip /><SubscriptionFlow /></>}
        {page === 'science' && <><ScienceDeep /><Comparison /></>}
        {page === 'about' && <><Story /><Founder /><Sustainability /><Reviews /></>}
        {page === 'faq' && <FAQ />}
      </main>
      <Subscribe />
      <Footer />
      {!open && !menuOpen && <a className="floating-shop" href="#shop" onClick={e => {e.preventDefault(); shop();}} aria-label="Shop now — go to Functional Cacao purchase options">Shop now <span aria-hidden="true">↗</span></a>}
      <CartDrawer open={open} items={cart} total={total} onClose={() => setOpen(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
