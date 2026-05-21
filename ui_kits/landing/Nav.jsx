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

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    height: '72px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 48px',
    background: scrolled ? 'rgba(10,37,64,0.95)' : 'rgba(10,37,64,0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    transition: 'background 300ms ease',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

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

  const linksStyle = {
    display: 'flex', alignItems: 'center', gap: '32px',
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
    <nav style={navStyle}>
      <div style={logoStyle} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span style={wordmarkStyle}>DAR</span>
        <div style={sepStyle}></div>
        <div style={subStyle}>
          <span style={subTextStyle}>Activos</span>
          <span style={subTextStyle}>Digitales</span>
        </div>
      </div>

      <div style={linksStyle}>
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
    </nav>
  );
};

Object.assign(window, { DARNav });
