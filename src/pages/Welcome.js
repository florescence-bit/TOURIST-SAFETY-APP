import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <h5 className="welcome-para">Welcome to Explore India! Embark on a journey through the vibrant colors, rich heritage, and breathtaking landscapes of India. From the majestic Himalayas in the north to the serene backwaters of the south, and from bustling cities to tranquil villages, our app brings the best of India right to your fingertips.</h5>
    </div>
    
    <div className='circles'>
       <div className="circle active"></div>
       <div className="circle"></div>
       <div className="circle"></div>
    </div>
    <button className="welcome-btn" onClick={() => navigate('/registration')}>Get Started</button>  
    </section>
  );
};

export default Welcome;
