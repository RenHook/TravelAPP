function StatesPage({ t, navTo }) {
  return (
    <div id="states" className="page active">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>

      <h2>{t('states_title') || '📍 Destinos en México'}</h2>
      <p className="states-disclaimer">
        <a href="https://www.tourimex.com/" target="_blank" rel="noreferrer" style={{ color: '#006847', fontWeight: '700' }}>🌐 tourimex.com</a> — Guía de destinos turísticos de México.
      </p>
      <p className="states-disclaimer">
        <a href="https://wa.me/525565659395" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: '700' }}>💬 Chatbot Chilango</a> — Asistente turístico de la Ciudad de México vía WhatsApp.
      </p>

      <div id="tourimex-states-list">
        <div className="card state-card">
          <h3>📍 Aguascalientes</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/san-jose-de-gracia-aguascalientes-ags/" target="_blank" rel="noreferrer">San Jose de Gracia</a></li>
            <li><a href="https://tourimex.com/real-de-asientos-aguascalientes-ags/" target="_blank" rel="noreferrer">Real de Asientos</a></li>
            <li><a href="https://tourimex.com/calvillo-aguascalientes-ags/" target="_blank" rel="noreferrer">Calvillo</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Baja California Sur</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/cabo-san-lucas-baja-california-sur-bcs/" target="_blank" rel="noreferrer">Cabo San Lucas</a></li>
            <li><a href="https://tourimex.com/playa-balandra-baja-california-sur-bcs/" target="_blank" rel="noreferrer">Playa Balandra</a></li>
            <li><a href="https://tourimex.com/isla-espirito-santo-baja-california-sur-bcs/" target="_blank" rel="noreferrer">Isla Espíritu Santo</a></li>
            <li><a href="https://tourimex.com/la-paz-baja-california-sur-bcs/" target="_blank" rel="noreferrer">La Paz</a></li>
            <li><a href="https://tourimex.com/loreto-baja-california-sur-bcs/" target="_blank" rel="noreferrer">Loreto</a></li>
            <li><a href="https://tourimex.com/cabo-pulmo-baja-california-sur-bcs/" target="_blank" rel="noreferrer">Cabo Pulmo</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Baja California Norte</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/ensenada-baja-california-norte-bcn/" target="_blank" rel="noreferrer">Ensenada</a></li>
            <li><a href="https://tourimex.com/rosarito-baja-california-norte-bcn/" target="_blank" rel="noreferrer">Rosarito</a></li>
            <li><a href="https://tourimex.com/tecate-baja-california-norte-bcn/" target="_blank" rel="noreferrer">Tecate</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Campeche</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/calakmul-campeche-cam/" target="_blank" rel="noreferrer">Calakmul</a></li>
            <li><a href="https://tourimex.com/ciudad-de-campeche-campeche-cam/" target="_blank" rel="noreferrer">Ciudad de Campeche</a></li>
            <li><a href="https://tourimex.com/champoton-campeche-cam/" target="_blank" rel="noreferrer">Champotón</a></li>
            <li><a href="https://tourimex.com/ciudad-del-carmen-campeche-cam/" target="_blank" rel="noreferrer">Ciudad del Carmen</a></li>
            <li><a href="https://tourimex.com/palizada-campeche-cam/" target="_blank" rel="noreferrer">Palizada</a></li>
            <li><a href="https://tourimex.com/seybaplaya-campeche-cam/" target="_blank" rel="noreferrer">Seybaplaya</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Chiapas</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/bonampak-chiapas-chp/" target="_blank" rel="noreferrer">Bonampak</a></li>
            <li><a href="https://tourimex.com/yaxchilan-chiapas-chp/" target="_blank" rel="noreferrer">Yaxchilán</a></li>
            <li><a href="https://tourimex.com/agua-azul-chiapas-chp/" target="_blank" rel="noreferrer">Agua Azul</a></li>
            <li><a href="https://tourimex.com/chiapa-de-corzo-chiapas-chp/" target="_blank" rel="noreferrer">Chiapa de Corzo</a></li>
            <li><a href="https://tourimex.com/comitan-chiapas-chp/" target="_blank" rel="noreferrer">Comitán</a></li>
            <li><a href="https://tourimex.com/ocosingo-chiapas-chp/" target="_blank" rel="noreferrer">Ocosingo</a></li>
            <li><a href="https://tourimex.com/puerto-arista-chiapas-chp/" target="_blank" rel="noreferrer">Puerto Arista</a></li>
            <li><a href="https://tourimex.com/san-cristobal-de-las-casas-chiapas-chp/" target="_blank" rel="noreferrer">San Cristóbal de las Casas</a></li>
            <li><a href="https://tourimex.com/palenque-chiapas-chp/" target="_blank" rel="noreferrer">Palenque</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Chihuahua</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/batopilas-chihuahua-chh/" target="_blank" rel="noreferrer">Batopilas</a></li>
            <li><a href="https://tourimex.com/casas-grandes-chihuahua-chh/" target="_blank" rel="noreferrer">Casas Grandes</a></li>
            <li><a href="https://tourimex.com/creel-chihuahua-chh/" target="_blank" rel="noreferrer">Creel</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Coahuila</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/viesca-y-parras-coahuila-coa/" target="_blank" rel="noreferrer">Viesca y Parras</a></li>
            <li><a href="https://tourimex.com/melchor-muzquiz-coahuila-coa/" target="_blank" rel="noreferrer">Melchor Múzquiz</a></li>
            <li><a href="https://tourimex.com/guerrero-coahuila-coa/" target="_blank" rel="noreferrer">Guerrero</a></li>
            <li><a href="https://tourimex.com/candela-coahuila-coa/" target="_blank" rel="noreferrer">Candela</a></li>
            <li><a href="https://tourimex.com/arteaga-coahuila-coa/" target="_blank" rel="noreferrer">Arteaga</a></li>
            <li><a href="https://tourimex.com/cuatro-cienagas-coahuila-coa/" target="_blank" rel="noreferrer">Cuatro Ciénagas</a></li>
            <li><a href="https://tourimex.com/parras-de-la-fuente-coahuila-coa/" target="_blank" rel="noreferrer">Parras de la Fuente</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Colima</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/comala-colima-col/" target="_blank" rel="noreferrer">Comala</a></li>
            <li><a href="https://tourimex.com/cuyutlan-colima-col/" target="_blank" rel="noreferrer">Cuyutlán</a></li>
            <li><a href="https://tourimex.com/manzanillo-colima-col/" target="_blank" rel="noreferrer">Manzanillo</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Durango</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/nombre-de-dios-durango-dur/" target="_blank" rel="noreferrer">Nombre de Dios</a></li>
            <li><a href="https://tourimex.com/mapimi-durango-dur/" target="_blank" rel="noreferrer">Mapimí</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Estado de México</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/aculco-de-espinoza-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Aculco de Espinoza</a></li>
            <li><a href="https://tourimex.com/el-oro-de-hidalgo-estado-de-mexico-mex/" target="_blank" rel="noreferrer">El Oro de Hidalgo</a></li>
            <li><a href="https://tourimex.com/malinalco-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Malinalco</a></li>
            <li><a href="https://tourimex.com/metepec-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Metepec</a></li>
            <li><a href="https://tourimex.com/tepotzotlan-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Tepotzotlán</a></li>
            <li><a href="https://tourimex.com/valle-de-bravo-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Valle de Bravo</a></li>
            <li><a href="https://tourimex.com/ixtapan-de-la-sal-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Ixtapan de la Sal</a></li>
            <li><a href="https://tourimex.com/villa-del-carbon-estado-de-mexico-mex/" target="_blank" rel="noreferrer">Villa del Carbón</a></li>
            <li><a href="https://tourimex.com/san-martin-de-las-piramides-estado-de-mexico-mex/" target="_blank" rel="noreferrer">San Martín de las Pirámides</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Guanajuato</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/guanajuato-guanajuato-gua/" target="_blank" rel="noreferrer">Guanajuato</a></li>
            <li><a href="https://tourimex.com/comonfort-guanajuato-gua/" target="_blank" rel="noreferrer">Comonfort</a></li>
            <li><a href="https://tourimex.com/dolores-hidalgo-guanajuato-gua/" target="_blank" rel="noreferrer">Dolores Hidalgo</a></li>
            <li><a href="https://tourimex.com/jalpa-guanajuato-gua/" target="_blank" rel="noreferrer">Jalpa</a></li>
            <li><a href="https://tourimex.com/mineral-de-pozos-guanajuato-gua/" target="_blank" rel="noreferrer">Mineral de Pozos</a></li>
            <li><a href="https://tourimex.com/salvatierra-guanajuato-gua/" target="_blank" rel="noreferrer">Salvatierra</a></li>
            <li><a href="https://tourimex.com/san-miguel-de-allende-guanajuato-gua/" target="_blank" rel="noreferrer">San Miguel de Allende</a></li>
            <li><a href="https://tourimex.com/yuriria-guanajuato-gua/" target="_blank" rel="noreferrer">Yuriria</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Guerrero</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/acapulco-guerrero-gro/" target="_blank" rel="noreferrer">Acapulco</a></li>
            <li><a href="https://tourimex.com/barra-vieja-guerrero-gro/" target="_blank" rel="noreferrer">Barra Vieja</a></li>
            <li><a href="https://tourimex.com/ixtapa-zihuatanejo-guerrero-gro/" target="_blank" rel="noreferrer">Ixtapa-Zihuatanejo</a></li>
            <li><a href="https://tourimex.com/marquelia-guerrero-gro/" target="_blank" rel="noreferrer">Marquelia</a></li>
            <li><a href="https://tourimex.com/pie-de-la-cuesta-guerrero-gro/" target="_blank" rel="noreferrer">Pie de la Cuesta</a></li>
            <li><a href="https://tourimex.com/taxco-guerrero-gro/" target="_blank" rel="noreferrer">Taxco de Alarcón</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Hidalgo</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/real-del-monte-hidalgo-hid/" target="_blank" rel="noreferrer">Real del Monte</a></li>
            <li><a href="https://tourimex.com/grutas-de-tolantongo-hidalgo-hid/" target="_blank" rel="noreferrer">Grutas de Tolantongo</a></li>
            <li><a href="https://tourimex.com/huasca-de-ocampo-hidalgo-hid/" target="_blank" rel="noreferrer">Huasca de Ocampo</a></li>
            <li><a href="https://tourimex.com/huichapan-hidalgo-hid/" target="_blank" rel="noreferrer">Huichapan</a></li>
            <li><a href="https://tourimex.com/mineral-del-chico-hidalgo-hid/" target="_blank" rel="noreferrer">Mineral del Chico</a></li>
            <li><a href="https://tourimex.com/tecozautla-hidalgo-hid/" target="_blank" rel="noreferrer">Tecozautla</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Jalisco</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/guadalajara-jalisco-jal/" target="_blank" rel="noreferrer">Guadalajara</a></li>
            <li><a href="https://tourimex.com/san-pedro-tlaquepaque-jalisco-jal/" target="_blank" rel="noreferrer">San Pedro Tlaquepaque</a></li>
            <li><a href="https://tourimex.com/mascota-jalisco-jal-2/" target="_blank" rel="noreferrer">Mascota</a></li>
            <li><a href="https://tourimex.com/barra-de-navidad-jalisco-jal/" target="_blank" rel="noreferrer">Barra de Navidad</a></li>
            <li><a href="https://tourimex.com/colomitos-boca-de-tomatlan-jalisco-jal/" target="_blank" rel="noreferrer">Colomitos – Boca de Tomatlán</a></li>
            <li><a href="https://tourimex.com/cabo-corrientes-jalisco-jal/" target="_blank" rel="noreferrer">Cabo Corrientes</a></li>
            <li><a href="https://tourimex.com/ribera-de-chapala-jalisco-jal/" target="_blank" rel="noreferrer">Ribera de Chapala</a></li>
            <li><a href="https://tourimex.com/chamela-jalisco-jal/" target="_blank" rel="noreferrer">Chamela</a></li>
            <li><a href="https://tourimex.com/costa-careyes-jalisco-jal/" target="_blank" rel="noreferrer">Costa Careyes</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Michoacán</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/morelia-michoacan-mic/" target="_blank" rel="noreferrer">Morelia</a></li>
            <li><a href="https://tourimex.com/paricutin-michoacan-mic/" target="_blank" rel="noreferrer">Paricutín</a></li>
            <li><a href="https://tourimex.com/cuitzeo-del-porvenir-michoacan-mic/" target="_blank" rel="noreferrer">Cuitzeo del Porvenir</a></li>
            <li><a href="https://tourimex.com/jiquilpan-michoacan-mic/" target="_blank" rel="noreferrer">Jiquilpan</a></li>
            <li><a href="https://tourimex.com/mineral-de-angangueo-michoacan-mic/" target="_blank" rel="noreferrer">Mineral de Angangueo</a></li>
            <li><a href="https://tourimex.com/barra-de-nexpa-michoacan-mic/" target="_blank" rel="noreferrer">Barra de Nexpa</a></li>
            <li><a href="https://tourimex.com/maruata-michoacan-mic/" target="_blank" rel="noreferrer">Maruata</a></li>
            <li><a href="https://tourimex.com/patzcuaro-michoacan-mic/" target="_blank" rel="noreferrer">Pátzcuaro</a></li>
            <li><a href="https://tourimex.com/playa-azul-michoacan-mic/" target="_blank" rel="noreferrer">Playa Azul</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Morelos</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/cuernavaca-morelos-mor/" target="_blank" rel="noreferrer">Cuernavaca</a></li>
            <li><a href="https://tourimex.com/tepoztlan-morelos-mor/" target="_blank" rel="noreferrer">Tepoztlán</a></li>
            <li><a href="https://tourimex.com/tlayacapan-morelos-mor/" target="_blank" rel="noreferrer">Tlayacapan</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Nayarit</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/bucerias-nayarit-nay/" target="_blank" rel="noreferrer">Bucerías</a></li>
            <li><a href="https://tourimex.com/chacala-nayarit-nay/" target="_blank" rel="noreferrer">Chacala</a></li>
            <li><a href="https://tourimex.com/cruz-de-huanacaxtle-nayarit-nay/" target="_blank" rel="noreferrer">Cruz de Huanacaxtle</a></li>
            <li><a href="https://tourimex.com/jala-nayarit-nay/" target="_blank" rel="noreferrer">Jala</a></li>
            <li><a href="https://tourimex.com/nuevo-vallarta-nayarit-nay/" target="_blank" rel="noreferrer">Nuevo Vallarta</a></li>
            <li><a href="https://tourimex.com/punta-de-mita-nayarit-nay/" target="_blank" rel="noreferrer">Punta de Mita</a></li>
            <li><a href="https://tourimex.com/rincon-de-guayabitos-nayarit-nay/" target="_blank" rel="noreferrer">Rincón de Guayabitos</a></li>
            <li><a href="https://tourimex.com/san-blas-nayarit-nay/" target="_blank" rel="noreferrer">San Blas</a></li>
            <li><a href="https://tourimex.com/san-francisco-nayarit-nay/" target="_blank" rel="noreferrer">San Francisco</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Nuevo León</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/bustamante-nuevo-leon-nle/" target="_blank" rel="noreferrer">Bustamante</a></li>
            <li><a href="https://tourimex.com/linares-nuevo-leon-nle/" target="_blank" rel="noreferrer">Linares</a></li>
            <li><a href="https://tourimex.com/santiago-nuevo-leon-nle/" target="_blank" rel="noreferrer">Santiago</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Oaxaca</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/san-pedro-y-san-pablo-teposcolula-oaxaca-oax/" target="_blank" rel="noreferrer">San Pedro y San Pablo Teposcolula</a></li>
            <li><a href="https://tourimex.com/huautla-de-jimenez-oaxaca-oax/" target="_blank" rel="noreferrer">Huautla de Jiménez</a></li>
            <li><a href="https://tourimex.com/ciudad-de-oaxaca-oaxaca-oax/" target="_blank" rel="noreferrer">Ciudad de Oaxaca</a></li>
            <li><a href="https://tourimex.com/mitla-oaxaca-oax/" target="_blank" rel="noreferrer">Mitla</a></li>
            <li><a href="https://tourimex.com/4954/" target="_blank" rel="noreferrer">Monte Albán</a></li>
            <li><a href="https://tourimex.com/bahias-de-huatulco-oaxaca-oax/" target="_blank" rel="noreferrer">Bahías de Huatulco</a></li>
            <li><a href="https://tourimex.com/calpulalpam-de-mendez-oaxaca-oax/" target="_blank" rel="noreferrer">Capulálpam de Méndez</a></li>
            <li><a href="https://tourimex.com/mazunte-oaxaca-oax/" target="_blank" rel="noreferrer">Mazunte</a></li>
            <li><a href="https://tourimex.com/puerto-escondido-oaxaca-oax/" target="_blank" rel="noreferrer">Puerto Escondido</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Puebla</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/puebla-puebla-pue/" target="_blank" rel="noreferrer">Puebla</a></li>
            <li><a href="https://tourimex.com/atlixco-puebla-pue/" target="_blank" rel="noreferrer">Atlixco</a></li>
            <li><a href="https://tourimex.com/chignahuapan-puebla-pue/" target="_blank" rel="noreferrer">Chignahuapan</a></li>
            <li><a href="https://tourimex.com/cholula-puebla-pue/" target="_blank" rel="noreferrer">Cholula</a></li>
            <li><a href="https://tourimex.com/huauchinango-puebla-pue/" target="_blank" rel="noreferrer">Huauchinango</a></li>
            <li><a href="https://tourimex.com/pahuatlan-puebla-pue/" target="_blank" rel="noreferrer">Pahuatlán</a></li>
            <li><a href="https://tourimex.com/cuetzalan-del-progreso-puebla-pue/" target="_blank" rel="noreferrer">Cuetzalan del Progreso</a></li>
            <li><a href="https://tourimex.com/tlatlauquitepec-puebla-pue/" target="_blank" rel="noreferrer">Tlatlauquitepec</a></li>
            <li><a href="https://tourimex.com/xicotepec-puebla-pue/" target="_blank" rel="noreferrer">Xicotepec</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Querétaro</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/queretaro-queretaro-que/" target="_blank" rel="noreferrer">Querétaro</a></li>
            <li><a href="https://tourimex.com/pena-de-bernal-queretaro-que/" target="_blank" rel="noreferrer">Peña de Bernal</a></li>
            <li><a href="https://tourimex.com/amealco-de-bonfil-queretaro-que/" target="_blank" rel="noreferrer">Amealco de Bonfil</a></li>
            <li><a href="https://tourimex.com/cadereyta-de-montes-queretaro-que/" target="_blank" rel="noreferrer">Cadereyta de Montes</a></li>
            <li><a href="https://tourimex.com/jalpan-de-serra-queretaro-que/" target="_blank" rel="noreferrer">Jalpan de Serra</a></li>
            <li><a href="https://tourimex.com/tequisquiapan-queretaro-que/" target="_blank" rel="noreferrer">Tequisquiapan</a></li>
            <li><a href="https://tourimex.com/san-joaquin-queretaro-que/" target="_blank" rel="noreferrer">San Joaquín</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Quintana Roo</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/akumal-quintana-roo-roo/" target="_blank" rel="noreferrer">Akumal</a></li>
            <li><a href="https://tourimex.com/bacalar-quintana-roo-roo/" target="_blank" rel="noreferrer">Bacalar</a></li>
            <li><a href="https://tourimex.com/cancun-quintana-roo-roo/" target="_blank" rel="noreferrer">Cancún</a></li>
            <li><a href="https://tourimex.com/coba-quintana-roo-roo/" target="_blank" rel="noreferrer">Cobá</a></li>
            <li><a href="https://tourimex.com/cozumel-quintana-roo-roo/" target="_blank" rel="noreferrer">Cozumel</a></li>
            <li><a href="https://tourimex.com/holbox-quintana-roo-roo/" target="_blank" rel="noreferrer">Holbox</a></li>
            <li><a href="https://tourimex.com/isla-mujeres-quintana-roo-roo/" target="_blank" rel="noreferrer">Isla Mujeres</a></li>
            <li><a href="https://tourimex.com/majahual-quintana-roo-roo/" target="_blank" rel="noreferrer">Majahual</a></li>
            <li><a href="https://tourimex.com/playa-del-carmen-quintana-roo-roo/" target="_blank" rel="noreferrer">Playa del Carmen</a></li>
            <li><a href="https://tourimex.com/tulum-quintana-roo-roo/" target="_blank" rel="noreferrer">Tulum</a></li>
            <li><a href="https://tourimex.com/puerto-morelos-quintana-roo-roo/" target="_blank" rel="noreferrer">Puerto Morelos</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 San Luis Potosí</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/san-luis-potosi-san-luis-potosi-slp/" target="_blank" rel="noreferrer">San Luis Potosí</a></li>
            <li><a href="https://tourimex.com/tamul-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Tamul</a></li>
            <li><a href="https://tourimex.com/sotano-de-las-golondrinas-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Sótano de las Golondrinas</a></li>
            <li><a href="https://tourimex.com/rio-verde-y-la-media-luna-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Río Verde y La Media Luna</a></li>
            <li><a href="https://tourimex.com/puente-de-dios-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Puente de Dios</a></li>
            <li><a href="https://tourimex.com/aquismon-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Aquismón</a></li>
            <li><a href="https://tourimex.com/la-huasteca-potosina-san-luis-potosi-slp/" target="_blank" rel="noreferrer">La Huasteca Potosina</a></li>
            <li><a href="https://tourimex.com/real-de-catorce-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Real de Catorce</a></li>
            <li><a href="https://tourimex.com/xilitla-san-luis-potosi-slp/" target="_blank" rel="noreferrer">Xilitla</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Sinaloa</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/cosala-sinaloa-sin/" target="_blank" rel="noreferrer">Cosalá</a></li>
            <li><a href="https://tourimex.com/el-fuerte-sinaloa-sin/" target="_blank" rel="noreferrer">El Fuerte</a></li>
            <li><a href="https://tourimex.com/el-rosario-sinaloa-sin/" target="_blank" rel="noreferrer">El Rosario</a></li>
            <li><a href="https://tourimex.com/mazatlan-sinaloa-sin/" target="_blank" rel="noreferrer">Mazatlán</a></li>
            <li><a href="https://tourimex.com/topolobampo-sinaloa-sin/" target="_blank" rel="noreferrer">Topolobampo</a></li>
            <li><a href="https://tourimex.com/mocorito-sinaloa-sin/" target="_blank" rel="noreferrer">Mocorito</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Sonora</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/magdalena-de-kino-sonora-son/" target="_blank" rel="noreferrer">Magdalena de Kino</a></li>
            <li><a href="https://tourimex.com/alamos-sonora-son/" target="_blank" rel="noreferrer">Álamos</a></li>
            <li><a href="https://tourimex.com/bahia-de-kino-sonora-son/" target="_blank" rel="noreferrer">Bahía de Kino</a></li>
            <li><a href="https://tourimex.com/san-carlos-sonora-son/" target="_blank" rel="noreferrer">San Carlos</a></li>
            <li><a href="https://tourimex.com/guaymas-sonora-son/" target="_blank" rel="noreferrer">Guaymas</a></li>
            <li><a href="https://tourimex.com/puerto-penasco-sonora-son/" target="_blank" rel="noreferrer">Puerto Peñasco</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Tabasco</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/villahermosa-tabasco-tab/" target="_blank" rel="noreferrer">Villahermosa</a></li>
            <li><a href="https://tourimex.com/tapijulapa-tabasco-tab/" target="_blank" rel="noreferrer">Tapijulapa</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Tamaulipas</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/mier-tamaulipas-tam/" target="_blank" rel="noreferrer">Mier</a></li>
            <li><a href="https://tourimex.com/tula-tamaulipas-tam/" target="_blank" rel="noreferrer">Tula</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Tlaxcala</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/tlaxcala-tlaxcala-tla/" target="_blank" rel="noreferrer">Tlaxcala</a></li>
            <li><a href="https://tourimex.com/huamantla-tlaxcala-tla/" target="_blank" rel="noreferrer">Huamantla</a></li>
            <li><a href="https://tourimex.com/tlaxco-tlaxcala-tla/" target="_blank" rel="noreferrer">Tlaxco</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Veracruz</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/xalapa-veracruz-ver/" target="_blank" rel="noreferrer">Xalapa</a></li>
            <li><a href="https://tourimex.com/papantla-veracruz-ver/" target="_blank" rel="noreferrer">Papantla</a></li>
            <li><a href="https://tourimex.com/barra-de-nautla-veracruz-ver/" target="_blank" rel="noreferrer">Barra de Nautla</a></li>
            <li><a href="https://tourimex.com/boca-del-rio-veracruz-ver/" target="_blank" rel="noreferrer">Boca del Río</a></li>
            <li><a href="https://tourimex.com/coatepec-veracruz-ver/" target="_blank" rel="noreferrer">Coatepec</a></li>
            <li><a href="https://tourimex.com/coscomatepec-veracruz-ver/" target="_blank" rel="noreferrer">Coscomatepec</a></li>
            <li><a href="https://tourimex.com/monte-gordo-veracruz-ver/" target="_blank" rel="noreferrer">Monte Gordo</a></li>
            <li><a href="https://tourimex.com/cumbre-tajin-veracruz-ver/" target="_blank" rel="noreferrer">Cumbre Tajín</a></li>
            <li><a href="https://tourimex.com/la-isla-de-en-medio-veracruz-ver/" target="_blank" rel="noreferrer">La Isla de en Medio</a></li>
            <li><a href="https://tourimex.com/anton-lizardo-veracruz-ver/" target="_blank" rel="noreferrer">Antón Lizardo</a></li>
            <li><a href="https://tourimex.com/la-vigueta-veracruz-ver/" target="_blank" rel="noreferrer">La Vigueta</a></li>
            <li><a href="https://tourimex.com/punta-roca-partida-veracruz-ver/" target="_blank" rel="noreferrer">Punta Roca Partida</a></li>
            <li><a href="https://tourimex.com/playa-montepio-veracruz-ver/" target="_blank" rel="noreferrer">Playa Montepío</a></li>
            <li><a href="https://tourimex.com/catemaco-veracruz-ver/" target="_blank" rel="noreferrer">Catemaco</a></li>
            <li><a href="https://tourimex.com/la-antigua-veracruz-ver/" target="_blank" rel="noreferrer">La Antigua</a></li>
            <li><a href="https://tourimex.com/chachalacas-veracruz-ver/" target="_blank" rel="noreferrer">Chachalacas</a></li>
            <li><a href="https://tourimex.com/cancuncito-veracruz-ver/" target="_blank" rel="noreferrer">Cancuncito</a></li>
            <li><a href="https://tourimex.com/puerto-veracruz-veracruz-ver/" target="_blank" rel="noreferrer">Puerto Veracruz</a></li>
            <li><a href="https://tourimex.com/tecolutla-veracruz-ver/" target="_blank" rel="noreferrer">Tecolutla</a></li>
            <li><a href="https://tourimex.com/xico-veracruz-ver/" target="_blank" rel="noreferrer">Xico</a></li>
            <li><a href="https://tourimex.com/zozocolco-veracruz-ver/" target="_blank" rel="noreferrer">Zozocolco</a></li>
            <li><a href="https://tourimex.com/category/pueblos-magicos/" target="_blank" rel="noreferrer">Orizaba</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Yucatán</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/merida-yucatan-yuc/" target="_blank" rel="noreferrer">Mérida</a></li>
            <li><a href="https://tourimex.com/chichen-itza-yucatan-yuc/" target="_blank" rel="noreferrer">Chichén Itzá</a></li>
            <li><a href="https://tourimex.com/izamal-yucatan-yuc/" target="_blank" rel="noreferrer">Izamal</a></li>
            <li><a href="https://tourimex.com/puerto-progreso-yucatan-yuc/" target="_blank" rel="noreferrer">Puerto Progreso</a></li>
            <li><a href="https://tourimex.com/sisal-yucatan-yuc/" target="_blank" rel="noreferrer">Sisal</a></li>
            <li><a href="https://tourimex.com/puerto-telchac-yucatan-yuc/" target="_blank" rel="noreferrer">Puerto Telchac</a></li>
            <li><a href="https://tourimex.com/uxmal-yucatan-yuc/" target="_blank" rel="noreferrer">Uxmal</a></li>
            <li><a href="https://tourimex.com/valladolid-yucatan-yuc/" target="_blank" rel="noreferrer">Valladolid</a></li>
          </ul>
        </div>

        <div className="card state-card">
          <h3>📍 Zacatecas</h3>
          <ul className="municipality-list">
            <li><a href="https://tourimex.com/zacatecas-zacatecas-zac/" target="_blank" rel="noreferrer">Zacatecas</a></li>
            <li><a href="https://tourimex.com/sombrerete-zacatecas-zac/" target="_blank" rel="noreferrer">Sombrerete</a></li>
            <li><a href="https://tourimex.com/teul-de-gonzalez-ortega-zacatecas-zac/" target="_blank" rel="noreferrer">Teúl de González Ortega</a></li>
            <li><a href="https://tourimex.com/pinos-zacatecas-zac/" target="_blank" rel="noreferrer">Pinos</a></li>
            <li><a href="https://tourimex.com/nochistlan-de-mejia-zacatecas-zac/" target="_blank" rel="noreferrer">Nochistlán de Mejía</a></li>
            <li><a href="https://tourimex.com/jerez-de-garcia-salinas-zacatecas-zac/" target="_blank" rel="noreferrer">Jerez de García Salinas</a></li>
            <li><a href="https://tourimex.com/guadalupe-zacatecas-zac/" target="_blank" rel="noreferrer">Guadalupe</a></li>
          </ul>
        </div>
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        <button className="nav-btn" onClick={() => navTo('home')}>🏠 <span>{t('btn_home') || 'Inicio'}</span></button>
      </div>
    </div>
  )
}

export default StatesPage
