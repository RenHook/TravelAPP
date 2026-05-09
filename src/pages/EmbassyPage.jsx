function EmbassyPage({ t, navTo }) {
  return (
    <div id="embassy" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
      <h2>{t('embassy_title') || '🏛 Consulados'}</h2>
      <p className="section-disclaimer">{t('embassy_subtitle') || 'Listado de representaciones diplomáticas en México. Contacte su consulado para emergencias consulares.'}</p>

      <div className="consulate-grid">
        <div className="card consulate-card"><h3>🇺🇸 Estados Unidos</h3><p>📞 <a href="tel:+525550802000">55 5080 2000</a></p><p><a href="https://maps.google.com/?q=Embajada+Estados+Unidos" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇨🇦 Canadá</h3><p>📞 <a href="tel:+525557247900">55 5724 7900</a></p><p><a href="https://maps.google.com/?q=Embajada+Canadá" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇬🇧 Reino Unido</h3><p>📞 <a href="tel:+525516703200">55 1670 3200</a></p><p><a href="https://maps.google.com/?q=Embajada+Reino+Unido" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇫🇷 Francia</h3><p>📞 <a href="tel:+525591719700">55 9171 9700</a></p><p><a href="https://maps.google.com/?q=Embajada+Francia" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇩🇪 Alemania</h3><p>📞 <a href="tel:+525552832200">55 5283 2200</a></p><p><a href="https://maps.google.com/?q=Embajada+Alemania" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇪🇸 España</h3><p>📞 <a href="tel:+525552804508">55 5280 4508</a></p><p><a href="https://maps.google.com/?q=Embajada+España" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇮🇹 Italia</h3><p>📞 <a href="tel:+525552803691">55 5280 3691</a></p><p><a href="https://maps.google.com/?q=Embajada+Italia" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇧🇷 Brasil</h3><p>📞 <a href="tel:+525552014531">55 5201 4531</a></p><p><a href="https://maps.google.com/?q=Embajada+Brasil" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇦🇷 Argentina</h3><p>📞 <a href="tel:+525555209430">55 5520 9430</a></p><p><a href="https://maps.google.com/?q=Embajada+Argentina" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇨🇴 Colombia</h3><p>📞 <a href="tel:+525555250277">55 5525 0277</a></p><p><a href="https://maps.google.com/?q=Embajada+Colombia" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇯🇵 Japón</h3><p>📞 <a href="tel:+525552110028">55 5211 0028</a></p><p><a href="https://maps.google.com/?q=Embajada+Japón" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇰🇷 Corea del Sur</h3><p>📞 <a href="tel:+525552029866">55 5202 9866</a></p><p><a href="https://maps.google.com/?q=Embajada+República+de+Corea" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇦🇺 Australia</h3><p>📞 <a href="tel:+525511012200">55 1101 2200</a></p><p><a href="https://maps.google.com/?q=Embajada+Australia" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇳🇿 Nueva Zelanda</h3><p>📞 <a href="tel:+525552839460">55 5283 9460</a></p><p><a href="https://maps.google.com/?q=Embajada+Nueva+Zelanda" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇳🇱 Países Bajos</h3><p>📞 <a href="tel:+525511056550">55 1105 6550</a></p><p><a href="https://maps.google.com/?q=Embajada+Países+Bajos" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇧🇪 Bélgica</h3><p>📞 <a href="tel:+525552800758">55 5280 0758</a></p><p><a href="https://maps.google.com/?q=Embajada+Bélgica" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇨🇭 Suiza</h3><p>📞 <a href="tel:+525591784370">55 9178 4370</a></p><p><a href="https://maps.google.com/?q=Embajada+Suiza" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇦🇹 Austria</h3><p>📞 <a href="tel:+525552510806">55 5251 0806</a></p><p><a href="https://maps.google.com/?q=Embajada+Austria" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇵🇹 Portugal</h3><p>📞 <a href="tel:+525555207897">55 5520 7897</a></p><p><a href="https://maps.google.com/?q=Embajada+Portugal" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇳🇴 Noruega</h3><p>📞 <a href="tel:+525550473700">55 5047 3700</a></p><p><a href="https://maps.google.com/?q=Embajada+Noruega" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇸🇦 Arabia Saudita</h3><p>📞 <a href="tel:+525550203161">55 5020 3161</a></p><p><a href="https://maps.google.com/?q=Embajada+Arabia+Saudita" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇶🇦 Catar</h3><p>📞 <a href="tel:+525555402926">55 5540 2926</a></p><p><a href="https://maps.google.com/?q=Embajada+Catar" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇪🇬 Egipto</h3><p>📞 <a href="tel:+525552810698">55 5281 0698</a></p><p><a href="https://maps.google.com/?q=Embajada+Egipto" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇲🇦 Marruecos</h3><p>📞 <a href="tel:+525552451790">55 5245 1790</a></p><p><a href="https://maps.google.com/?q=Embajada+Marruecos" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
        <div className="card consulate-card"><h3>🇿🇦 Sudáfrica</h3><p>📞 <a href="tel:+525511004970">55 1100 4970</a></p><p><a href="https://maps.google.com/?q=Embajada+Sudáfrica" target="_blank" rel="noreferrer">📍 Mapa</a></p></div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>🌐 <span>{t('embassy_official_dir') || 'Directorio Oficial SRE'}</span></h3>
        <p><a href="https://directorio.sre.gob.mx/index.php/embajadas-background" target="_blank" rel="noreferrer">directorio.sre.gob.mx</a></p>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default EmbassyPage
