import React from 'react';
import Card from '../components/Card';

const CheckIn = () => (
  <div className="container">
    <h2>Tourist Check-in</h2>
    <Card>
      <p>Quick check-in using Digital ID at participating hotels, attractions and transport hubs.</p>
      <div className="form-actions">
        <button className="btn primary">Scan QR / Enter ID</button>
      </div>
    </Card>
  </div>
);

export default CheckIn;
