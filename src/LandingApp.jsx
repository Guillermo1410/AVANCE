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

function LandingApp() {
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const shop = () => {
    const buy = document.getElementById("buy");
    if (!buy) return;
    const header = document.querySelector("header");
    const top = buy.getBoundingClientRect().top + window.scrollY - (header ? header.getBoundingClientRect().height : 100) - 12;
    window.scrollTo({top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    buy.querySelector("h2")?.focus({preventScroll: true});
  };
  React.useEffect(() => {
    const secs = Array.from(document.querySelectorAll('section')).slice(1); // skip hero
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    secs.forEach(s => { s.classList.add('reveal'); io.observe(s); });
    return () => io.disconnect();
  }, []);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.qty * 48, 0);
  const add = (qty) => { setCart([...cart, { qty }]); setOpen(true); };
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav cartCount={count} onCart={() => setOpen(true)} onMenuChange={setMenuOpen} />
      <Hero onShop={shop} />
      <Pillars />
      <Buy onAdd={add} />
      <SubscriptionFlow />
      <Story />
      <ScienceDeep />
      <TrustStrip />
      <Comparison />
      <HowItWorks />
      <Founder />
      <NutritionFacts />
      <Sustainability />
      <FAQ />
      <Reviews />
      <Subscribe />
      <Footer />
      {!open && !menuOpen && <a className="floating-shop" href="#buy" onClick={e => {e.preventDefault(); shop();}} aria-label="Shop now — go to Functional Cacao purchase options">Shop now <span aria-hidden="true">↗</span></a>}
      <CartDrawer open={open} items={cart} total={total} onClose={() => setOpen(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
