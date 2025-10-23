import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <span className="brand-icon">⚗️</span>
          Chemix
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-content ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link 
                to="/" 
                className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/learn" 
                className={`navbar-link ${location.pathname === '/learn' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Learn
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/about" 
                className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/periodic" 
                className={`navbar-link ${location.pathname === '/periodic' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Periodic Table
              </Link>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;