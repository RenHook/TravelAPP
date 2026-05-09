import { tcContent } from '../data/tcContent.js'

function TCModal({ t, lang, onClose }) {
  const content = tcContent[lang] || tcContent['es']

  return (
    <div className="tc-modal-overlay active" id="tcModal">
      <div className="tc-modal">
        <div className="tc-modal-header">
          <span>{t('tc_title') || 'Términos y Condiciones de Uso'}</span>
          <button className="tc-close" onClick={onClose}>&times;</button>
        </div>
        <div
          className="tc-modal-body"
          id="tcBody"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default TCModal
