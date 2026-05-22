// Services.jsx — Three-column service cards
// Exports: DARServices

const DARServices = () => {
  const sectionStyle = {
    background: '#0A2540',
    padding: '96px 0',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    width: '100%',
  };

  const headerStyle = {
    marginBottom: '56px',
  };

  const overlineStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#00D4FF',
    display: 'flex', alignItems: 'center', gap: '10px',
    marginBottom: '14px',
  };

  const titleStyle = {
    fontSize: 'clamp(28px, 3vw, 44px)',
    fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.15, letterSpacing: '-0.02em',
    maxWidth: '560px',
  };

  const gridStyle = {
    width: '100%',
  };

  const services = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
          <path d="M12 8v4l3 3"/>
          <path d="M3.05 11a9 9 0 0 1 17.9 0"/>
        </svg>
      ),
      title: 'Arquitectura de Memoria Institucional',
      tag: 'IA · RAG',
      body: 'Implementación de asistentes inteligentes (RAG) para que sus documentos, contratos y datos hablen por usted. Convierta su información acumulada en ventaja competitiva.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
          <path d="M7 8h.01M11 8h.01M15 8h.01"/>
        </svg>
      ),
      title: 'Desarrollo de Sistemas Críticos',
      tag: '.NET · Azure',
      body: 'Software robusto en .NET y Azure para procesos industriales, bancarios y de seguros. Arquitectura sólida para operaciones donde el fallo no es una opción.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
      title: 'Consultoría de Eficiencia',
      tag: 'Diagnóstico · Automatización',
      body: 'Diagnóstico de "costos ocultos" y automatización de procesos manuales. Identificamos dónde su empresa pierde tiempo y dinero, y lo eliminamos.',
    },
  ];

  const cardStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '28px',
    transition: 'border-color 250ms, transform 250ms cubic-bezier(0.16,1,0.3,1)',
    cursor: 'default',
  };

  const iconWrapStyle = {
    width: '44px', height: '44px',
    background: 'rgba(0,212,255,0.10)',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '18px',
  };

  const tagStyle = {
    display: 'inline-block',
    fontSize: '10px', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#00D4FF',
    background: 'rgba(0,212,255,0.10)',
    border: '1px solid rgba(0,212,255,0.20)',
    borderRadius: '24px',
    padding: '3px 10px',
    marginBottom: '12px',
  };

  const cardTitleStyle = {
    fontSize: '17px', fontWeight: 600,
    color: '#FFFFFF', lineHeight: 1.3,
    marginBottom: '12px',
  };

  const cardBodyStyle = {
    fontSize: '14px', color: '#8EA8C4',
    lineHeight: 1.65,
  };

  return (
    <section style={sectionStyle} id="servicios">
      <div className="dar-container" style={containerStyle}>
        <div style={headerStyle}>
          <div style={overlineStyle}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '1px', flexShrink: 0 }}></span>
            Servicios
          </div>
          <h2 style={titleStyle}>Ingeniería que trabaja para usted</h2>
        </div>
        <div className="dar-services-grid" style={gridStyle}>
          {services.map((s, i) => (
            <div key={i} className="dar-service-card">
              <div style={iconWrapStyle}>{s.icon}</div>
              <div style={tagStyle}>{s.tag}</div>
              <div style={cardTitleStyle}>{s.title}</div>
              <div style={cardBodyStyle}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARServices });
