// Hero.jsx — DAR | Activos Digitales Hero Section
// Exports: DARHero

const DARHero = ({ onPrimary, onSecondary }) => {
  const sectionStyle = {
    position: 'relative',
    background: '#0A2540',
    minHeight: '100vh',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const bgGridStyle = {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    pointerEvents: 'none',
  };

  const glowStyle = {
    position: 'absolute',
    width: '600px', height: '500px',
    top: '-100px', right: '-100px',
    background: 'radial-gradient(ellipse, rgba(0,212,255,0.10) 0%, transparent 70%)',
    pointerEvents: 'none',
  };

  const glowStyle2 = {
    position: 'absolute',
    width: '400px', height: '400px',
    bottom: '-80px', left: '30%',
    background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  };

  const containerStyle = {
    position: 'relative', zIndex: 1,
    width: '100%',
  };

  const overlineStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#00D4FF',
    display: 'flex', alignItems: 'center', gap: '10px',
    marginBottom: '20px',
  };

  const h1Style = {
    fontSize: 'clamp(36px, 4vw, 64px)',
    fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.1, letterSpacing: '-0.025em',
    marginBottom: '24px',
  };

  const accentStyle = { color: '#00D4FF' };

  const subtextStyle = {
    fontSize: '18px', color: '#8EA8C4',
    lineHeight: 1.65, marginBottom: '40px',
    maxWidth: '520px',
  };

  const ctaRowStyle = {
    display: 'flex', gap: '12px', flexWrap: 'wrap',
  };

  const btnPrimary = {
    padding: '14px 32px', background: '#00D4FF', color: '#0A2540',
    borderRadius: '8px', fontSize: '15px', fontWeight: 600,
    letterSpacing: '0.03em', border: 'none', cursor: 'pointer',
    boxShadow: '0 0 32px rgba(0,212,255,0.30)',
    transition: 'all 200ms cubic-bezier(0.16,1,0.3,1)',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const btnSecondary = {
    padding: '14px 32px', background: 'transparent', color: '#FFFFFF',
    borderRadius: '8px', fontSize: '15px', fontWeight: 600,
    letterSpacing: '0.03em',
    border: '1.5px solid rgba(255,255,255,0.25)',
    cursor: 'pointer',
    transition: 'all 200ms cubic-bezier(0.16,1,0.3,1)',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  // Node graph visualization (right side)
  const vizStyle = {
    position: 'relative', height: '420px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };

  const nodes = [
    { x: 50, y: 50, size: 18, primary: true },
    { x: 20, y: 25, size: 10, primary: false },
    { x: 78, y: 28, size: 10, primary: false },
    { x: 15, y: 68, size: 7, primary: false },
    { x: 82, y: 72, size: 7, primary: false },
    { x: 40, y: 80, size: 7, primary: false },
    { x: 64, y: 82, size: 7, primary: false },
    { x: 8, y: 45, size: 5, primary: false },
    { x: 90, y: 50, size: 5, primary: false },
  ];

  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[3,5],[4,6],[1,7],[2,8],
  ];

  return (
    <section style={sectionStyle} id="hero">
      <div style={bgGridStyle}></div>
      <div style={glowStyle}></div>
      <div style={glowStyle2}></div>

      <div className="dar-container">
        <div className="dar-hero-container" style={containerStyle}>
          {/* Left: Copy */}
          <div className="dar-hero-content">
            <div style={overlineStyle}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '1px', flexShrink: 0 }}></span>
              Ingeniería · IA · Tucumán
            </div>
            <h1 className="dar-hero-title" style={h1Style}>
              Transforme su información<br/>
              en su activo más <span style={accentStyle}>rentable.</span>
            </h1>
            <p style={subtextStyle}>
              Ingeniería de software e IA diseñada para empresas líderes de Tucumán. Construimos soluciones a medida bajo un modelo de suscripción con <strong style={{ color: '#fff', fontWeight: 600 }}>propiedad del código para el cliente.</strong>
            </p>
            <div className="dar-hero-ctas">
              <button style={btnPrimary} onClick={onPrimary}
                onMouseEnter={e => { e.currentTarget.style.background = '#7AEAFF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#00D4FF'; e.currentTarget.style.transform = ''; }}
              >Evaluar mi caso</button>
              <button style={btnSecondary} onClick={onSecondary}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              >Ver nuestro modelo</button>
            </div>
          </div>

          {/* Right: Abstract visualization */}
          <div className="dar-hero-viz" style={vizStyle}>
            <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '400px', height: '400px' }}>
              <defs>
                <radialGradient id="hglow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
                </radialGradient>
                <filter id="hblur">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Glow bg */}
              <ellipse cx="200" cy="200" rx="160" ry="140" fill="url(#hglow)"/>

              {/* Edges */}
              {edges.map(([a, b], i) => {
                const na = nodes[a], nb = nodes[b];
                return <line key={i}
                  x1={na.x * 4} y1={na.y * 4}
                  x2={nb.x * 4} y2={nb.y * 4}
                  stroke="rgba(0,212,255,0.2)" strokeWidth="1"
                />;
              })}

              {/* Nodes */}
              {nodes.map((n, i) => (
                <g key={i}>
                  {n.primary && <circle cx={n.x*4} cy={n.y*4} r={n.size+8} fill="rgba(0,212,255,0.06)" filter="url(#hblur)"/>}
                  <circle
                    cx={n.x*4} cy={n.y*4} r={n.size}
                    fill={n.primary ? '#0D3060' : 'rgba(13,48,96,0.7)'}
                    stroke={n.primary ? '#00D4FF' : 'rgba(0,212,255,0.4)'}
                    strokeWidth={n.primary ? 2 : 1}
                  />
                  {n.primary && <circle cx={n.x*4} cy={n.y*4} r={n.size/2} fill="#00D4FF" opacity="0.85"/>}
                </g>
              ))}

              {/* Data flow labels */}
              <text x="195" y="175" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="8" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">ORCHESTRATOR</text>
              <text x="80" y="97" textAnchor="middle" fill="rgba(142,168,196,0.5)" fontSize="7" fontFamily="'JetBrains Mono', monospace">RAG</text>
              <text x="316" y="110" textAnchor="middle" fill="rgba(142,168,196,0.5)" fontSize="7" fontFamily="'JetBrains Mono', monospace">.NET</text>
              <text x="60" y="274" textAnchor="middle" fill="rgba(142,168,196,0.4)" fontSize="7" fontFamily="'JetBrains Mono', monospace">SQL</text>
              <text x="332" y="290" textAnchor="middle" fill="rgba(142,168,196,0.4)" fontSize="7" fontFamily="'JetBrains Mono', monospace">Azure</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARHero });
