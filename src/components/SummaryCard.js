import React from 'react';
import './../styles/components.css';

const SummaryCard = ({ label, value, accent }) => (
  <div className={`summary-card ${accent || ''}`}>
    <div className="summary-value">{value}</div>
    <div className="summary-label">{label}</div>
  </div>
);

export default SummaryCard;
