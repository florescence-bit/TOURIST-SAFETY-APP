import React, { useState } from 'react';
import Card from '../components/Card';
import './../styles/components.css';

const emptyContact = { name: '', relationship: '', phone: '' };
const emptyItinerary = { location: '', date: '', type: '' };

const Registration = () => {
  const [step, setStep] = useState(1);
  const [basic, setBasic] = useState({ fullName: '', email: '', phone: '', entryPoint: '' });
  const [kyc, setKyc] = useState({ docType: 'Passport', docNumber: '' });
  const [duration, setDuration] = useState({ checkIn: '', checkOut: '' });
  const [itinerary, setItinerary] = useState([ { ...emptyItinerary } ]);
  const [contacts, setContacts] = useState([ { ...emptyContact } ]);
  const [generatedID, setGeneratedID] = useState(null);

  function addItinerary() {
    setItinerary(p => [...p, { ...emptyItinerary }]);
  }
  function addContact() {
    setContacts(p => [...p, { ...emptyContact }]);
  }

  function handleGenerate() {
    const id = 'SITSS-' + Math.random().toString(36).slice(2,10).toUpperCase();
    setGeneratedID({ id, basic, kyc, duration, itinerary, contacts });
    setStep(5);
  }

  return (
    <div className="container registration-page">
      <h2>Create Your Digital Tourist ID</h2>

      {step === 1 && (
        <Card title="Basic Information">
          <label>Full Name<input value={basic.fullName} onChange={e => setBasic({...basic, fullName: e.target.value})} /></label>
          <label>Email<input value={basic.email} onChange={e => setBasic({...basic, email: e.target.value})} /></label>
          <label>Phone<input value={basic.phone} onChange={e => setBasic({...basic, phone: e.target.value})} /></label>
          <label>Entry Point<input value={basic.entryPoint} onChange={e => setBasic({...basic, entryPoint: e.target.value})} /></label>

          <div className="form-actions">
            <button className="btn primary" onClick={() => setStep(2)}>Next</button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card title="KYC Information">
          <label>Document Type
            <select value={kyc.docType} onChange={e => setKyc({...kyc, docType: e.target.value})}>
              <option>Passport</option>
              <option>Aadhaar</option>
              <option>Other</option>
            </select>
          </label>
          <label>Document Number<input value={kyc.docNumber} onChange={e => setKyc({...kyc, docNumber: e.target.value})} /></label>
          <div className="form-actions">
            <button className="btn ghost" onClick={() => setStep(1)}>Back</button>
            <button className="btn primary" onClick={() => setStep(3)}>Next</button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card title="Visit Duration & Itinerary">
          <label>Check-in Date<input type="date" value={duration.checkIn} onChange={e => setDuration({...duration, checkIn: e.target.value})} /></label>
          <label>Check-out Date<input type="date" value={duration.checkOut} onChange={e => setDuration({...duration, checkOut: e.target.value})} /></label>

          <h4>Trip Itinerary</h4>
          {itinerary.map((it, idx) => (
            <div key={idx} className="itinerary-row">
              <input placeholder="Location" value={it.location} onChange={e => {
                const arr = [...itinerary]; arr[idx].location = e.target.value; setItinerary(arr);
              }} />
              <input type="date" value={it.date} onChange={e => { const arr = [...itinerary]; arr[idx].date = e.target.value; setItinerary(arr); }} />
              <input placeholder="Type (Hotel/Transport/Attraction)" value={it.type} onChange={e => { const arr = [...itinerary]; arr[idx].type = e.target.value; setItinerary(arr); }} />
            </div>
          ))}
          <div className="form-actions">
            <button className="btn ghost" onClick={addItinerary}>Add More</button>
          </div>

          <div className="form-actions">
            <button className="btn ghost" onClick={() => setStep(2)}>Back</button>
            <button className="btn primary" onClick={() => setStep(4)}>Next</button>
          </div>
        </Card>
      )}

      {step === 4 && (
        <Card title="Emergency Contacts">
          {contacts.map((c, idx) => (
            <div key={idx} className="contact-row">
              <input placeholder="Name" value={c.name} onChange={e => { const arr = [...contacts]; arr[idx].name = e.target.value; setContacts(arr); }} />
              <input placeholder="Relationship" value={c.relationship} onChange={e => { const arr = [...contacts]; arr[idx].relationship = e.target.value; setContacts(arr); }} />
              <input placeholder="Phone" value={c.phone} onChange={e => { const arr = [...contacts]; arr[idx].phone = e.target.value; setContacts(arr); }} />
            </div>
          ))}
          <div className="form-actions">
            <button className="btn ghost" onClick={addContact}>Add Contact</button>
          </div>

          <div className="form-actions">
            <button className="btn ghost" onClick={() => setStep(3)}>Back</button>
            <button className="btn action" onClick={handleGenerate}>Generate Digital Tourist ID</button>
          </div>
        </Card>
      )}

      {step === 5 && generatedID && (
        <Card title="Your Digital Tourist ID">
          <p><strong>ID:</strong> {generatedID.id}</p>
          <p><strong>Name:</strong> {generatedID.basic.fullName}</p>
          <p><strong>Entry Point:</strong> {generatedID.basic.entryPoint}</p>
          <p><strong>Check-in:</strong> {generatedID.duration.checkIn} — <strong>Check-out:</strong> {generatedID.duration.checkOut}</p>
          <div className="form-actions">
            <button className="btn primary">Download ID (PDF)</button>
            <button className="btn ghost" onClick={() => setStep(1)}>Create Another</button>
          </div>
        </Card>
      )}

    </div>
  );
};

export default Registration;
