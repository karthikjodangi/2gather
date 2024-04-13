import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="social-footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/YourPage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </footer>
  );
};

export default Footer;