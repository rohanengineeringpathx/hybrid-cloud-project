import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Get to Know Us</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>CloudBazaar Science</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect with Us</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Make Money with Us</h4>
              <ul>
                <li>Sell on CloudBazaar</li>
                <li>Sell under CloudBazaar Accelerator</li>
                <li>Become an Affiliate</li>
                <li>Fulfilment by CloudBazaar</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Let Us Help You</h4>
              <ul>
                <li>COVID-19 and CloudBazaar</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="container">
          <div className="footer-logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">CloudBazaar</span>
          </div>
          <div className="footer-tech">
            <strong>Hybrid Cloud E-Commerce Platform</strong>
            <p>Built with React, Node.js, AWS EKS, Azure Static Web Apps & Docker</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-links">
            <span>Conditions of Use & Sale</span>
            <span>Privacy Notice</span>
            <span>Interest-Based Ads</span>
          </div>
          <div className="footer-copyright">
            © 2024 CloudBazaar.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;