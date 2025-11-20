import Icon from './Icon.jsx'

export default function Products(){
  return (
    <section id="products" className="section bg-night-2">
      <div className="container">
        <h3>Products</h3>
        <div className="cards five">
          <div className="card"><h4><Icon name="cocktail" /> Whiskey</h4><p>Classic and smoky craft variants.</p></div>
          <div className="card"><h4><Icon name="cocktail" /> Rum</h4><p>Tropical notes and spiced blends.</p></div>
          <div className="card"><h4><Icon name="cocktail" /> Gin</h4><p>Botanical-forward modern twists.</p></div>
          <div className="card"><h4><Icon name="cocktail" /> Vodka</h4><p>Crisp, clean, versatile mixes.</p></div>
          <div className="card"><h4><Icon name="cocktail" /> Wine</h4><p>Spritzers and sangrias.</p></div>
          <div className="card"><h4><Icon name="cocktail" /> On Demand</h4><p>Custom cocktails to suit your event.</p></div>
        </div>
        <div className="cards two" style={{ marginTop: 16 }}>
          <div className="card"><h4><Icon name="mocktail" /> Signature Mocktails</h4><p>Designed for bold flavors without alcohol.</p></div>
          <div className="card"><h4><Icon name="mocktail" /> Classic Mocktails</h4><p>Timeless favorites everyone enjoys.</p></div>
        </div>
        <aside className="note" style={{ marginTop: 16 }}>
          <p>All bookings include free unlimited cocktails and mocktails as per the selected package and event duration.</p>
        </aside>
      </div>
    </section>
  )
}


