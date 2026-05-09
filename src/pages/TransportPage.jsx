function TransportPage({ t, navTo }) {
  return (
    <div id="transport" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('transport_title') || '🚇 Movilidad'}</h2>
      <p>{t('transport_subtitle') || 'Opciones de transporte en México.'}</p>

      <div className="card"><h3>🚇 Metro CDMX</h3><p>🌐 <a href="https://www.metro.cdmx.gob.mx" target="_blank" rel="noreferrer">metro.cdmx.gob.mx</a></p><p>Tarifa: $5 MXN</p></div>
      <div className="card"><h3>🚌 Metrobús</h3><p>🌐 <a href="https://www.metrobus.cdmx.gob.mx" target="_blank" rel="noreferrer">metrobus.cdmx.gob.mx</a></p><p>Tarifa: $6 MXN</p></div>
      <div className="card"><h3>🚗 Uber</h3><p>🌐 <a href="https://www.uber.com/mx" target="_blank" rel="noreferrer">uber.com/mx</a></p></div>
      <div className="card"><h3>🚕 DiDi</h3><p>🌐 <a href="https://www.didiglobal.com/mx" target="_blank" rel="noreferrer">didiglobal.com/mx</a></p></div>
      <div className="card"><h3>🚌 ADO</h3><p>🌐 <a href="https://www.ado.com.mx" target="_blank" rel="noreferrer">ado.com.mx</a></p></div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default TransportPage
