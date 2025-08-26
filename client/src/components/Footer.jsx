import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Priyadarshini</h3>
              <span>Health Care & Manpower Solutions</span>
            </div>
            <p className="footer-description">
              Dedicated to providing exceptional healthcare services and professional 
              staffing solutions with compassion, expertise, and reliability.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📧</a>
              <a href="#" className="social-link">📞</a>
              <a href="#" className="social-link">📍</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Healthcare Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Home Healthcare</a></li>
              <li><a href="#services">Bedside Caregiver</a></li>
              <li><a href="#services">Home Nursing Care</a></li>
              <li><a href="#services">Mother & Baby Care</a></li>
              <li><a href="#services">Medical Equipments</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Manpower Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Healthcare Consulting</a></li>
              <li><a href="#services">Recruitment & Staffing</a></li>
              <li><a href="#services">Workforce Planning</a></li>
              <li><a href="#services">Professional Training</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Healthcare Avenue, Medical District, City 560001</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@priyadarshinihealthcare.com</span>
            </div>
            <div className="emergency-footer">
              <strong>Emergency: +91 98765 00000</strong>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Priyadarshini Health Care & Manpower Solutions. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
