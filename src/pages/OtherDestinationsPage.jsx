import { intlDestinations, natDestinations } from '../data/destinations.js'

function OtherDestinationsPage({ t, navTo }) {
  return (
    <div id="other-destinations" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>{t('intl_destinations') || '✈️ Destinos Internacionales'}</h2>
        </div>
        <div className="scroll-container" id="intl-destinations-list">
          {intlDestinations.map((dest, i) => (
            <div
              key={i}
              className="destination-card"
              onClick={() => dest.page ? navTo(dest.page) : null}
              style={{ cursor: dest.page ? 'pointer' : 'default' }}
            >
              <div className="dest-emoji">{dest.emoji}</div>
              <div className="dest-name">{dest.name}</div>
              <div className="dest-tag">{dest.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>{t('nat_destinations') || '🇲🇽 Destinos Nacionales'}</h2>
        </div>
        <div className="scroll-container" id="nat-destinations-list">
          {natDestinations.map((dest, i) => (
            <div
              key={i}
              className="destination-card"
              onClick={() => dest.page ? navTo(dest.page) : null}
              style={{ cursor: dest.page ? 'pointer' : 'default' }}
            >
              <div className="dest-emoji">{dest.emoji}</div>
              <div className="dest-name">{dest.name}</div>
              <div className="dest-tag">{dest.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default OtherDestinationsPage
