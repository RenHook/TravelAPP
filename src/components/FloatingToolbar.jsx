function FloatingToolbar({ t, onOpenPhrases, onOpenTranslator }) {
  return (
    <div className="floating-toolbar" id="floatingToolbar">
      <button className="toolbar-btn" onClick={onOpenPhrases}>
        {t('btn_phrases') || '💬 Frases'}
      </button>
      <button className="toolbar-btn translator-btn" onClick={onOpenTranslator}>
        {t('btn_translator') || '🌐 Traductor'}
      </button>
    </div>
  )
}

export default FloatingToolbar
