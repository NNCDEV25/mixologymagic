import Icon from './Icon.jsx'

export default function Payment(){
  return (
    <section id="payment" className="section bg-night-4">
      <div className="container grid two">
        <div>
          <h3><Icon name="wallet" /> Payment</h3>
          <p><strong>Accepted:</strong> GPay and PhonePe <span className="muted tiny">(UPI)</span></p>
          <div className="paybox">
            <div>
              <div className="label">Mobile Number</div>
              <div className="value">97428 18488</div>
            </div>
            <div className="muted">Add a note with your name and booking date.</div>
          </div>
        </div>
        <aside className="note">
          <p>After payment is received, booking confirmation will be sent to your contact number and email ID.</p>
        </aside>
      </div>
    </section>
  )
}


