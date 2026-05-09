function ActivitiesPage({ t, navTo }) {
  return (
    <div id="activities" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('activities_title') || '⚽ Itinerarios de Eventos'}</h2>
      <p>{t('activities_subtitle') || 'Fuentes oficiales para calendarios y eventos.'}</p>

      <p className="disclaimer-text">No somos organizadores ni vendedores de boletos.</p>

      <h3>🏆 Organismos Oficiales</h3>
      <div className="card"><h4>FIFA - World Cup 2026</h4><p>🌐 <a href="https://www.fifa.com/tournaments/mens/worldcup/canadamexicousa2026/" target="_blank" rel="noreferrer">fifa.com/worldcup2026</a></p></div>
      <div className="card"><h4>Formula 1</h4><p>🌐 <a href="https://www.formula1.com" target="_blank" rel="noreferrer">formula1.com</a></p></div>

      <h3>🏟️ Estadios en México</h3>
      <div className="card"><h4>Estadio Azteca - CDMX</h4><p>🌐 <a href="https://mexicocity.cdmx.gob.mx/venues/estadio-azteca/?lang=es" target="_blank" rel="noreferrer">Ver información</a></p></div>
      <div className="card"><h4>Estadio Akron - Guadalajara</h4><p>🌐 <a href="https://estadioakron.mx" target="_blank" rel="noreferrer">estadioakron.mx</a></p></div>
      <div className="card"><h4>Estadio BBVA - Monterrey</h4><p>🌐 <a href="https://www.estadio-bbva.mx" target="_blank" rel="noreferrer">estadio-bbva.mx</a></p></div>

      <h3>🎫 Boletaje</h3>
      <div className="card" style={{ borderLeft: '4px solid #8B1538', background: 'linear-gradient(135deg, #fffbe6 0%, #fff 100%)' }}>
        <h4>⚽ FIFA World Cup 2026™ - Boletos Oficiales</h4>
        <p>Venta oficial de boletos para el Torneo de Repesca del Mundial 2026</p>
        <p>🌐 <a href="https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/play-off-tournament-tickets" target="_blank" rel="noreferrer" style={{ fontWeight: '700', color: '#8B1538' }}>Comprar boletos en fifa.com</a></p>
      </div>
      <div className="card"><h4>Ticketmaster</h4><p>🌐 <a href="https://www.ticketmaster.com.mx" target="_blank" rel="noreferrer">ticketmaster.com.mx</a></p></div>
      <div className="card"><h4>Boletomóvil</h4><p>🌐 <a href="https://www.boletomovil.com" target="_blank" rel="noreferrer">boletomovil.com</a></p></div>

      <h3>{t('activities_livestream') || '📺 Livestreaming - Partidos en Vivo'}</h3>
      <p className="disclaimer-text">{t('activities_livestream_desc') || 'Links a plataformas de transmisión en vivo de partidos del Mundial 2026. Disponibilidad sujeta a región.'}</p>
      <div className="livestream-grid">
        <div className="card livestream-card">
          <h4>FIFA+ (Oficial)</h4>
          <p>{t('livestream_fifa_desc') || 'Transmisión oficial gratuita de partidos seleccionados'}</p>
          <p><a href="https://www.fifa.com/fifaplus" target="_blank" rel="noreferrer">🔴 Ver en vivo - fifa.com/fifaplus</a></p>
        </div>
        <div className="card livestream-card">
          <h4>TUDN En Vivo</h4>
          <p>{t('livestream_tudn_desc') || 'Todos los partidos del mundial en español'}</p>
          <p><a href="https://www.tudn.com/futbol/fifa-world-cup" target="_blank" rel="noreferrer">🔴 Ver en vivo - tudn.com</a></p>
        </div>
        <div className="card livestream-card">
          <h4>ViX+ Premium</h4>
          <p>{t('livestream_vix_desc') || 'Streaming de partidos en HD'}</p>
          <p><a href="https://vix.com" target="_blank" rel="noreferrer">🔴 Ver en vivo - vix.com</a></p>
        </div>
        <div className="card livestream-card">
          <h4>FOX Sports Play</h4>
          <p>{t('livestream_fox_desc') || 'Partidos en vivo con análisis'}</p>
          <p><a href="https://www.foxsports.com.mx" target="_blank" rel="noreferrer">🔴 Ver en vivo - foxsports.com.mx</a></p>
        </div>
        <div className="card livestream-card">
          <h4>ESPN Play</h4>
          <p>{t('livestream_espn_desc') || 'Cobertura completa del mundial'}</p>
          <p><a href="https://www.espn.com.mx" target="_blank" rel="noreferrer">🔴 Ver en vivo - espn.com.mx</a></p>
        </div>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default ActivitiesPage
