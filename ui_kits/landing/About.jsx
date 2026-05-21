// About.jsx — Founder bio section
// Exports: DARAbout

const DARAbout = () => {
  const sectionStyle = {
    background: '#0A2540',
    padding: '96px 48px',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 2fr',
    gap: '80px', alignItems: 'center',
  };

  // Photo placeholder
  const photoWrapStyle = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
  };

  const photoStyle = {
    width: '220px', height: '280px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '12px',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: '10px',
  };

  const photoHintStyle = {
    fontSize: '11px', color: '#6B8AAE',
    textAlign: 'center', lineHeight: 1.5,
    maxWidth: '140px',
  };

  const overlineStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#00D4FF',
    display: 'flex', alignItems: 'center', gap: '10px',
    marginBottom: '14px',
  };

  const titleStyle = {
    fontSize: 'clamp(24px, 2.5vw, 38px)',
    fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.2, letterSpacing: '-0.02em',
    marginBottom: '20px',
  };

  const bodyStyle = {
    fontSize: '17px', color: '#8EA8C4',
    lineHeight: 1.7, marginBottom: '32px',
  };

  const statsRowStyle = {
    display: 'flex', gap: '32px', flexWrap: 'wrap',
  };

  const statStyle = {
    borderTop: '2px solid #00D4FF',
    paddingTop: '12px', minWidth: '100px',
  };

  const statNumStyle = {
    fontSize: '28px', fontWeight: 700,
    color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1,
  };

  const statLabelStyle = {
    fontSize: '12px', color: '#8EA8C4',
    marginTop: '4px', lineHeight: 1.4,
  };

  const techRowStyle = {
    display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px',
  };

  const techTagStyle = {
    fontSize: '11px', fontWeight: 500,
    color: '#8EA8C4', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '4px', padding: '4px 10px',
  };

  return (
    <section style={sectionStyle} id="about">
      <div style={containerStyle}>
        {/* Photo */}
        <div style={photoWrapStyle}>
          <div style={photoStyle}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(142,168,196,0.4)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span style={photoHintStyle}>Reemplazar con foto profesional (preferiblemente B&W)</span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <div style={overlineStyle}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '1px', flexShrink: 0 }}></span>
            Trayectoria
          </div>
          <h2 style={titleStyle}>Ingeniería con criterio local.</h2>
          <p style={bodyStyle}>
            Con más de 10 años de experiencia como Arquitecto de Software, he diseñado y construido sistemas críticos para las empresas más exigentes del norte argentino. Mi compromiso es simple: entregar soluciones que funcionen, que duren, y que sean <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>suyas.</strong>
          </p>
          <p style={bodyStyle}>
            Tucumán necesita ingeniería de nivel corporativo con entendimiento del mercado local. Eso es exactamente lo que DAR ofrece.
          </p>

          <div style={statsRowStyle}>
            {[['10+', 'Años como Arquitecto de Software'], ['4', 'Industrias críticas atendidas'], ['100%', 'Código transferido al cliente']].map(([n, l]) => (
              <div key={n} style={statStyle}>
                <div style={statNumStyle}>{n}</div>
                <div style={statLabelStyle}>{l}</div>
              </div>
            ))}
          </div>

          <div style={techRowStyle}>
            {['.NET 8', 'Azure', 'SQL Server', 'RAG / LLM', 'C#', 'Python', 'React', 'Vector DB'].map(t => (
              <span key={t} style={techTagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARAbout });
