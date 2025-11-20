import heroImg from '../assets/bar_tending.jpg'

export default function Hero(){
  const style = {
    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.65)), url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <section className="hero" style={style}>
      <div className="container">
        <h2>Crafted drinks. Seamless events.</h2>
        <p>From house parties to weddings, our team brings premium bar experiences with flexible pricing and effortless booking.</p>
        <a className="btn primary" href="#book">Book Your Event</a>
      </div>
    </section>
  )
}


