import React from 'react';
import Card from '../components/Card';

const DigitalID = () => {
  const sampleImage = 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=60&auto=format&fit=crop';
  return (
    <div className="container">
      <h2>Digital Tourist ID</h2>
      <Card>
        <div className="digital-id-sample">
          <img src={sampleImage} alt="id sample" />
          <div className="id-details">
            <h3>Sample ID</h3>
            <p><strong>ID:</strong> SITSS-XXXXXXX</p>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Nationality:</strong> USA</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DigitalID;
