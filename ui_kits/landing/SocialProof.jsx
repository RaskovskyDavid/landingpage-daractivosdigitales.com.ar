// SocialProof.jsx — Client marquee strip
// Exports: DARSocialProof

const DARSocialProof = () => {
  const clients = [
    'Banco Galicia',
    'Papelera Tucumán',
    'Complejo Alimenticio San Salvador',
    'New Alliance Insurance Brokers',
  ];

  const sectionStyle = {
    background: '#06192d',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '20px 0',
    overflow: 'hidden',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: '10px', fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#6B8AAE', marginBottom: '14px',
  };

  const trackStyle = {
    display: 'flex',
    animation: 'marqueeScroll 20s linear infinite',
    width: 'max-content',
  };

  const chipStyle = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '8px 24px', margin: '0 10px',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '24px', whiteSpace: 'nowrap',
  };

  const dotStyle = {
    width: '5px', height: '5px',
    borderRadius: '50%', background: '#00D4FF', flexShrink: 0,
  };

  const nameStyle = {
    fontSize: '13px', fontWeight: 500,
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.02em',
  };

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <div style={sectionStyle}>
      <style>{`@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
      <div style={labelStyle}>Confianza respaldada por trayectoria en</div>
      <div style={{ overflow: 'hidden' }}>
        <div style={trackStyle}>
          {allClients.map((name, i) => (
            <div key={i} style={chipStyle}>
              <div style={dotStyle}></div>
              <span style={nameStyle}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { DARSocialProof });
