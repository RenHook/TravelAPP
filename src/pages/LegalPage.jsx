function LegalPage({ t, navTo }) {
  return (
    <div id="legal" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('legal_title') || '⚖️ Legal y Seguros'}</h2>
      <p>{t('legal_subtitle') || 'Asesoría legal y seguros para viajeros.'}</p>

      <h3>{t('legal_services') || '⚖️ Servicios Legales'}</h3>

      <div className="card featured-card">
        <h4>LHO | Legal Foresight &amp; Global Affairs</h4>
        <p>{t('legal_lho_desc') || 'Asesoría legal para viajeros y ejecutivos'}</p>
        <p>📞 <a href="https://wa.me/526635929477" target="_blank" rel="noreferrer">+52 663 592 9477</a></p>
        <p>🌐 <a href="https://www.LHO.global" target="_blank" rel="noreferrer">LHO.global</a></p>
      </div>

      <h3>{t('legal_insurance') || '🛡️ Aseguradoras de Viaje'}</h3>

      <div className="card">
        <h4>AXA Assistance</h4>
        <p>🌐 <a href="https://www.axa-assistance.com" target="_blank" rel="noreferrer">axa-assistance.com</a></p>
      </div>

      <div className="card">
        <h4>Allianz Travel</h4>
        <p>🌐 <a href="https://www.allianz-assistance.com" target="_blank" rel="noreferrer">allianz-assistance.com</a></p>
      </div>

      <div className="card">
        <h4>Assist Card</h4>
        <p>🌐 <a href="https://www.assistcard.com" target="_blank" rel="noreferrer">assistcard.com</a></p>
      </div>

      <div className="card">
        <h4>Mapfre</h4>
        <p>🌐 <a href="https://www.mapfre.com.mx" target="_blank" rel="noreferrer">mapfre.com.mx</a></p>
      </div>

      <div className="card">
        <h4>GNP Seguros</h4>
        <p>🌐 <a href="https://www.gnp.com.mx" target="_blank" rel="noreferrer">gnp.com.mx</a></p>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default LegalPage
