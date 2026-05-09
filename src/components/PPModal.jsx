import { ppContent } from '../data/ppContent.js'

function PPModal({ t, lang, onClose }) {
  const content = ppContent[lang] || ppContent['es']

  return (
    <div className="tc-modal-overlay active" id="ppModal">
      <div className="tc-modal">
        <div className="tc-modal-header">
          <span>{t('pp_title') || 'Política de Privacidad'}</span>
          <button className="tc-close" onClick={onClose}>&times;</button>
        </div>
        <div
          className="tc-modal-body"
          id="ppBody"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default PPModal
