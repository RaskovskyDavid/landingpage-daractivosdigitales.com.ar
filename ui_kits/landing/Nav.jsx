// Nav.jsx — DAR | Activos Digitales Navigation
// Requires React + Babel. Exports to window.DARNav

const DARNav = ({ onCTA }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const logoStyle = {
    display: 'flex', alignItems: 'center', gap: '12px',
    textDecoration: 'none', cursor: 'pointer',
  };

  const wordmarkStyle = {
    fontSize: '24px', fontWeight: 700, color: '#FFFFFF',
    letterSpacing: '-0.03em', lineHeight: 1,
  };

  const sepStyle = {
    width: '2px', height: '28px',
    background: '#00D4FF', borderRadius: '1px', flexShrink: 0,
  };

  const subStyle = {
    display: 'flex', flexDirection: 'column',
  };

  const subTextStyle = {
    fontSize: '9px', fontWeight: 500, color: '#8EA8C4',
    letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.4,
  };

  const linkStyle = {
    fontSize: '14px', fontWeight: 500,
    color: 'rgba(255,255,255,0.65)',
    textDecoration: 'none', cursor: 'pointer',
    transition: 'color 200ms',
    background: 'none', border: 'none', padding: 0,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const ctaStyle = {
    padding: '9px 20px',
    background: '#00D4FF', color: '#0A2540',
    borderRadius: '8px', fontSize: '13px', fontWeight: 600,
    letterSpacing: '0.03em', border: 'none', cursor: 'pointer',
    transition: 'background 200ms, transform 200ms',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`dar-nav ${scrolled ? 'dar-nav-scrolled' : ''}`}>
        <div style={logoStyle} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>
          <span style={wordmarkStyle}>DAR</span>
          <div style={sepStyle}></div>
          <div style={subStyle}>
            <span style={subTextStyle}>Activos</span>
            <span style={subTextStyle}>Digitales</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="dar-nav-links">
          {[['Servicios', 'servicios'], ['Modelo de Propiedad', 'modelo'], ['Trayectoria', 'about']].map(([label, id]) => (
            <button key={id} style={linkStyle} onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >
              {label}
            </button>
          ))}
          <button style={ctaStyle} onClick={onCTA}
            onMouseEnter={e => { e.target.style.background = '#7AEAFF'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = '#00D4FF'; e.target.style.transform = ''; }}
          >
            Agendar charla técnica
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button className="dar-nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`dar-nav-drawer ${menuOpen ? 'open' : ''}`}>
        {[['Servicios', 'servicios'], ['Modelo de Propiedad', 'modelo'], ['Trayectoria', 'about']].map(([label, id]) => (
          <button key={id} className="dar-nav-drawer-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
        <button className="dar-nav-drawer-cta" onClick={() => { setMenuOpen(false); onCTA(); }}>
          Agendar charla técnica
        </button>
      </div>
    </>
  );
};

Object.assign(window, { DARNav });
