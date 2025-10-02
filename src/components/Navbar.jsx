import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">⚗️</span>
          Chemix
        </Link>
        
        <div className="navbar-content">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link 
                to="/" 
                className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/learn" 
                className={`navbar-link ${location.pathname === '/learn' ? 'active' : ''}`}
              >
                Learn
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/about" 
                className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;