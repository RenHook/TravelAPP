function DiningPage({ t, navTo }) {
  return (
    <div id="dining" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('dining_title') || '🍽️ Comida'}</h2>
      <p>{t('dining_subtitle') || 'Guías y plataformas gastronómicas.'}</p>

      <p className="disclaimer-text">Sección informativa. No recomendamos restaurantes específicos.</p>

      <h3>🌟 {t('dining_guides') || 'Guías Gastronómicas'}</h3>
      <div className="card"><h4>Guía Michelin</h4><p>🌐 <a href="https://guide.michelin.com" target="_blank" rel="noreferrer">guide.michelin.com</a></p></div>
      <div className="card"><h4>The World&apos;s 50 Best</h4><p>🌐 <a href="https://www.theworlds50best.com" target="_blank" rel="noreferrer">theworlds50best.com</a></p></div>
      <div className="card"><h4>TasteAtlas</h4><p>🌐 <a href="https://www.tasteatlas.com" target="_blank" rel="noreferrer">tasteatlas.com</a></p></div>

      <h3>📱 {t('dining_reservations') || 'Reservaciones'}</h3>
      <div className="card"><h4>OpenTable</h4><p>🌐 <a href="https://www.opentable.com.mx" target="_blank" rel="noreferrer">opentable.com.mx</a></p></div>
      <div className="card"><h4>TheFork</h4><p>🌐 <a href="https://www.thefork.com.mx" target="_blank" rel="noreferrer">thefork.com.mx</a></p></div>

      <h3>🇲🇽 {t('dining_local') || 'Guías Locales'}</h3>
      <div className="card"><h4>Chilango</h4><p>🌐 <a href="https://www.chilango.com/comida" target="_blank" rel="noreferrer">chilango.com/comida</a></p></div>
      <div className="card"><h4>Time Out México</h4><p>🌐 <a href="https://www.timeoutmexico.mx" target="_blank" rel="noreferrer">timeoutmexico.mx</a></p></div>

      <h3>🛵 {t('dining_delivery') || 'Delivery'}</h3>
      <div className="card"><h4>Uber Eats</h4><p>🌐 <a href="https://www.ubereats.com/mx" target="_blank" rel="noreferrer">ubereats.com/mx</a></p></div>
      <div className="card"><h4>Rappi</h4><p>🌐 <a href="https://www.rappi.com.mx" target="_blank" rel="noreferrer">rappi.com.mx</a></p></div>
      <div className="card"><h4>DiDi Food</h4><p>🌐 <a href="https://www.didi-food.com" target="_blank" rel="noreferrer">didi-food.com</a></p></div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default DiningPage
