import React from 'react';
import '../styles/components/Hero.css';
import '../styles/components/Icons.css';
import { HospitalIcon, TeamIcon, MedicalIcon } from './Icons';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Compassionate Healthcare & 
            <span className="highlight"> Expert Manpower Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Delivering professional healthcare services and specialized staffing solutions 
            with over a decade of trusted expertise. Your health and workforce needs are our priority.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Families Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Our Services</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-icon">
              <HospitalIcon className="icon-float icon-glow icon-hover" size={48} />
            </div>
            <h3>Professional Care</h3>
            <p>Expert healthcare professionals at your doorstep</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">
              <TeamIcon className="icon-pulse icon-glow icon-hover" size={48} />
            </div>
            <h3>Skilled Workforce</h3>
            <p>Specialized recruitment and staffing solutions</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">
              <MedicalIcon className="icon-bounce icon-glow icon-hover" size={48} />
            </div>
            <h3>Medical Equipment</h3>
            <p>Quality medical devices and equipment rental</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
