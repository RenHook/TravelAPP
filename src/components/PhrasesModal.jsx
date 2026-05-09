import { phrasesData } from '../data/phrases.js'

function PhrasesModal({ t, lang, onClose }) {
  const data = phrasesData[lang] || phrasesData['en']

  return (
    <div
      className="modal-overlay active"
      id="phrasesModal"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>{t('phrases_title') || '💬 Frases Comunes'}</h3>
        <div id="phrasesList">
          {data.map((p, i) => (
            <div key={i} className="phrase-item" style={{ padding: '10px 12px', borderBottom: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="phrase-es">🇲🇽 {p.es}</span>
              <span className="phrase-trans">→ {p.trans}</span>
              <span className="phrase-pronunciation">🔊 {p.pron}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhrasesModal
