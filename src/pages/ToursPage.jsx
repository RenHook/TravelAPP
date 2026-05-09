function ToursPage({ t, navTo }) {
  return (
    <div id="tours" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('tours_title') || '🎟️ Tours y Tickets'}</h2>
      <p className="section-disclaimer">{t('tours_subtitle') || 'Operadores identificados. México Smart Travel Assistant no actúa como agencia de viajes ni garantiza servicios de terceros.'}</p>

      <h3>{t('tours_operators') || '🧭 Operadores de Tours'}</h3>
      <div className="tours-grid">
        <div className="card">
          <h4>NUBA</h4>
          <p>{t('tours_nuba_desc') || 'Experiencias personalizadas de alta gama'}</p>
          <p><a href="https://www.nuba.net" target="_blank" rel="noreferrer">🌐 nuba.net</a></p>
        </div>
        <div className="card">
          <h4>El Corte Inglés Viajes</h4>
          <p>{t('tours_corte_desc') || 'Amplia oferta turística internacional'}</p>
          <p><a href="https://www.viajeselcorteingles.es" target="_blank" rel="noreferrer">🌐 viajeselcorteingles.es</a></p>
        </div>
        <div className="card">
          <h4>Civitatis</h4>
          <p>{t('tours_civitatis_desc') || 'Actividades y visitas guiadas'}</p>
          <p><a href="https://www.civitatis.com" target="_blank" rel="noreferrer">🌐 civitatis.com</a></p>
        </div>
        <div className="card">
          <h4>Viator (Tripadvisor)</h4>
          <p>{t('tours_viator_desc') || 'Marketplace global de experiencias'}</p>
          <p><a href="https://www.viator.com" target="_blank" rel="noreferrer">🌐 viator.com</a></p>
        </div>
        <div className="card">
          <h4>GetYourGuide</h4>
          <p>{t('tours_gyg_desc') || 'Tickets y experiencias turísticas'}</p>
          <p><a href="https://www.getyourguide.com" target="_blank" rel="noreferrer">🌐 getyourguide.com</a></p>
        </div>
        <div className="card">
          <h4>Best Day</h4>
          <p>{t('tours_bestday_desc') || 'Operador mexicano con presencia nacional'}</p>
          <p><a href="https://www.bestday.com.mx" target="_blank" rel="noreferrer">🌐 bestday.com.mx</a></p>
        </div>
        <div className="card">
          <h4>Explorador Urbano</h4>
          <p>Experiencias y tours urbanos en México</p>
          <p><a href="https://www.instagram.com/exploradorurbano_?igsh=MXAwMjU5ZGZ3YnAybQ==" target="_blank" rel="noreferrer">📸 Instagram</a></p>
        </div>
      </div>

      <h3>{t('tours_official') || '🏛️ Registro Oficial'}</h3>
      <div className="card">
        <h4>SECTUR - Operadores Certificados</h4>
        <p>{t('tours_sectur_desc') || 'Prestadores de servicios turísticos registrados'}</p>
        <p><a href="https://www.gob.mx/sectur" target="_blank" rel="noreferrer">🌐 gob.mx/sectur</a></p>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default ToursPage
