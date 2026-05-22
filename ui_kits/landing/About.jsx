// About.jsx — Founder bio section
// Exports: DARAbout

const DARAbout = () => {
  const sectionStyle = {
    background: '#0A2540',
    padding: '96px 0',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    width: '100%',
  };

  // Photo placeholder
  const photoWrapStyle = {};

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

  const statsRowStyle = {};

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

  const techRowStyle = {};

  const techTagStyle = {
    fontSize: '11px', fontWeight: 500,
    color: '#8EA8C4', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '4px', padding: '4px 10px',
  };

  return (
    <section style={sectionStyle} id="about">
      <div className="dar-container">
        <div className="dar-about-container" style={containerStyle}>
          {/* Photo */}
          <div className="dar-about-photo-wrap" style={photoWrapStyle}>
            <div style={{ ...photoStyle, padding: 0, overflow: 'hidden', display: 'block', position: 'relative' }}>
              <img src="../../img/280px/dar2.png" 
                   srcSet="../../img/280px/dar2.png 280w, ../../img/560px/dar2.png 560w, ../../img/840px/dar2.png 840w"
                   sizes="(max-width: 720px) 280px, 280px"
                   alt="D. Raskovsky" 
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', color: 'rgba(255,255,255,0.7)', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Creado con IA</div>
            </div>
          </div>

          {/* Bio */}
          <div className="dar-about-content">
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

            <div className="dar-about-stats" style={statsRowStyle}>
              {[['10+', 'Años como Arquitecto de Software'], ['4', 'Industrias críticas atendidas'], ['100%', 'Código transferido al cliente']].map(([n, l]) => (
                <div key={n} style={statStyle}>
                  <div style={statNumStyle}>{n}</div>
                  <div style={statLabelStyle}>{l}</div>
                </div>
              ))}
            </div>

            <div className="dar-about-techs" style={techRowStyle}>
              {['.NET 8', 'Azure', 'SQL Server', 'RAG / LLM', 'C#', 'Python', 'React', 'Vector DB'].map(t => (
                <span key={t} style={techTagStyle}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARAbout });
