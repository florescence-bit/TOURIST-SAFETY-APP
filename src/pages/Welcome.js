import React from 'react';
import './../styles/components.css';
import WelcomePic from '../assets/WelcomePic.png';

const Welcome = ({ onGetStarted, onLogin }) => {
  return (
    <section className="welcome-modern-bg">
      <div className="welcome-modern-content">
        <h1 className="welcome-modern-title">Welcome to India</h1>
        <p className="welcome-modern-desc">A new era of safe, smart, and joyful travel.</p>
        <img src={WelcomePic} alt="India Welcome" className="welcome-modern-img" />
        <div className="welcome-modern-btns">
          <button className="btn modern-black" onClick={onGetStarted}>Get Started</button>
          <button className="btn modern-outline" onClick={onLogin}>Login</button>
        </div>
        <div className="welcome-modern-guidelines">Learn more about safety guidelines</div>
      </div>
    </section>
  );
};

export default Welcome;