// PainPoint.jsx — "¿Software o Gasto?" section
// Exports: DARPainPoint

const DARPainPoint = () => {
  const sectionStyle = {
    background: '#F5F8FA',
    padding: '96px 48px',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  };

  const containerStyle = {
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '80px', alignItems: 'center',
  };

  const leftStyle = {
    borderLeft: '2px solid #00D4FF',
    paddingLeft: '28px',
  };

  const overlineStyle = {
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#0099CC', marginBottom: '14px', display: 'block',
  };

  const titleStyle = {
    fontSize: 'clamp(28px, 3vw, 44px)',
    fontWeight: 700, color: '#0A2540',
    lineHeight: 1.15, letterSpacing: '-0.02em',
    marginBottom: '20px',
  };

  const bodyStyle = {
    fontSize: '17px', color: '#4A6280',
    lineHeight: 1.7, marginBottom: '0',
  };

  const boldStyle = { color: '#0A2540', fontWeight: 600 };

  // Right side: cost contrast visual
  const rightStyle = {};

  const comparisonStyle = {
    display: 'flex', flexDirection: 'column', gap: '12px',
  };

  const rowStyle = (type) => ({
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 20px', borderRadius: '10px',
    background: type === 'bad' ? 'rgba(239,68,68,0.05)' : 'rgba(0,212,255,0.06)',
    border: `1px solid ${type === 'bad' ? 'rgba(239,68,68,0.15)' : 'rgba(0,212,255,0.20)'}`,
  });

  const rowLabelStyle = (type) => ({
    fontSize: '14px', fontWeight: 500,
    color: type === 'bad' ? '#6B3030' : '#0A2540',
  });

  const rowValueStyle = (type) => ({
    fontSize: '13px', fontWeight: 600,
    color: type === 'bad' ? '#C53030' : '#0099CC',
    letterSpacing: '0.02em',
  });

  const comparisons = [
    { type: 'bad', label: 'SaaS genérico mensual', value: 'Gasto recurrente ✗' },
    { type: 'bad', label: 'Software alquilado', value: 'Sin propiedad ✗' },
    { type: 'bad', label: 'Consultor externo', value: 'Dependencia ✗' },
    { type: 'good', label: 'DAR · Suscripción', value: 'Activo propio ✓' },
    { type: 'good', label: 'Código fuente garantizado', value: 'Patrimonio ✓' },
  ];

  return (
    <section style={sectionStyle} id="modelo">
      <div style={containerStyle}>
        <div style={leftStyle}>
          <span style={overlineStyle}>La perspectiva del empresario</span>
          <h2 style={titleStyle}>¿Software o Gasto?<br/>Cambie su perspectiva.</h2>
          <p style={bodyStyle}>
            En un mercado volátil, no puede permitirse tirar dinero en soluciones que <strong style={boldStyle}>no le pertenecen.</strong> Nuestras soluciones no son "alquileres"; son <strong style={boldStyle}>activos que se integran a su patrimonio.</strong>
          </p>
        </div>

        <div style={rightStyle}>
          <div style={comparisonStyle}>
            {comparisons.map((c, i) => (
              <div key={i} style={rowStyle(c.type)}>
                <span style={rowLabelStyle(c.type)}>{c.label}</span>
                <span style={rowValueStyle(c.type)}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DARPainPoint });
