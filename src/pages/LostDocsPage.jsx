function LostDocsPage({ t, navTo }) {
  return (
    <div id="lost-docs" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('lost_docs_title') || '📱🛂 Pasaporte / Teléfono Perdido'}</h2>
      <p>{t('lost_docs_subtitle') || 'Ayuda si perdiste tu teléfono o pasaporte.'}</p>

      <h3>{t('lost_phone_header') || '📱 ¿Perdiste tu Teléfono?'}</h3>

      <div className="card">
        <h4>{t('lost_phone_step1') || '🚨 Paso 1: Acciones Inmediatas'}</h4>
        <ul>
          <li>{t('lost_phone_step1_1') || 'Llama a tu teléfono'}</li>
          <li>{t('lost_phone_step1_2') || 'Usa "Encontrar mi dispositivo" (Google/Apple)'}</li>
          <li>{t('lost_phone_step1_3') || 'Bloquéalo remotamente'}</li>
        </ul>
      </div>

      <div className="card">
        <h4>{t('lost_phone_step2') || '🔒 Paso 2: Asegura tus Cuentas'}</h4>
        <ul>
          <li>{t('lost_phone_step2_1') || 'Cambia contraseñas importantes'}</li>
          <li>{t('lost_phone_step2_2') || 'Cierra sesiones remotamente'}</li>
          <li>{t('lost_phone_step2_3') || 'Avisa a tu banco'}</li>
        </ul>
      </div>

      <div className="card">
        <h4>{t('lost_phone_step3') || '📞 Paso 3: Contacta tu Operador'}</h4>
        <p>Telcel: <a href="tel:*264">*264</a></p>
        <p>AT&amp;T: <a href="tel:*111">*111</a></p>
        <p>Movistar: <a href="tel:*611">*611</a></p>
      </div>

      <h3 style={{ marginTop: '30px' }}>{t('lost_passport_header') || '🛂 ¿Perdiste tu Pasaporte?'}</h3>

      <div className="card emergency-card">
        <h4>{t('lost_passport_first') || '⚠️ Primer Paso Importante'}</h4>
        <p><strong>{t('lost_passport_contact') || 'Contacta a tu embajada/consulado INMEDIATAMENTE'}</strong></p>
        <button className="nav-btn" onClick={() => navTo('embassy')} style={{ marginTop: '10px' }}>
          🏛 <span>{t('lost_passport_btn') || 'Ver Consulados'}</span>
        </button>
      </div>

      <div className="card">
        <h4>{t('lost_passport_step1') || '📋 Paso 1: Reporte Policial'}</h4>
        <p>{t('lost_passport_step1_desc') || 'Obtén "Acta de Extravío" en el Ministerio Público'}</p>
        <p><span>{t('lost_passport_police') || '📞 Policía Turística:'}</span> <a href="tel:*0311">*0311</a></p>
      </div>

      <div className="card">
        <h4>{t('lost_passport_step2') || '📄 Paso 2: Documentos Necesarios'}</h4>
        <ul>
          <li>{t('lost_passport_doc1') || 'Acta de extravío'}</li>
          <li>{t('lost_passport_doc2') || 'Identificación (copia si es posible)'}</li>
          <li>{t('lost_passport_doc3') || 'Fotos tamaño pasaporte'}</li>
          <li>{t('lost_passport_doc4') || 'Comprobante de vuelo'}</li>
        </ul>
      </div>

      <div className="card">
        <h4>{t('lost_passport_step3') || '🏛 Paso 3: Visita tu Consulado'}</h4>
        <p>{t('lost_passport_step3_desc') || 'Solicita pasaporte de emergencia o documento de viaje temporal.'}</p>
        <button className="nav-btn" onClick={() => navTo('embassy')} style={{ marginTop: '10px' }}>
          🏛 <span>{t('lost_passport_directory') || 'Directorio de Consulados'}</span>
        </button>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default LostDocsPage
