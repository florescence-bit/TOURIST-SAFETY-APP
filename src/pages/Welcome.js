import React from 'react';
import './../styles/components.css';
import WelcomePic from '../assets/WelcomePic.png';

const Welcome = ({ onGetStarted, onLogin }) => {
	return (
		<section className="welcome-mobile-bg">
			<h1 className="welcome-mobile-title">WELCOME TO INDIA!</h1>
			<img src={WelcomePic} alt="Welcome to India" className="welcome-mobile-img" />
			<div className="welcome-mobile-btn-group">
				<button className="btn mobile-black" onClick={onGetStarted}>GET STARTED</button>
				<button className="btn mobile-outline" onClick={onLogin}>LOGIN</button>
			</div>
			<div className="welcome-mobile-guidelines">Learn more about safety guidelines</div>
		</section>
	);
};

export default Welcome;
