import React from 'react';
import './..//styles/components.css';


const Hero = ({ onGetStarted }) => {
  // Figma illustration (replace with your own if needed)
  const illustration = "https://cdn.pixabay.com/photo/2017/01/31/13/14/india-2027129_1280.png";
  return (
    <section className="hero hero-figma">
      <div className="hero-content-figma">
        <h1 className="hero-title-figma">WELCOME TO INDIA!</h1>
        <img src={illustration} alt="India Illustration" className="hero-illustration-figma" />
        <div className="hero-btns-figma">
          <button className="btn figma-primary" onClick={onGetStarted}>GET STARTED</button>
          <button className="btn figma-outline">LOGIN</button>
        </div>
        <div className="hero-guidelines-figma">Learn more about safety guidelines</div>
      </div>
    </section>
  );
}

export default Hero;
