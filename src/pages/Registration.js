import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepDot from '../components/StepDots';
import './../styles/registration.css';

const entryPoints = [
  'Airport', 'Railway Station', 'Hotel', 'Border Check-post'
];
const docTypes = [
  'Passport', 'Aadhaar', 'Driving License'
];
const genderOptions = [
  'Male', 'Female', 'Other'
];
const itineraryTypes = [
  'Hotel', 'Attraction', 'Transit', 'Other'
];

const Registration = () => {
  const location = useLocation();
  // Start at step 2 if navigated from Welcome page, else default to 2
  const initialStep = location.state?.step || 2;
  const [step, setStep] = useState(initialStep);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', entryPoint: '',
    docType: '', docNumber: '', dob: '', gender: '', photo: null,
    checkIn: '', checkOut: '', itinerary: [], contacts: []
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Dynamic fields handlers
  const addItinerary = () => setForm(f => ({
    ...f,
    itinerary: [...f.itinerary, { location: '', date: '', type: '' }]
  }));
  const removeItinerary = idx => setForm(f => ({
    ...f,
    itinerary: f.itinerary.filter((_, i) => i !== idx)
  }));
  const updateItinerary = (idx, key, value) => setForm(f => ({
    ...f,
    itinerary: f.itinerary.map((item, i) =>
      i === idx ? { ...item, [key]: value } : item
    )
  }));

  const addContact = () => setForm(f => ({
    ...f,
    contacts: [...f.contacts, { name: '', relationship: '', phone: '' }]
  }));
  const removeContact = idx => setForm(f => ({
    ...f,
    contacts: f.contacts.filter((_, i) => i !== idx)
  }));
  const updateContact = (idx, key, value) => setForm(f => ({
    ...f,
    contacts: f.contacts.map((item, i) =>
      i === idx ? { ...item, [key]: value } : item
    )
  }));

  // Photo upload
  const handlePhoto = e => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, photo: e.target.files[0] });
    }
  };

  // Validation
  const validateStep = () => {
    let err = {};
    if (step === 2) {
      if (!form.fullName) err.fullName = 'Required';
      if (!form.email) err.email = 'Required';
      if (!form.phone) err.phone = 'Required';
      if (!form.entryPoint) err.entryPoint = 'Required';
    }
    if (step === 3) {
      if (!form.docType) err.docType = 'Required';
      if (!form.docNumber) err.docNumber = 'Required';
      if (!form.dob) err.dob = 'Required';
      if (!form.gender) err.gender = 'Required';
      if (!form.photo) err.photo = 'Required';
    }
    if (step === 4) {
      if (!form.checkIn) err.checkIn = 'Required';
      if (!form.checkOut) err.checkOut = 'Required';
    }
    if (step === 5) {
      if (!form.itinerary.length) err.itinerary = 'Add at least one location';
      form.itinerary.forEach((item, idx) => {
        if (!item.location || !item.date || !item.type) {
          err[`itinerary${idx}`] = 'Fill all fields';
        }
      });
    }
    if (step === 6) {
      if (!form.contacts.length) err.contacts = 'Add at least one contact';
      form.contacts.forEach((item, idx) => {
        if (!item.name || !item.relationship || !item.phone) {
          err[`contacts${idx}`] = 'Fill all fields';
        }
      });
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Step navigation
  const handleNext = e => {
    e.preventDefault();
    if (validateStep()) setStep(s => s + 1);
  };
  const handlePrev = () => setStep(s => s - 1);

  // Final submit
  const handleSubmit = e => {
    e.preventDefault();
    if (validateStep()) setShowModal(true);
  };

  return (
    <div className="registration-gradient-bg">
      <div className="registration-form-card">
        {step === 2 && (
          <form onSubmit={handleNext}>
            <h2 className="registration-form-title">Basic Information</h2>
            <div className="registration-row">
              <div className="registration-field">
                <label>Full Name *</label>
                <input name="fullName" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} placeholder="Enter full name" />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>
              <div className="registration-field">
                <label>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Enter email address" />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="registration-row">
              <div className="registration-field">
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXXXXXXX" />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="registration-field">
                <label>Entry Point *</label>
                <select name="entryPoint" value={form.entryPoint} onChange={e => setForm({ ...form, entryPoint: e.target.value })}>
                  <option value="">Select entry point</option>
                  {entryPoints.map(p => <option key={p}>{p}</option>)}
                </select>
                {errors.entryPoint && <span className="error">{errors.entryPoint}</span>}
              </div>
            </div>
            <div className="registration-actions">
              <button type="submit" className="welcome-btn">Next</button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleNext}>
            <h2 className="registration-form-title">KYC & Digital ID</h2>
            <div className="registration-row">
              <div className="registration-field">
                <label>Document Type *</label>
                <select name="docType" value={form.docType} onChange={e => setForm({ ...form, docType: e.target.value })}>
                  <option value="">Select document</option>
                  {docTypes.map(d => <option key={d}>{d}</option>)}
                </select>
                {errors.docType && <span className="error">{errors.docType}</span>}
              </div>
              <div className="registration-field">
                <label>Document Number *</label>
                <input name="docNumber" value={form.docNumber} onChange={e => setForm({ ...form, docNumber: e.target.value })} placeholder="Enter document number" />
                {errors.docNumber && <span className="error">{errors.docNumber}</span>}
              </div>
            </div>
            <div className="registration-row">
              <div className="registration-field">
                <label>Date of Birth *</label>
                <input type="date" name="dob" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} placeholder="Select date of birth" />
                {errors.dob && <span className="error">{errors.dob}</span>}
              </div>
              <div className="registration-field">
                <label>Gender *</label>
                <select name="gender" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
                  <option value="">Select gender</option>
                  {genderOptions.map(g => <option key={g}>{g}</option>)}
                </select>
                {errors.gender && <span className="error">{errors.gender}</span>}
              </div>
            </div>
            <div className="registration-row">
              <div className="registration-field">
                <label>Photo Upload *</label>
                <input type="file" accept="image/*" onChange={handlePhoto} />
                {errors.photo && <span className="error">{errors.photo}</span>}
              </div>
            </div>
            <div className="registration-actions">
              <button type="button" className="welcome-btn" onClick={handlePrev}>Back</button>
              <button type="submit" className="welcome-btn">Next</button>
            </div>
          </form>
        )}
        {step === 4 && (
          <form onSubmit={handleNext}>
            <h2 className="registration-form-title">Visit Duration</h2>
            <div className="registration-row">
              <div className="registration-field">
                <label>Check-in Date *</label>
                <input type="date" name="checkIn" value={form.checkIn} onChange={e => setForm({ ...form, checkIn: e.target.value })} placeholder="Select check-in date" />
                {errors.checkIn && <span className="error">{errors.checkIn}</span>}
              </div>
              <div className="registration-field">
                <label>Check-out Date *</label>
                <input type="date" name="checkOut" value={form.checkOut} onChange={e => setForm({ ...form, checkOut: e.target.value })} placeholder="Select check-out date" />
                {errors.checkOut && <span className="error">{errors.checkOut}</span>}
              </div>
            </div>
            <div className="registration-actions">
              <button type="button" className="welcome-btn" onClick={handlePrev}>Back</button>
              <button type="submit" className="welcome-btn">Next</button>
            </div>
          </form>
        )}
        {step === 5 && (
          <form onSubmit={handleNext}>
            <h2 className="registration-form-title">Trip Itinerary</h2>
            {errors.itinerary && <span className="error">{errors.itinerary}</span>}
            {form.itinerary.map((item, idx) => (
              <div className="registration-row" key={idx}>
                <div className="registration-field">
                  <input placeholder="Location" value={item.location} onChange={e => updateItinerary(idx, 'location', e.target.value)} />
                </div>
                <div className="registration-field">
                  <input type="date" value={item.date} onChange={e => updateItinerary(idx, 'date', e.target.value)} />
                </div>
                <div className="registration-field">
                  <select value={item.type} onChange={e => updateItinerary(idx, 'type', e.target.value)}>
                    <option value="">Type</option>
                    {itineraryTypes.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <button type="button" className="add-btn" onClick={() => removeItinerary(idx)}>Remove</button>
                {errors[`itinerary${idx}`] && <span className="error">{errors[`itinerary${idx}`]}</span>}
              </div>
            ))}
            <div className="registration-actions">
              <button type="button" className="add-btn" onClick={addItinerary}>Add Location</button>
            </div>
            <div className="registration-actions">
              <button type="button" className="welcome-btn" onClick={handlePrev}>Back</button>
              <button type="submit" className="welcome-btn">Next</button>
            </div>
          </form>
        )}
        {step === 6 && (
          <form onSubmit={handleSubmit}>
            <h2 className="registration-form-title">Emergency Contacts</h2>
            {errors.contacts && <span className="error">{errors.contacts}</span>}
            {form.contacts.map((item, idx) => (
              <div className="registration-row" key={idx}>
                <div className="registration-field">
                  <input placeholder="Name" value={item.name} onChange={e => updateContact(idx, 'name', e.target.value)} />
                </div>
                <div className="registration-field">
                  <input placeholder="Relationship" value={item.relationship} onChange={e => updateContact(idx, 'relationship', e.target.value)} />
                </div>
                <div className="registration-field">
                  <input placeholder="Phone" value={item.phone} onChange={e => updateContact(idx, 'phone', e.target.value)} />
                </div>
                <button type="button" className="add-btn" onClick={() => removeContact(idx)}>Remove</button>
                {errors[`contacts${idx}`] && <span className="error">{errors[`contacts${idx}`]}</span>}
              </div>
            ))}
            <div className="registration-actions">
              <button type="button" className="add-btn" onClick={addContact}>Add Contact</button>
            </div>
            <div className="registration-actions">
              <button type="button" className="welcome-btn" onClick={handlePrev}>Back</button>
              <button type="submit" className="welcome-btn">Submit</button>
            </div>
          </form>
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Registration Successful!</h3>
              <p>Your digital tourist ID has been generated.</p>
              <button className="welcome-btn" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
        {/* StepDot at the bottom, same alignment as Welcome page */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <StepDot step={step} total={6} />
        </div>
      </div>
    </div>
  );
};

export default Registration;