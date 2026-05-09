function LodgingPage({ t, navTo }) {
  return (
    <div id="lodging" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('lodging_title') || '🏨 Hospedaje'}</h2>
      <p className="section-disclaimer">{t('lodging_subtitle') || 'Plataformas de búsqueda y reservación. México Smart Travel Assistant no opera ni garantiza servicios de hospedaje.'}</p>

      <h3>{t('lodging_platforms') || '🔍 Plataformas de Reservación'}</h3>
      <div className="lodging-grid">
        <div className="card"><h4>Booking.com</h4><p><a href="https://www.booking.com" target="_blank" rel="noreferrer">🌐 booking.com</a></p></div>
        <div className="card"><h4>Expedia</h4><p><a href="https://www.expedia.com" target="_blank" rel="noreferrer">🌐 expedia.com</a></p></div>
        <div className="card"><h4>Hotels.com</h4><p><a href="https://www.hotels.com" target="_blank" rel="noreferrer">🌐 hotels.com</a></p></div>
        <div className="card"><h4>Tripadvisor</h4><p><a href="https://www.tripadvisor.com/Hotels" target="_blank" rel="noreferrer">🌐 tripadvisor.com</a></p></div>
        <div className="card"><h4>Agoda</h4><p><a href="https://www.agoda.com" target="_blank" rel="noreferrer">🌐 agoda.com</a></p></div>
      </div>

      <h3>{t('lodging_alternative') || '🏠 Alojamiento Alternativo'}</h3>
      <div className="lodging-grid">
        <div className="card"><h4>Airbnb</h4><p><a href="https://www.airbnb.com" target="_blank" rel="noreferrer">🌐 airbnb.com</a></p></div>
        <div className="card"><h4>Vrbo</h4><p><a href="https://www.vrbo.com" target="_blank" rel="noreferrer">🌐 vrbo.com</a></p></div>
        <div className="card"><h4>Homestay</h4><p><a href="https://www.homestay.com" target="_blank" rel="noreferrer">🌐 homestay.com</a></p></div>
      </div>

      <h3>{t('lodging_chains') || '🏨 Cadenas Hoteleras'}</h3>
      <div className="lodging-grid">
        <div className="card"><h4>Marriott</h4><p><a href="https://www.marriott.com" target="_blank" rel="noreferrer">🌐 marriott.com</a></p></div>
        <div className="card"><h4>Hilton</h4><p><a href="https://www.hilton.com" target="_blank" rel="noreferrer">🌐 hilton.com</a></p></div>
        <div className="card"><h4>Hyatt</h4><p><a href="https://www.hyatt.com" target="_blank" rel="noreferrer">🌐 hyatt.com</a></p></div>
        <div className="card"><h4>IHG</h4><p><a href="https://www.ihg.com" target="_blank" rel="noreferrer">🌐 ihg.com</a></p></div>
        <div className="card">
          <h4>Grupo Posadas</h4>
          <p>{t('lodging_posadas_desc') || 'Fiesta Americana, Live Aqua'}</p>
          <p><a href="https://www.posadas.com" target="_blank" rel="noreferrer">🌐 posadas.com</a></p>
        </div>
        <div className="card"><h4>Barceló</h4><p><a href="https://www.barcelo.com" target="_blank" rel="noreferrer">🌐 barcelo.com</a></p></div>
      </div>

      <h3>{t('lodging_guides') || '📖 Guías de Referencia'}</h3>
      <div className="lodging-grid">
        <div className="card"><h4>Forbes Travel Guide</h4><p><a href="https://www.forbestravelguide.com" target="_blank" rel="noreferrer">🌐 forbestravelguide.com</a></p></div>
        <div className="card"><h4>Condé Nast Traveler</h4><p><a href="https://www.cntraveler.com" target="_blank" rel="noreferrer">🌐 cntraveler.com</a></p></div>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default LodgingPage
