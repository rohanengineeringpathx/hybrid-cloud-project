import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Great Shopping Deal</h1>
          <p className="hero-subtitle">Shop the latest trends at amazing prices</p>
          <button className="hero-cta">Shop Now</button>
        </div>
        
        <div className="hero-features">
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <span className="feature-text">Free Delivery</span>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <span className="feature-text">Secure Payment</span>
          </div>
          <div className="feature-card">
            <span className="feature-icon">↩️</span>
            <span className="feature-text">Easy Returns</span>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛡️</span>
            <span className="feature-text">1 Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;