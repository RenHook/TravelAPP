function Header({ currentPage, navTo }) {
  const isHome = currentPage === 'home'

  return (
    <header>
      <button
        className="back-btn"
        style={{ visibility: isHome ? 'hidden' : 'visible' }}
        onClick={() => navTo('home')}
      >
        ←
      </button>
      <h1 id="headerTitle">mexicotravelsmart.mx</h1>
      <button
        className="home-btn"
        style={{ visibility: isHome ? 'hidden' : 'visible' }}
        onClick={() => navTo('home')}
      >
        🏡
      </button>
    </header>
  )
}

export default Header
