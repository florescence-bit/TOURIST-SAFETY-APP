import React, { useState } from 'react';
import './../styles/registration.css';

const steps = [
  { label: 'Account Setup' },
  { label: 'Social Profiles' },
  { label: 'Personal Details' }
];

const Registration = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    social: '',
    personal: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = e => {
    e.preventDefault();
    if (step < steps.length) setStep(step + 1);
  };

  return (
    <div className="registration-gradient-bg">
      <div className="registration-steps">
        {steps.map((s, idx) => (
          <div key={s.label} className={`step-item${step === idx + 1 ? ' active' : ''}`}>
            <div className="step-circle">{idx + 1}</div>
            <div className="step-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="registration-form-card">
        {step === 1 && (
          <>
            <h2 className="registration-form-title">CREATE YOUR ACCOUNT</h2>
            <div className="registration-form-subtitle">This is step 1</div>
            <form onSubmit={handleNext}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="registration-input"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="registration-input"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="registration-input"
              />
              <button type="submit" className="registration-next-btn">Next</button>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="registration-form-title">SOCIAL PROFILES</h2>
            <div className="registration-form-subtitle">This is step 2</div>
            <form onSubmit={handleNext}>
              <input
                type="text"
                name="social"
                placeholder="Social Profile Link"
                value={form.social}
                onChange={handleChange}
                required
                className="registration-input"
              />
              <button type="submit" className="registration-next-btn">Next</button>
            </form>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="registration-form-title">PERSONAL DETAILS</h2>
            <div className="registration-form-subtitle">This is step 3</div>
            <form>
              <input
                type="text"
                name="personal"
                placeholder="Full Name"
                value={form.personal}
                onChange={handleChange}
                required
                className="registration-input"
              />
              <button type="button" className="registration-next-btn" disabled>Finish</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;