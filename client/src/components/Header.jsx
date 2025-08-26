import React, { useState } from 'react';
import '../styles/components/Header.css';
import '../styles/components/Icons.css';
import { HeartIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-main">
            <span className="logo-pri">Priyadarshini</span>
            <div className="logo-heart">
              <HeartIcon className="icon-heartbeat icon-glow" size={24} />
            </div>
          </div>
          <div className="logo-tagline">
            <span className="tagline-health">Health Care</span>
            <span className="tagline-separator">&</span>
            <span className="tagline-manpower">Manpower Solutions</span>
          </div>
          <div className="logo-motto">Caring Beyond Boundaries</div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-cta">
          <button className="cta-button">Get Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
