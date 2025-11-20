export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo" aria-hidden="true">🍸</div>
          <div>
            <h1 className="site-title">Mixology Magic</h1>
            <p className="site-tagline">Craft cocktails, signature mocktails, and pro bartenders.</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}


