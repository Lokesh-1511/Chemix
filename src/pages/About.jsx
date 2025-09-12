import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="page-title">About Chemix</h1>
        <p className="page-subtitle">
          Interactive Chemistry Learning Made Fun
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">What is Chemix?</h2>
          <p className="section-text">
            Chemix is an innovative educational platform that makes learning chemistry 
            interactive and engaging. By combining drag-and-drop gameplay with real 
            chemical principles, students can explore the fascinating world of molecular 
            interactions in a hands-on way.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works">
            <div className="work-step">
              <div className="step-icon">🧪</div>
              <h3>Drag & Drop</h3>
              <p>Select chemical elements and compounds from the periodic table and drag them into the reaction zone.</p>
            </div>
            <div className="work-step">
              <div className="step-icon">⚗️</div>
              <h3>Set Conditions</h3>
              <p>Adjust temperature, pressure, and catalysts to create the perfect environment for your reaction.</p>
            </div>
            <div className="work-step">
              <div className="step-icon">✨</div>
              <h3>Watch Magic Happen</h3>
              <p>See realistic chemical equations and explanations as your elements combine to form new compounds.</p>
            </div>
            <div className="work-step">
              <div className="step-icon">🏆</div>
              <h3>Unlock More</h3>
              <p>Successfully created compounds are added to your toolkit for future experiments.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Educational Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h4>🔬 Real Chemistry</h4>
              <p>All reactions are based on actual chemical principles and equations.</p>
            </div>
            <div className="feature-item">
              <h4>🎮 Gamified Learning</h4>
              <p>Unlock system encourages exploration and discovery of new compounds.</p>
            </div>
            <div className="feature-item">
              <h4>🌡️ Condition Sensitivity</h4>
              <p>Learn how temperature, pressure, and catalysts affect reaction outcomes.</p>
            </div>
            <div className="feature-item">
              <h4>📚 Detailed Explanations</h4>
              <p>Each reaction comes with clear explanations of what's happening and why.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Current Version</h2>
          <p className="section-text">
            This is version 1.0 of Chemix, featuring:
          </p>
          <ul className="current-features">
            <li>Basic element and compound library</li>
            <li>5+ hardcoded chemical reactions</li>
            <li>Interactive drag-and-drop interface</li>
            <li>Condition-based reaction outcomes</li>
            <li>Progressive unlock system</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2 className="section-title">Future Plans</h2>
          <p className="section-text">
            We're constantly working to improve Chemix. Planned features include:
          </p>
          <ul className="future-features">
            <li>🤖 AI-powered reaction prediction system</li>
            <li>🎬 Animated molecular visualizations</li>
            <li>📊 Expanded periodic table with rare elements</li>
            <li>🏫 Teacher dashboard and student progress tracking</li>
            <li>🧬 Organic chemistry and biochemistry modules</li>
            <li>🌐 Real-time collaboration features</li>
            <li>📱 Mobile app for iOS and Android</li>
            <li>🎯 Achievement system and leaderboards</li>
          </ul>
        </section>

        <section className="about-section">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-name">React</span>
              <span className="tech-description">Frontend framework for interactive UI</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">CSS3</span>
              <span className="tech-description">Custom styling with animations and responsive design</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">HTML5 Drag & Drop</span>
              <span className="tech-description">Native browser API for element interaction</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">React Router</span>
              <span className="tech-description">Client-side routing for seamless navigation</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-text">
            Chemix is an open-source educational project. We welcome contributions from 
            educators, developers, and chemistry enthusiasts. Whether you want to add 
            new reactions, improve the UI, or suggest features, we'd love to hear from you!
          </p>
          
          <div className="contact-info">
            <p>📧 Email: feedback@chemix.edu</p>
            <p>🐙 GitHub: github.com/chemix-platform</p>
            <p>🐦 Twitter: @ChemixLearning</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;