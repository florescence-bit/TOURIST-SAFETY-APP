import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/components.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand">Smart India Tourism Safety</div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/registration">Registration</NavLink></li>
          <li><NavLink to="/digital-id">Digital ID</NavLink></li>
          <li><NavLink to="/check-in">Check-in</NavLink></li>
          <li><NavLink to="/mobile-app">Mobile App</NavLink></li>
          <li><NavLink to="/ai-detection">AI Detection</NavLink></li>
          <li><NavLink to="/police-dashboard">Police Dashboard</NavLink></li>
          <li><NavLink to="/analytics">Analytics</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="auth-group">
          <button className="btn ghost">Foreign Visitor</button>
          <button className="btn primary">Indian Native</button>
        </div>
        <div className="signin-group">
          <button className="btn link">Sign In</button>
          <button className="btn action">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
