function Footer({ t, onOpenTC, onOpenPP }) {
  return (
    <footer className="site-footer" style={{ marginTop: '30px' }}>
      <p className="footer-disclaimer">
        {t('footer_disclaimer') || 'MÉXICO TRAVELSMART.MX ASSISTANT es un directorio informativo que contiene enlaces a servicios operados por terceros independientes.'}
      </p>
      <button className="tc-link" onClick={onOpenTC}>
        {t('tc_btn') || 'Términos y Condiciones'}
      </button>
      {' '}
      <button className="tc-link" onClick={onOpenPP}>
        {t('pp_btn') || 'Política de Privacidad'}
      </button>
    </footer>
  )
}

export default Footer
