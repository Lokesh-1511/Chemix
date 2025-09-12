import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-highlight">Chemix</span>
          </h1>
          <p className="hero-subtitle">
            Interactive Chemistry Learning Platform
          </p>
          <p className="hero-description">
            Learn chemistry through hands-on experimentation! Drag and drop elements 
            to create reactions, discover new compounds, and understand the fascinating 
            world of chemical interactions.
          </p>
          
          <div className="hero-actions">
            <Link to="/learn" className="cta-button primary">
              🧪 Start Learning
            </Link>
            <Link to="/about" className="cta-button secondary">
              📖 Learn More
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="chemistry-animation">
            <div className="floating-molecule molecule-1">H₂O</div>
            <div className="floating-molecule molecule-2">CO₂</div>
            <div className="floating-molecule molecule-3">NaCl</div>
            <div className="floating-molecule molecule-4">O₂</div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">How Chemix Works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Drag & Drop Elements</h3>
              <p className="feature-description">
                Simply drag chemical elements from the periodic table into the reaction zone 
                to start experimenting.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚗️</div>
              <h3 className="feature-title">Simulate Reactions</h3>
              <p className="feature-description">
                Watch as elements combine under different conditions to form new compounds 
                with realistic chemical equations.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Unlock New Compounds</h3>
              <p className="feature-description">
                Successfully create reactions to unlock new compounds and expand your 
                chemistry toolkit.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h3 className="feature-title">Control Conditions</h3>
              <p className="feature-description">
                Adjust temperature, pressure, and catalysts to see how reaction 
                conditions affect outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="getting-started-section">
        <div className="container">
          <h2 className="section-title">Ready to Start?</h2>
          <p className="section-description">
            Begin your chemistry journey with basic elements and work your way up to 
            complex molecular structures.
          </p>
          
          <div className="start-steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Go to the Learn page</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Drag elements to reaction zone</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <p>Set conditions and react!</p>
            </div>
          </div>

          <Link to="/learn" className="final-cta">
            🚀 Start Experimenting Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;