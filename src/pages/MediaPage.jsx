function MediaPage({ t, navTo }) {
  return (
    <div id="media" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('media_title') || '📰 Alerts & News'}</h2>
      <p className="section-disclaimer">{t('media_subtitle') || 'Medios de comunicación y plataformas deportivas. México Smart Travel Assistant no garantiza disponibilidad de transmisiones.'}</p>

      <h3>🔔 Noticias Recientes</h3>
      <div className="card featured-card">
        <h4>Mexico Business News</h4>
        <p>México Travel Smart — Tourism Megaproject 2026</p>
        <p>🌐 <a href="https://mexicobusiness.news/media/audioarticle/2026/02/27/mexico-travel-smart-countrys-new-tourism-megaproject" target="_blank" rel="noreferrer">mexicobusiness.news</a></p>
      </div>
      <div className="card featured-card">
        <h4>Estar Bien</h4>
        <p>El Mundial 2026 en México: más que una fiesta, una prueba</p>
        <p>🌐 <a href="https://estar-bien.com/el-mundial-2026-en-mexico-mas-que-una-fiesta-una-prueba/" target="_blank" rel="noreferrer">estar-bien.com</a></p>
      </div>
      <div className="card featured-card">
        <h4>El Financiero</h4>
        <p>A ke no sabías — Mundial de Fútbol en la CDMX</p>
        <p>🌐 <a href="https://www.elfinanciero.com.mx/video/tv/a-ke-no-sabias/2026/03/13/a-ke-no-sabias-mundial-de-futbol-en-la-cdmx/" target="_blank" rel="noreferrer">elfinanciero.com.mx</a></p>
      </div>
      <div className="card featured-card">
        <h4>+Lucha — ¡Aquí Está la Lucha! 400</h4>
        <p>Lo Mejor de la Lucha Libre — Marzo 27, 2025</p>
        <p>▶️ <a href="https://youtu.be/rVkJgBDI1ns" target="_blank" rel="noreferrer">YouTube</a> &nbsp;|&nbsp; 📸 <a href="https://www.instagram.com/reel/DWaAPk0ES77/?igsh=MXhudDBpaWNtZ3preA==" target="_blank" rel="noreferrer">Instagram Reel</a></p>
      </div>

      <h3>{t('media_tv') || '📡 Televisión y Streaming'}</h3>
      <div className="media-grid">
        <div className="card"><h4>TUDN</h4><p>{t('media_tudn_desc') || 'Fútbol nacional e internacional, FIFA, NFL'}</p><p><a href="https://www.tudn.com" target="_blank" rel="noreferrer">🌐 tudn.com</a></p></div>
        <div className="card"><h4>TV Azteca Deportes</h4><p>{t('media_azteca_desc') || 'Selección nacional, eventos especiales'}</p><p><a href="https://www.tvazteca.com/deportes" target="_blank" rel="noreferrer">🌐 tvazteca.com/deportes</a></p></div>
        <div className="card"><h4>ESPN México</h4><p>{t('media_espn_desc') || 'F1, fútbol europeo, NFL, NBA, MLB'}</p><p><a href="https://www.espn.com.mx" target="_blank" rel="noreferrer">🌐 espn.com.mx</a></p></div>
        <div className="card featured-card"><h4>FIFA+</h4><p>{t('media_fifa_desc') || 'Plataforma oficial FIFA, partidos y documentales'}</p><p><a href="https://www.fifa.com/fifaplus" target="_blank" rel="noreferrer">🌐 fifa.com/fifaplus</a></p></div>
        <div className="card"><h4>ViX / ViX+</h4><p>{t('media_vix_desc') || 'Eventos deportivos en vivo'}</p><p><a href="https://vix.com" target="_blank" rel="noreferrer">🌐 vix.com</a></p></div>
        <div className="card"><h4>FOX Sports</h4><p>{t('media_fox_desc') || 'Fútbol internacional, ligas europeas'}</p><p><a href="https://www.foxsports.com.mx" target="_blank" rel="noreferrer">🌐 foxsports.com.mx</a></p></div>
        <div className="card"><h4>La Prensa Francesa</h4><p>{t('media_prensa_francesa_desc') || 'Noticias y cultura en español para la comunidad francófona'}</p><p><a href="https://laprensafrancesa.com.mx/" target="_blank" rel="noreferrer">🌐 laprensafrancesa.com.mx</a></p></div>
      </div>

      <h3>{t('media_news') || '📰 Noticias Deportivas'}</h3>
      <div className="media-grid">
        <div className="card"><h4>Mediotiempo</h4><p>{t('media_medio_desc') || 'Noticias, calendarios y resultados'}</p><p><a href="https://www.mediotiempo.com" target="_blank" rel="noreferrer">🌐 mediotiempo.com</a></p></div>
        <div className="card"><h4>RÉCORD</h4><p>{t('media_record_desc') || 'Fútbol mexicano e internacional'}</p><p><a href="https://www.record.com.mx" target="_blank" rel="noreferrer">🌐 record.com.mx</a></p></div>
        <div className="card"><h4>N+ Deportes</h4><p>{t('media_nmas_desc') || 'Cobertura informativa y análisis'}</p><p><a href="https://www.nmas.com.mx/deportes" target="_blank" rel="noreferrer">🌐 nmas.com.mx/deportes</a></p></div>
      </div>

      <h3>{t('media_influencers') || '🎙️ Influencers y Creadores'}</h3>
      <div className="influencer-grid">
        <div className="card influencer-card"><h4>@LuisitoComunica</h4><p>{t('influencer_luisito_desc') || 'Viajes y cultura mexicana'}</p><p><a href="https://www.youtube.com/@LuisitoComunica" target="_blank" rel="noreferrer">▶️ YouTube</a></p></div>
        <div className="card influencer-card"><h4>@AlanXElMundo</h4><p>{t('influencer_alan_desc') || 'Destinos y aventuras'}</p><p><a href="https://www.youtube.com/@alanxelmundo" target="_blank" rel="noreferrer">▶️ YouTube</a></p></div>
        <div className="card influencer-card"><h4>@MisterMundial</h4><p>{t('influencer_mister_desc') || 'Fútbol y cultura deportiva'}</p><p><a href="https://www.youtube.com/@MisterMundialOficial" target="_blank" rel="noreferrer">▶️ YouTube</a></p></div>
        <div className="card influencer-card"><h4>@WeroWeroTV</h4><p>{t('influencer_wero_desc') || 'Fútbol mexicano y mundial'}</p><p><a href="https://www.youtube.com/@WeroWeroTV" target="_blank" rel="noreferrer">▶️ YouTube</a></p></div>
        <div className="card influencer-card"><h4>@Kiwilimón</h4><p>{t('influencer_kiwi_desc') || 'Gastronomía mexicana'}</p><p><a href="https://www.youtube.com/@kaborewi" target="_blank" rel="noreferrer">▶️ YouTube</a></p></div>
        <div className="card influencer-card"><h4>@MexicoTravel</h4><p>{t('influencer_mtravel_desc') || 'Turismo oficial México'}</p><p><a href="https://www.instagram.com/mexicotravel/" target="_blank" rel="noreferrer">📸 Instagram</a></p></div>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default MediaPage
