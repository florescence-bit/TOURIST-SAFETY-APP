import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepDot from '../components/StepDots';
import './../styles/components.css';
import Bg from '../assets/bg.png';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className="welcome-mobile-bg">
      <div className="blob1">
        <div className="blob2">
          <h2 className="welcome-heading"></h2>
        </div>
      </div>
    <div className="welcome-text">
      <h3 className="welcome-heading">WELCOME TO RAH!</h3>
      <h5 className="welcome-para">Best companion in your journey! Embark on a journey through the vibrant colors, rich heritage, and breathtaking landscapes of India. From the majestic Himalayas in the north to the serene backwaters of the south, and from bustling cities to tranquil villages, our app brings the best of India right to your fingertips.</h5>
    </div>
    <StepDot step={1} total={6} />
    <button
      className="welcome-btn"
      onClick={() => navigate('/registration', { state: { step: 2 } })}
    >
      Get Started
    </button>  
    </section>
  );
};

export default Welcome;
