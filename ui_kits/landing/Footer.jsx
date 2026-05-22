// Footer.jsx — DAR | Activos Digitales Footer
// Exports: DARFooter

const DARFooter = ({ onCTA }) => {
  const footerStyle = {
    background: '#06192d',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '64px 0 32px',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    width: '100%',
  };

  const topStyle = {
    width: '100%',
  };

  // Brand column
  const logoRowStyle = {
    display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px',
  };
  const wordmarkStyle = {
    fontSize: '22px', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
  };
  const sepStyle = {
    width: '2px', height: '24px', background: '#00D4FF', borderRadius: '1px',
  };
  const subStyle = {
    display: 'flex', flexDirection: 'column',
  };
  const subTextStyle = {
    fontSize: '9px', fontWeight: 500, color: '#6B8AAE',
    letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.4,
  };
  const taglineStyle = {
    fontSize: '14px', color: '#8EA8C4', lineHeight: 1.6, maxWidth: '280px',
    marginBottom: '24px',
  };
  const linkedinStyle = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: 500, color: '#8EA8C4',
    textDecoration: 'none', cursor: 'pointer',
    transition: 'color 200ms',
    background: 'none', border: 'none', padding: 0,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  // Link columns
  const colTitleStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#6B8AAE', marginBottom: '16px',
  };
  const linkStyle = {
    display: 'block',
    fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none', cursor: 'pointer',
    marginBottom: '10px',
    transition: 'color 200ms',
    background: 'none', border: 'none', padding: 0,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    textAlign: 'left',
  };

  const dividerStyle = {
    height: '1px', background: 'rgba(255,255,255,0.08)',
    marginBottom: '24px',
  };

  const bottomStyle = {
    width: '100%',
  };

  const legalStyle = {
    fontSize: '12px', color: 'rgba(255,255,255,0.3)',
  };

  const signatureStyle = {
    fontSize: '13px', fontWeight: 600,
    color: '#00D4FF', letterSpacing: '0.03em',
  };

  return (
    <footer style={footerStyle}>
      <div className="dar-container" style={containerStyle}>
        <div className="dar-footer-top" style={topStyle}>
          {/* Brand */}
          <div>
            <div style={logoRowStyle}>
              <span style={wordmarkStyle}>DAR</span>
              <div style={sepStyle}></div>
              <div style={subStyle}>
                <span style={subTextStyle}>Activos</span>
                <span style={subTextStyle}>Digitales</span>
              </div>
            </div>
            <p style={taglineStyle}>Ingeniería de software e IA para empresas que no pueden permitirse el fracaso tecnológico.</p>
            <button style={linkedinStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#8EA8C4'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </button>
          </div>

          {/* Services links */}
          <div>
            <div style={colTitleStyle}>Servicios</div>
            {['Memoria Institucional (IA)', 'Sistemas Críticos', 'Consultoría de Eficiencia'].map(l => (
              <button key={l} style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                onClick={onCTA}
              >{l}</button>
            ))}
          </div>

          {/* Legal / Contact */}
          <div>
            <div style={colTitleStyle}>Legal</div>
            {['Política de Privacidad', 'Términos de Servicio', 'Contrato Tipo'].map(l => (
              <button key={l} style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                onClick={onCTA}
              >{l}</button>
            ))}
          </div>
        </div>

        <div style={dividerStyle}></div>

        <div className="dar-footer-bottom" style={bottomStyle}>
          <span style={legalStyle}>© 2025 DAR | Activos Digitales · Tucumán, Argentina</span>
          <span style={signatureStyle}>DAR: Ingeniería que no falla.</span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { DARFooter });
