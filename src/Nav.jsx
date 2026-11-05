/* Nav bar with cart + mobile menu */
function AnnouncementBar() {
  const msgs = ['Free shipping on subscriptions · 30-day money-back guarantee', '100% plant-based · Third-party lab tested · Made in the USA', 'Subscribe & save 12% on every pouch — cancel anytime'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setI(p => (p + 1) % msgs.length), 4200); return () => clearInterval(t); }, []);
  return (
    <div style={{ background: 'var(--forest)', color: 'var(--cream)', textAlign: 'center', padding: '9px 16px', overflow: 'hidden' }}>
      <span key={i} style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(246,239,227,0.92)', animation: 'avFadeUp .5s var(--ease-out) both' }}>{msgs[i]}</span>
    </div>
  );
}

function Nav({ cartCount, onCart }) {
  const mobile = useIsMobile(860);
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [['Science','science'], ['Reviews','reviews'], ['Sourcing','sourcing'], ['FAQ','faq']];
  const go = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' }); setMenu(false); };
  const scrollBuy = () => { const b = document.getElementById('buy'); if (b) window.scrollTo({ top: b.offsetTop - 70, behavior: 'smooth' }); setMenu(false); };
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <AnnouncementBar />
      <div style={{ transition: 'all var(--dur) var(--ease-out)',
        background: scrolled || menu ? 'rgba(251,247,239,0.9)' : 'transparent', backdropFilter: scrolled || menu ? 'blur(14px)' : 'none',
        borderBottom: scrolled || menu ? '1px solid var(--border)' : '1px solid transparent' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: mobile ? '15px 22px' : '18px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo id="nav-logo" color={scrolled || menu || mobile ? 'var(--espresso)' : 'var(--paper)'} size={mobile ? 26 : 31} layout="inline" />
        {!mobile && <nav style={{ display: 'flex', gap: 34 }}>
          {links.map(([l, id]) => <a key={l} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id); }} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: scrolled ? 'var(--espresso)' : 'var(--paper)', opacity: 0.9 }}>{l}</a>)}
        </nav>}
        <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 12 : 16 }}>
          {!mobile && <Button variant="dark" size="sm" onClick={scrollBuy}>Shop</Button>}
          <button onClick={onCart} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: scrolled || menu || mobile ? 'var(--espresso)' : 'var(--paper)', display: 'flex' }}>
            <Icon.cart s={22} />
            {cartCount > 0 && <span style={{ position: 'absolute', top: -7, right: -8, background: 'var(--avance-green)', color: 'var(--paper)', fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, width: 17, height: 17, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
          </button>
          {mobile && <button onClick={() => setMenu(!menu)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled || menu ? 'var(--espresso)' : 'var(--paper)', display: 'flex' }}>{menu ? <Icon.x s={24} /> : <Icon.menu s={24} />}</button>}
        </div>
      </div>
      {mobile && menu && (
        <nav style={{ padding: '8px 22px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([l, id]) => <a key={l} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id); }} style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--espresso)', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>{l}</a>)}
          <Button variant="primary" size="md" style={{ justifyContent: 'center', marginTop: 14 }} onClick={scrollBuy}>Shop Functional Cacao</Button>
        </nav>
      )}
      </div>
    </header>
  );
}
Object.assign(window, { Nav });
