import { useState, useCallback } from 'react'
import './App.css'
import { translations } from './data/translations.js'
import Header from './components/Header.jsx'
import FloatingToolbar from './components/FloatingToolbar.jsx'
import Footer from './components/Footer.jsx'
import PhrasesModal from './components/PhrasesModal.jsx'
import TranslatorModal from './components/TranslatorModal.jsx'
import TCModal from './components/TCModal.jsx'
import PPModal from './components/PPModal.jsx'
import ExtLinkModal from './components/ExtLinkModal.jsx'
import HomePage from './pages/HomePage.jsx'
import EmbassyPage from './pages/EmbassyPage.jsx'
import EmergencyPage from './pages/EmergencyPage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import DiningPage from './pages/DiningPage.jsx'
import TransportPage from './pages/TransportPage.jsx'
import LodgingPage from './pages/LodgingPage.jsx'
import ToursPage from './pages/ToursPage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import MediaPage from './pages/MediaPage.jsx'
import LostDocsPage from './pages/LostDocsPage.jsx'
import StatesPage from './pages/StatesPage.jsx'
import KoreaPage from './pages/KoreaPage.jsx'
import OtherDestinationsPage from './pages/OtherDestinationsPage.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lang, setLang] = useState('es')
  const [showPhrasesModal, setShowPhrasesModal] = useState(false)
  const [showTranslatorModal, setShowTranslatorModal] = useState(false)
  const [showTCModal, setShowTCModal] = useState(false)
  const [showPPModal, setShowPPModal] = useState(false)
  const [extUrl, setExtUrl] = useState(null)

  const t = translations[lang] || translations['en']
  const fallback = translations['en']
  const tr = (key) => t[key] || fallback[key] || key

  const navTo = useCallback((pageId) => {
    setCurrentPage(pageId)
    window.scrollTo(0, 0)
  }, [])

  const openExtLink = useCallback((url) => {
    setExtUrl(url)
  }, [])

  const handleLinkClick = useCallback((e) => {
    const anchor = e.target.closest('a[href]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (href && href.includes('wa.me')) return
    if (href && href.startsWith('http') && anchor.getAttribute('target') === '_blank') {
      e.preventDefault()
      openExtLink(href)
    }
  }, [openExtLink])

  const pageProps = { t: tr, navTo, openExtLink, lang }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage {...pageProps} />
      case 'embassy': return <EmbassyPage {...pageProps} />
      case 'emergency': return <EmergencyPage {...pageProps} />
      case 'legal': return <LegalPage {...pageProps} />
      case 'dining': return <DiningPage {...pageProps} />
      case 'transport': return <TransportPage {...pageProps} />
      case 'lodging': return <LodgingPage {...pageProps} />
      case 'tours': return <ToursPage {...pageProps} />
      case 'activities': return <ActivitiesPage {...pageProps} />
      case 'media': return <MediaPage {...pageProps} />
      case 'lost-docs': return <LostDocsPage {...pageProps} />
      case 'states': return <StatesPage {...pageProps} />
      case 'korea': return <KoreaPage {...pageProps} />
      case 'other-destinations': return <OtherDestinationsPage {...pageProps} />
      default: return <HomePage {...pageProps} />
    }
  }

  return (
    <div onClick={handleLinkClick}>
      <div id="app-frame">
        <Header currentPage={currentPage} navTo={navTo} />

        {currentPage === 'home' && (
          <FloatingToolbar
            t={tr}
            onOpenPhrases={() => setShowPhrasesModal(true)}
            onOpenTranslator={() => setShowTranslatorModal(true)}
          />
        )}

        <div id="content-area">
          {renderPage()}
        </div>

        <div className="bottom-bar"></div>
      </div>

      {showPhrasesModal && (
        <PhrasesModal
          t={tr}
          lang={lang}
          onClose={() => setShowPhrasesModal(false)}
        />
      )}

      {showTranslatorModal && (
        <TranslatorModal
          t={tr}
          onClose={() => setShowTranslatorModal(false)}
          openExtLink={openExtLink}
        />
      )}

      {showTCModal && (
        <TCModal
          t={tr}
          lang={lang}
          onClose={() => setShowTCModal(false)}
        />
      )}

      {showPPModal && (
        <PPModal
          t={tr}
          lang={lang}
          onClose={() => setShowPPModal(false)}
        />
      )}

      {extUrl && (
        <ExtLinkModal
          t={tr}
          url={extUrl}
          onClose={() => setExtUrl(null)}
          onContinue={() => {
            window.open(extUrl, '_blank')
            setExtUrl(null)
          }}
        />
      )}

      {/* Pass setLang and modal openers down through context or as props on App level */}
      {/* These are consumed by HomePage via pageProps */}
    </div>
  )
}

// We need to pass lang setter and modal openers to HomePage
// Let's create a version that passes those extra props
function AppWrapper() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lang, setLang] = useState('es')
  const [showPhrasesModal, setShowPhrasesModal] = useState(false)
  const [showTranslatorModal, setShowTranslatorModal] = useState(false)
  const [showTCModal, setShowTCModal] = useState(false)
  const [showPPModal, setShowPPModal] = useState(false)
  const [extUrl, setExtUrl] = useState(null)

  const t = translations[lang] || translations['en']
  const fallback = translations['en']
  const tr = (key) => t[key] || fallback[key] || key

  const navTo = useCallback((pageId) => {
    setCurrentPage(pageId)
    window.scrollTo(0, 0)
  }, [])

  const openExtLink = useCallback((url) => {
    setExtUrl(url)
  }, [])

  const handleLinkClick = useCallback((e) => {
    const anchor = e.target.closest('a[href]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (href && href.includes('wa.me')) return
    if (href && href.startsWith('http') && anchor.getAttribute('target') === '_blank') {
      e.preventDefault()
      openExtLink(href)
    }
  }, [openExtLink])

  const pageProps = {
    t: tr,
    navTo,
    openExtLink,
    lang,
    setLang,
    onOpenTC: () => setShowTCModal(true),
    onOpenPP: () => setShowPPModal(true),
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage {...pageProps} />
      case 'embassy': return <EmbassyPage {...pageProps} />
      case 'emergency': return <EmergencyPage {...pageProps} />
      case 'legal': return <LegalPage {...pageProps} />
      case 'dining': return <DiningPage {...pageProps} />
      case 'transport': return <TransportPage {...pageProps} />
      case 'lodging': return <LodgingPage {...pageProps} />
      case 'tours': return <ToursPage {...pageProps} />
      case 'activities': return <ActivitiesPage {...pageProps} />
      case 'media': return <MediaPage {...pageProps} />
      case 'lost-docs': return <LostDocsPage {...pageProps} />
      case 'states': return <StatesPage {...pageProps} />
      case 'korea': return <KoreaPage {...pageProps} />
      case 'other-destinations': return <OtherDestinationsPage {...pageProps} />
      default: return <HomePage {...pageProps} />
    }
  }

  return (
    <div onClick={handleLinkClick}>
      <div id="app-frame">
        <Header currentPage={currentPage} navTo={navTo} />

        {currentPage === 'home' && (
          <FloatingToolbar
            t={tr}
            onOpenPhrases={() => setShowPhrasesModal(true)}
            onOpenTranslator={() => setShowTranslatorModal(true)}
          />
        )}

        <div id="content-area">
          {renderPage()}
        </div>

        <div className="bottom-bar"></div>
      </div>

      {showPhrasesModal && (
        <PhrasesModal
          t={tr}
          lang={lang}
          onClose={() => setShowPhrasesModal(false)}
        />
      )}

      {showTranslatorModal && (
        <TranslatorModal
          t={tr}
          onClose={() => setShowTranslatorModal(false)}
          openExtLink={openExtLink}
        />
      )}

      {showTCModal && (
        <TCModal
          t={tr}
          lang={lang}
          onClose={() => setShowTCModal(false)}
        />
      )}

      {showPPModal && (
        <PPModal
          t={tr}
          lang={lang}
          onClose={() => setShowPPModal(false)}
        />
      )}

      {extUrl && (
        <ExtLinkModal
          t={tr}
          url={extUrl}
          onClose={() => setExtUrl(null)}
          onContinue={() => {
            window.open(extUrl, '_blank')
            setExtUrl(null)
          }}
        />
      )}
    </div>
  )
}

export default AppWrapper
