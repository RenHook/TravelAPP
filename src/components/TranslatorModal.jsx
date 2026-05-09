function TranslatorModal({ t, onClose, openExtLink }) {
  const handleLink = (e, url) => {
    e.preventDefault()
    openExtLink(url)
  }

  return (
    <div
      className="modal-overlay active"
      id="translatorModal"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>{t('translator_title') || '🌐 Traductores'}</h3>
        <div className="translator-grid">
          <a
            href="https://translate.google.com"
            target="_blank"
            rel="noreferrer"
            className="translator-link"
            onClick={(e) => handleLink(e, 'https://translate.google.com')}
          >
            <span className="t-icon">🔵</span>
            <div>
              <strong>Google Translate</strong>
              <br />
              <small>{t('translator_google_desc') || 'El más popular, 130+ idiomas'}</small>
            </div>
          </a>
          <a
            href="https://www.deepl.com/translator"
            target="_blank"
            rel="noreferrer"
            className="translator-link"
            onClick={(e) => handleLink(e, 'https://www.deepl.com/translator')}
          >
            <span className="t-icon">🟢</span>
            <div>
              <strong>DeepL</strong>
              <br />
              <small>{t('translator_deepl_desc') || 'Traducciones de alta calidad'}</small>
            </div>
          </a>
          <a
            href="https://www.bing.com/translator"
            target="_blank"
            rel="noreferrer"
            className="translator-link"
            onClick={(e) => handleLink(e, 'https://www.bing.com/translator')}
          >
            <span className="t-icon">🟣</span>
            <div>
              <strong>Microsoft Translator</strong>
              <br />
              <small>{t('translator_ms_desc') || 'Traducción con IA de Microsoft'}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TranslatorModal
