import React from 'react';
import '../styles/stepDot.css';

const StepDot = ({ step = 1, total = 6 }) => (
  <div className="circles" role="navigation" aria-label="Step navigation">
    {Array.from({ length: total }).map((_, idx) => (
      <span
        key={idx}
        className={`circle${step === idx + 1 ? ' active' : ''}`}
        aria-label={`Step ${idx + 1}`}
      />
    ))}
  </div>
);

export default StepDot;
