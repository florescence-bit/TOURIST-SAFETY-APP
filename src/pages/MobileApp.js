import React from 'react';
import Card from '../components/Card';

const MobileApp = () => (
  <div className="container">
    <h2>Mobile App</h2>
    <Card>
      <p>Information about the mobile app: push alerts, SOS button, offline ID storage and local emergency assistance.</p>
      <div className="form-actions">
        <button className="btn ghost">Download for Android</button>
        <button className="btn ghost">Download for iOS</button>
      </div>
    </Card>
  </div>
);

export default MobileApp;
