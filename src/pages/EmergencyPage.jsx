function EmergencyPage({ t, navTo }) {
  return (
    <div id="emergency" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('emergency_title') || '🚑 Emergencia'}</h2>
      <p>{t('emergency_subtitle') || 'Números y servicios de emergencia en México.'}</p>

      <div className="card emergency-card">
        <h3>📞 <span>{t('emergency_numbers') || 'Números de Emergencia'}</span></h3>
        <div className="emergency-number">
          <a href="tel:911" className="emergency-btn">🚨 911</a>
          <span>{t('emergency_911') || 'Emergencias (Policía, Bomberos, Ambulancia)'}</span>
        </div>
        <div className="emergency-number">
          <a href="tel:*0311" className="emergency-btn">📍 *0311</a>
          <span>{t('emergency_locatel') || 'Locatel / Policía Turística'}</span>
        </div>
      </div>

      <h3>{t('emergency_hospitals_cdmx') || '🏥 Hospitales CDMX'}</h3>

      <div className="card">
        <h4>Centro Médico ABC - Santa Fe</h4>
        <p>📞 <a href="tel:5511031600">55 1103 1600</a></p>
        <p>🌐 <a href="https://centromedicoabc.com" target="_blank" rel="noreferrer">centromedicoabc.com</a></p>
        <p><a href="https://maps.google.com/?q=Centro+Médico+ABC+Santa+Fe" target="_blank" rel="noreferrer">📍 <span>{t('view_map') || 'Ver en mapa'}</span></a></p>
      </div>

      <div className="card">
        <h4>Médica Sur</h4>
        <p>📞 <a href="tel:5554247200">55 5424 7200</a></p>
        <p>🌐 <a href="https://www.medicasur.com.mx" target="_blank" rel="noreferrer">medicasur.com.mx</a></p>
      </div>

      <div className="card">
        <h4>Hospital Ángeles Pedregal</h4>
        <p>📞 <a href="tel:5556526987">55 5652 6987</a></p>
        <p>🌐 <a href="https://hospitalangeles.com/pedregal" target="_blank" rel="noreferrer">hospitalangeles.com</a></p>
      </div>

      <div className="card">
        <h4>Hospital Español</h4>
        <p>📞 <a href="tel:5552559600">55 5255 9600</a></p>
        <p>🌐 <a href="https://www.hespanol.com" target="_blank" rel="noreferrer">hespanol.com</a></p>
      </div>

      <h3>{t('emergency_hospitals_gdl') || '🏥 Hospitales Guadalajara'}</h3>

      <div className="card">
        <h4>Hospital San Javier</h4>
        <p>📞 <a href="tel:3336690222">33 3669 0222</a></p>
        <p>🌐 <a href="https://sanjavier.com.mx" target="_blank" rel="noreferrer">sanjavier.com.mx</a></p>
      </div>

      <div className="card">
        <h4>Hospital Puerta de Hierro</h4>
        <p>📞 <a href="tel:3338482128">33 3848 2128</a></p>
        <p>🌐 <a href="https://hospitalespuertadehierro.com" target="_blank" rel="noreferrer">hospitalespuertadehierro.com</a></p>
      </div>

      <h3>{t('emergency_hospitals_mty') || '🏥 Hospitales Monterrey'}</h3>

      <div className="card">
        <h4>TecSalud - Zambrano Hellion</h4>
        <p>📞 <a href="tel:8188880911">81 8888 0911</a></p>
        <p>🌐 <a href="https://www.tecsalud.mx" target="_blank" rel="noreferrer">tecsalud.mx</a></p>
      </div>

      <div className="card">
        <h4>CHRISTUS MUGUERZA</h4>
        <p>📞 <a href="tel:8183993477">81 8399 3477</a></p>
        <p>🌐 <a href="https://christusmuguerza.com.mx" target="_blank" rel="noreferrer">christusmuguerza.com.mx</a></p>
      </div>

      <h3>{t('emergency_pharmacies') || '💊 Farmacias 24/7'}</h3>

      <div className="card">
        <h4>Farmacias del Ahorro</h4>
        <p>🌐 <a href="https://www.fahorro.com" target="_blank" rel="noreferrer">fahorro.com</a></p>
      </div>

      <div className="card">
        <h4>Farmacias Guadalajara</h4>
        <p>🌐 <a href="https://www.farmaciasguadalajara.com" target="_blank" rel="noreferrer">farmaciasguadalajara.com</a></p>
      </div>

      <div className="card emergency-card" style={{ marginTop: '15px' }}>
        <h4>🛡️ Te Protege México</h4>
        <p>Plataforma de protección y asistencia para viajeros y residentes en México.</p>
        <p>🌐 <a href="https://teprotejomexico.org/" target="_blank" rel="noreferrer">teprotejomexico.org</a></p>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default EmergencyPage
