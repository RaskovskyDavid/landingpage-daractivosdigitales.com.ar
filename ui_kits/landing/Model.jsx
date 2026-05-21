// Model.jsx — Rent-to-Own model section
// Exports: DARModel

const DARModel = ({ onCTA }) => {
  const sectionStyle = {
    background: '#FFFFFF',
    padding: '96px 48px',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    maxWidth: '1200px', margin: '0 auto',
  };

  const headerStyle = { marginBottom: '56px' };

  const overlineStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#0099CC',
    display: 'flex', alignItems: 'center', gap: '10px',
    marginBottom: '14px',
  };

  const titleStyle = {
    fontSize: 'clamp(28px, 3vw, 44px)',
    fontWeight: 700, color: '#0A2540',
    lineHeight: 1.15, letterSpacing: '-0.02em',
    maxWidth: '600px', marginBottom: '16px',
  };

  const subtitleStyle = {
    fontSize: '17px', color: '#4A6280',
    lineHeight: 1.65, maxWidth: '540px',
  };

  const gridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px', marginBottom: '48px',
  };

  const steps = [
    {
      num: '01',
      title: 'Suscripción mensual',
      body: 'Un pago mensual predecible cubre el desarrollo, las actualizaciones y el soporte técnico continuo.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Mantenimiento incluido',
      body: 'Actualizaciones de seguridad, corrección de errores y mejoras técnicas sin costos adicionales.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Propiedad garantizada',
      body: 'Transferencia del código fuente garantizada por contrato. Usted es el dueño de su infraestructura.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
    },
  ];

  const cardStyle = {
    background: '#F5F8FA',
    border: '1px solid rgba(10,37,64,0.10)',
    borderRadius: '12px',
    padding: '28px',
    boxShadow: '0 2px 12px rgba(10,37,64,0.06)',
  };

  const numStyle = {
    fontSize: '11px', fontWeight: 700,
    letterSpacing: '0.08em', color: '#00AACF',
    marginBottom: '14px',
    display: 'flex', alignItems: 'center', gap: '8px',
  };

  const stepTitleStyle = {
    fontSize: '17px', fontWeight: 600,
    color: '#0A2540', marginBottom: '10px', lineHeight: 1.3,
  };

  const stepBodyStyle = {
    fontSize: '14px', color: '#4A6280', lineHeight: 1.65,
  };

  const highlightBoxStyle = {
    background: '#0A2540',
    borderRadius: '12px',
    padding: '36px 40px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: '32px',
    flexWrap: 'wrap',
  };

  const quoteStyle = {
    fontSize: 'clamp(20px, 2vw, 28px)',
    fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.3, letterSpacing: '-0.01em',
    maxWidth: '520px',
  };

  const quoteAccentStyle = { color: '#00D4FF' };

  const ctaStyle = {
    padding: '14px 32px', background: '#00D4FF', color: '#0A2540',
    borderRadius: '8px', fontSize: '15px', fontWeight: 600,
    letterSpacing: '0.03em', border: 'none', cursor: 'pointer',
    boxShadow: '0 0 24px rgba(0,212,255,0.25)',
    transition: 'all 200ms cubic-bezier(0.16,1,0.3,1)',
    whiteSpace: 'nowrap',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  return (
    <section style={sectionStyle} id="modelo-propiedad">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div style={overlineStyle}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '1px', flexShrink: 0 }}></span>
            Modelo de Propiedad
          </div>
          <h2 style={titleStyle}>Un modelo pensado para el empresario actual</h2>
          <p style={subtitleStyle}>Sin sorpresas. Sin letra chica. Con un contrato que garantiza que el software es suyo.</p>
        </div>

        <div style={gridStyle}>
          {steps.map((s, i) => (
            <div key={i} style={cardStyle}>
              <div style={numStyle}>
                {s.icon}
                <span>Paso {s.num}</span>
              </div>
              <div style={stepTitleStyle}>{s.title}</div>
              <div style={stepBodyStyle}>{s.body}</div>
            </div>
          ))}
        </div>

        <div style={highlightBoxStyle}>
          <div style={quoteStyle}>
            "Usted es el <span style={quoteAccentStyle}>dueño</span> de su infraestructura."
          </div>
          <button style={ctaStyle} onClick={onCTA}
            onMouseEnter={e => { e.currentTarget.style.background = '#7AEAFF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#00D4FF'; e.currentTarget.style.transform = ''; }}
          >
            Agendar charla técnica
          </button>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARModel });
