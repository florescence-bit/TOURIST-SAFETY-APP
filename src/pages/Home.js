import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page home-page">
      <Welcome 
        onGetStarted={() => navigate('/registration')} 
        onLogin={() => navigate('/login')}
      />

      <section className="container">
        <div className="grid-3">
          <Card title="Safety Guidelines">
            <p>Learn about local rules, emergency numbers and travel tips to stay safe.</p>
            <button className="btn ghost">Learn More</button>
          </Card>

          <Card title="Digital ID Benefits">
            <p>Fast check-ins, easier incident reporting, and secure emergency contact sharing.</p>
            <button className="btn ghost" onClick={() => navigate('/digital-id')}>View Sample ID</button>
          </Card>

          <Card title="AI Monitoring">
            <p>Real-time alerts, anomaly detection at major tourist zones and automated assistance.</p>
            <button className="btn ghost" onClick={() => navigate('/ai-detection')}>See AI Features</button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
