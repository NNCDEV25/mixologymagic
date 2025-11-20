import { useEffect, useMemo, useState } from 'react';
import Icon from './Icon.jsx';

const STORAGE_KEY = 'mixology_magic_owner_v1';

export default function Booking() {
  const [owner, setOwner] = useState({
    eventAddress: '',
    priceStag: '',
    priceCouple: '',
    locked: false,
  });
  const [form, setForm] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    memberType: '',
    requirements: '',
  });
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setOwner(prev => ({ ...prev, ...JSON.parse(raw) }));
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(owner));
  }, [owner]);

  const displayPrice = useMemo(() => {
    if (form.memberType === 'stag' && owner.priceStag)
      return `₹ ${owner.priceStag}`;
    if (form.memberType === 'couple' && owner.priceCouple)
      return `₹ ${owner.priceCouple}`;
    return '';
  }, [form.memberType, owner.priceStag, owner.priceCouple]);

  function updateForm(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isValid(form))
      return alert('Please complete all required fields correctly.');

    const payload = { ...form };
    setConfirmation({ payload });

    // WhatsApp message (only required fields)
    const msg = `
Booking Enquiry
----------------------
Name: ${payload.userName}
Phone: ${payload.userPhone}
Email: ${payload.userEmail}
Member Type: ${payload.memberType}
Requirements: ${payload.requirements || '—'}
Event Address: ${owner.eventAddress || 'To be shared by owner.'}
`;

    const phone = '9742818488';
    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');

    setForm({
      userName: '',
      userPhone: '',
      userEmail: '',
      memberType: '',
      requirements: '',
    });
  }

  function isValid(d) {
    const phoneOk = /^[0-9]{10}$/.test(d.userPhone);
    const emailOk = /.+@.+\..+/.test(d.userEmail);
    return Boolean(d.userName && phoneOk && emailOk && d.memberType);
  }

  return (
    <section id="book" className="section alt bg-night-3">
      <div className="container grid two">
        <div>
          <h3>
            <Icon name="party" /> Booking Form
          </h3>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-row">
              <label htmlFor="userName">
                <Icon name="email" /> Name
              </label>
              <input
                id="userName"
                name="userName"
                value={form.userName}
                onChange={updateForm}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-row two">
              <div>
                <label htmlFor="userPhone">
                  <Icon name="phone" /> Contact Number
                </label>
                <input
                  id="userPhone"
                  name="userPhone"
                  value={form.userPhone}
                  onChange={updateForm}
                  placeholder="10-digit mobile"
                  required
                />
              </div>
              <div>
                <label htmlFor="userEmail">
                  <Icon name="email" /> Email ID
                </label>
                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  value={form.userEmail}
                  onChange={updateForm}
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-row two">
              <div>
                <label htmlFor="memberType">
                  <Icon name="party" /> Members
                </label>
                <select
                  id="memberType"
                  name="memberType"
                  value={form.memberType}
                  onChange={updateForm}
                  required
                >
                  <option value="">Select</option>
                  <option value="stag">Stag</option>
                  <option value="couple">Couple</option>
                </select>
              </div>
              {/* <div>
                <label htmlFor="price"><Icon name="wallet" /> Price (auto)</label>
                <input id="price" readOnly value={displayPrice} placeholder="Set by owner" />
              </div> */}
            </div>
            <div className="form-row">
              <label htmlFor="requirements">
                <Icon name="party" /> Requirements / Who is joining
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                value={form.requirements}
                onChange={updateForm}
                placeholder="Describe your event, number of guests, special requests..."
              ></textarea>
            </div>
            <div className="form-row">
              <label className="checkbox">
                <input type="checkbox" checked readOnly />
                <span>Free unlimited cocktails & mocktails</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn primary">
                Send Enquiry on WhatsApp
              </button>
              <p className="help">Your enquiry will be sent to WhatsApp.</p>
            </div>
          </form>

          {confirmation && (
            <div className="confirmation" aria-live="polite">
              <div>
                <h4 className="ok">Enquiry Sent</h4>
                <p>
                  <strong>Name:</strong> {confirmation.payload.userName}
                </p>
                <p>
                  <strong>Contact:</strong> {confirmation.payload.userPhone} ·{' '}
                  {confirmation.payload.userEmail}
                </p>
                <p>
                  <strong>Members:</strong>{' '}
                  {confirmation.payload.memberType === 'couple'
                    ? 'Couple'
                    : 'Stag'}
                </p>
                <p>
                  <strong>Requirements:</strong>{' '}
                  {confirmation.payload.requirements || '—'}
                </p>
                <p>
                  <strong>Event Address:</strong>{' '}
                  {owner.eventAddress || 'To be shared by owner.'}
                </p>
              </div>
              <hr style={{ borderColor: 'var(--border)' }} />
              <div>
                <p>
                  <strong>Next step:</strong> We have received your enquiry on
                  WhatsApp. You will be contacted shortly.
                </p>
              </div>
            </div>
          )}
        </div>

        <aside>
          <h4>Owner Controls</h4>
          <p className="muted">
            Set event address and pricing (saved on this device).
          </p>
          <form className="form compact" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <label htmlFor="eventAddress">Event Address</label>
              <textarea
                id="eventAddress"
                rows={3}
                value={owner.eventAddress}
                onChange={e =>
                  setOwner(o => ({ ...o, eventAddress: e.target.value }))
                }
                placeholder="Address for the next event"
              ></textarea>
            </div>
            {/* <div className="form-row two">
              <div>
                <label htmlFor="priceStag">Price — Stag</label>
                <input id="priceStag" type="number" min="0" step="1" value={owner.priceStag} onChange={e => setOwner(o => ({ ...o, priceStag: e.target.value }))} placeholder="e.g. 999" />
              </div>
              <div>
                <label htmlFor="priceCouple">Price — Couple</label>
                <input id="priceCouple" type="number" min="0" step="1" value={owner.priceCouple} onChange={e => setOwner(o => ({ ...o, priceCouple: e.target.value }))} placeholder="e.g. 1499" />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn" onClick={() => alert('Saved settings.')}>Save Settings</button>
              <button type="button" className="btn ghost" onClick={() => setOwner({ eventAddress: '', priceStag: '', priceCouple: '', locked: owner.locked })}>Reset</button>
            </div>
            <p className="muted tiny">Tip: Toggle a simple lock below to avoid accidental edits.</p>
            <label className="switch">
              <input type="checkbox" checked={owner.locked} onChange={e => setOwner(o => ({ ...o, locked: e.target.checked }))} />
              <span>Lock owner controls</span>
            </label> */}
          </form>
        </aside>
      </div>
    </section>
  );
}
