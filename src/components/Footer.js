import React from 'react';
import './../styles/components.css';

const Footer = () => (
  <footer className="site-footer">
    <div>© {new Date().getFullYear()} Smart India Tourism Safety</div>
    <div className="footer-links">Made with ❤️ for safe travel</div>
  </footer>
);

export default Footer;
