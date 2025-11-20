import Icon from './Icon.jsx'

export default function Services(){
  return (
    <section id="services" className="section alt bg-night-1">
      <div className="container">
        <h3>Services</h3>
        <div className="cards five">
          <div className="card"><h4><Icon name="birthday" /> Birthday Parties</h4><p>Signature drinks that sparkle.</p></div>
          <div className="card"><h4><Icon name="house" /> House Parties</h4><p>Compact setup, zero hassle.</p></div>
          <div className="card"><h4><Icon name="wedding" /> Wedding Functions</h4><p>Elegant bars and experienced mixologists.</p></div>
          <div className="card"><h4><Icon name="party" /> After Party</h4><p>Keep the energy high.</p></div>
          <div className="card"><h4><Icon name="bachelor" /> Bachelor's Party</h4><p>Unforgettable night, curated menu.</p></div>
        </div>
      </div>
    </section>
  )
}


