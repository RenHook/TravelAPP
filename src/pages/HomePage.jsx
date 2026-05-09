import AudioPlayer from '../components/AudioPlayer.jsx'
import Footer from '../components/Footer.jsx'
import { logoSrc } from '../data/logoImage.js'
import { menuIcons } from '../data/menuIcons.js'

function HomePage({ t, navTo, lang, setLang, onOpenTC, onOpenPP }) {
  const menuItems = [
    { page: 'emergency', labelKey: 'menu_emergency', defaultLabel: 'Emergencia' },
    { page: 'legal', labelKey: 'menu_legal', defaultLabel: 'Legal y Seguros' },
    { page: 'transport', labelKey: 'menu_transport', defaultLabel: 'Movilidad' },
    { page: 'embassy', labelKey: 'menu_consulates', defaultLabel: 'Consulados' },
    { page: 'dining', labelKey: 'menu_dining', defaultLabel: 'Comida' },
    { page: 'lodging', labelKey: 'menu_lodging', defaultLabel: 'Hospedaje' },
    { page: 'tours', labelKey: 'menu_tours', defaultLabel: 'Tours y Tickets' },
    { page: 'activities', labelKey: 'menu_itineraries', defaultLabel: 'Itinerarios de Eventos' },
    { page: 'media', labelKey: 'menu_media', defaultLabel: 'Medios' },
    { page: 'lost-docs', labelKey: 'menu_lost_docs', defaultLabel: 'Pasaporte / Teléfono Perdido' },
  ]

  return (
    <div id="home" className="page active">
      <div className="language-bar">
        <select
          id="langSelect"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="pt">Português</option>
          <option value="it">Italiano</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="hero">
        <img
          src={logoSrc}
          id="logoImage"
          alt="México Smart Travel Assistant 26"
          className="logo-img"
        />
      </div>

      <AudioPlayer />

      <div className="menu-grid">
        {menuItems.map(({ page, labelKey, defaultLabel }) => (
          <div
            key={page}
            className="menu-card"
            onClick={() => navTo(page)}
          >
            {menuIcons[page] && (
              <img
                src={menuIcons[page]}
                className="menu-icon"
                alt={defaultLabel}
              />
            )}
            <span className="menu-title">
              {t(labelKey) || defaultLabel}
            </span>
          </div>
        ))}

        <div
          className="menu-card menu-card-full"
          onClick={() => navTo('states')}
        >
          {menuIcons['states'] && (
            <img
              src={menuIcons['states']}
              className="menu-icon"
              alt="Destinos en México"
            />
          )}
          <span className="menu-title">
            {t('menu_states') || 'Destinos en México'}
          </span>
        </div>

        <div
          className="menu-card menu-card-full menu-card-destination"
          onClick={() => navTo('other-destinations')}
        >
          {menuIcons['other-destinations'] && (
            <img
              src={menuIcons['other-destinations']}
              className="menu-icon"
              alt="Destinos internacionales"
            />
          )}
          <span className="menu-title">
            {t('menu_destinations') || 'Destinos internacionales'}
          </span>
        </div>
      </div>

      <Footer t={t} onOpenTC={onOpenTC} onOpenPP={onOpenPP} />
    </div>
  )
}

export default HomePage
