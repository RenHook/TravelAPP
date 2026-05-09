function KoreaPage({ t, navTo }) {
  return (
    <div id="korea" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('other-destinations')}>← <span>{t('btn_back_destinations') || 'Destinos internacionales'}</span></button>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <div className="destination-hero">
        <h2>🇰🇷</h2>
        <h2>{t('korea_title') || 'Corea del Sur'}</h2>
        <p>{t('korea_subtitle') || 'La tierra de la calma matutina — Tecnología, tradición y sabor'}</p>
      </div>

      <div className="destination-section">
        <h3>{t('korea_essentials') || '📋 Información Esencial'}</h3>
        <div className="card">
          <p>🏛 <strong>{t('korea_capital') || 'Capital:'}</strong> Seúl</p>
          <p>💱 <strong>{t('korea_currency') || 'Moneda:'}</strong> Won (KRW)</p>
          <p>🗣 <strong>{t('korea_language') || 'Idioma:'}</strong> Coreano (한국어)</p>
          <p>🕐 <strong>{t('korea_timezone') || 'Zona horaria:'}</strong> GMT+9</p>
          <p>🛂 <strong>{t('korea_visa') || 'Visa:'}</strong> <span>{t('korea_visa_info') || 'Libre para mexicanos hasta 90 días'}</span></p>
        </div>

        <h3>{t('korea_places') || '🏯 Lugares Imperdibles'}</h3>
        <div className="card">
          <h4>Gyeongbokgung Palace</h4>
          <p>{t('korea_palace_desc') || 'Palacio real de la dinastía Joseon en Seúl'}</p>
          <p><a href="https://maps.google.com/?q=Gyeongbokgung+Palace" target="_blank" rel="noreferrer">📍 Mapa</a></p>
        </div>
        <div className="card">
          <h4>Bukchon Hanok Village</h4>
          <p>{t('korea_bukchon_desc') || 'Barrio tradicional con casas hanok de 600 años'}</p>
          <p><a href="https://maps.google.com/?q=Bukchon+Hanok+Village" target="_blank" rel="noreferrer">📍 Mapa</a></p>
        </div>
        <div className="card">
          <h4>Myeongdong</h4>
          <p>{t('korea_myeong_desc') || 'Distrito de compras, cosmética y street food'}</p>
          <p><a href="https://maps.google.com/?q=Myeongdong+Seoul" target="_blank" rel="noreferrer">📍 Mapa</a></p>
        </div>
        <div className="card">
          <h4>Jeju Island</h4>
          <p>{t('korea_jeju_desc') || 'Isla volcánica paradisíaca, patrimonio UNESCO'}</p>
          <p><a href="https://maps.google.com/?q=Jeju+Island" target="_blank" rel="noreferrer">📍 Mapa</a></p>
        </div>
        <div className="card">
          <h4>DMZ (Zona Desmilitarizada)</h4>
          <p>{t('korea_dmz_desc') || 'Frontera con Corea del Norte, tours guiados'}</p>
          <p><a href="https://maps.google.com/?q=DMZ+Korea" target="_blank" rel="noreferrer">📍 Mapa</a></p>
        </div>

        <h3>{t('korea_food') || '🍜 Gastronomía'}</h3>
        <div className="card">
          <h4>Kimchi Jjigae</h4>
          <p>{t('korea_kimchi_desc') || 'Estofado picante de kimchi, el plato nacional'}</p>
        </div>
        <div className="card">
          <h4>Korean BBQ (Gogigui)</h4>
          <p>{t('korea_bbq_desc') || 'Carne asada en la mesa, experiencia social'}</p>
        </div>
        <div className="card">
          <h4>Bibimbap</h4>
          <p>{t('korea_bibim_desc') || 'Arroz con vegetales, carne y huevo'}</p>
        </div>
        <div className="card">
          <h4>Tteokbokki</h4>
          <p>{t('korea_tteok_desc') || 'Pasteles de arroz en salsa picante dulce'}</p>
        </div>

        <h3>{t('korea_transport') || '🚇 Transporte'}</h3>
        <div className="card">
          <h4>{t('korea_t_card') || 'T-money Card'}</h4>
          <p>{t('korea_tcard_desc') || 'Tarjeta recargable para metro, bus y tiendas'}</p>
          <p><a href="https://www.t-money.co.kr/eng/index.do" target="_blank" rel="noreferrer">🌐 t-money.co.kr</a></p>
        </div>
        <div className="card">
          <h4>KTX (Tren bala)</h4>
          <p>{t('korea_ktx_desc') || 'Tren de alta velocidad Seúl-Busan en 2.5 horas'}</p>
          <p><a href="https://www.letskorail.com" target="_blank" rel="noreferrer">🌐 letskorail.com</a></p>
        </div>
        <div className="card">
          <h4>Kakao T</h4>
          <p>{t('korea_kakao_desc') || 'App de taxi y transporte más popular en Corea'}</p>
          <p><a href="https://www.kakaomobility.com" target="_blank" rel="noreferrer">🌐 kakaomobility.com</a></p>
        </div>

        <h3>{t('korea_useful') || '📱 Apps y Links Útiles'}</h3>
        <div className="card">
          <h4>Visit Korea</h4>
          <p>{t('korea_visit_desc') || 'Portal oficial de turismo'}</p>
          <p><a href="https://english.visitkorea.or.kr" target="_blank" rel="noreferrer">🌐 visitkorea.or.kr</a></p>
        </div>
        <div className="card">
          <h4>Naver Maps</h4>
          <p>{t('korea_naver_desc') || 'Mapas y navegación local (mejor que Google Maps en Corea)'}</p>
          <p><a href="https://map.naver.com" target="_blank" rel="noreferrer">🌐 map.naver.com</a></p>
        </div>
        <div className="card">
          <h4>Papago</h4>
          <p>{t('korea_papago_desc') || 'Traductor coreano de Naver'}</p>
          <p><a href="https://papago.naver.com" target="_blank" rel="noreferrer">🌐 papago.naver.com</a></p>
        </div>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('other-destinations')}>← <span>{t('btn_back_destinations') || 'Destinos internacionales'}</span></button>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default KoreaPage
