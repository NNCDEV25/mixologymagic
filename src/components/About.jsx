export default function About(){
  return (
    <section id="about" className="section">
      <div className="container grid two">
        <div>
          <h3>About Mixology Magic</h3>
          <p>We blend hospitality, speed, and showmanship to keep your guests delighted from first pour to last call.</p>
        </div>
        <div className="cards two">
          <div className="card">
            <h4>Our Expertise</h4>
            <ul className="checklist">
              <li>Menu curation for cocktails and mocktails</li>
              <li>Professional, well-groomed bartenders</li>
              <li>Setup, glassware guidance, and workflow</li>
              <li>High-volume, fast service</li>
            </ul>
          </div>
          <div className="card">
            <h4>Our Strengths</h4>
            <ul className="checklist">
              <li>Consistent taste and presentation</li>
              <li>Transparent, configurable pricing</li>
              <li>Punctual and reliable team</li>
              <li>On-demand customizations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


