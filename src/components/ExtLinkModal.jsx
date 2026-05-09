function ExtLinkModal({ t, url, onClose, onContinue }) {
  return (
    <div className="ext-modal-overlay active" id="extLinkModal">
      <div className="ext-modal">
        <div className="ext-modal-header">
          {t('ext_title') || '⚠️ Estás saliendo de MÉXICO TRAVELSMART.MX ASSISTANT'}
        </div>
        <div className="ext-modal-body">
          <p>
            {t('ext_msg') || 'El enlace dirige a un sitio operado por un tercero independiente. Los servicios ofrecidos en dicho sitio no son operados ni garantizados por esta plataforma.'}
          </p>
          <span className="ext-url" id="extLinkUrl">{url}</span>
        </div>
        <div className="ext-modal-buttons">
          <button className="ext-btn-cancel" onClick={onClose}>
            {t('ext_cancel') || 'Cancelar'}
          </button>
          <button className="ext-btn-continue" onClick={onContinue}>
            {t('ext_continue') || 'Continuar al sitio externo'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExtLinkModal
