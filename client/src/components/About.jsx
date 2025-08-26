import React from 'react';
import '../styles/components/About.css';
import '../styles/components/Icons.css';
import { TargetIcon, EyeIcon, TrophyIcon, ShieldIcon, HeartIcon, PhoneIcon } from './Icons';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Priyadarshini Health Care & Manpower Solutions</h2>
            <p className="about-intro">
              With over a decade of dedicated service in healthcare and manpower solutions, 
              we have established ourselves as a trusted partner for families and organizations 
              seeking quality care and professional staffing services.
            </p>
            <p>
              Our mission is to bridge the gap between healthcare needs and professional care 
              delivery, ensuring that every individual receives the attention and expertise they deserve. 
              We combine compassionate care with industry-leading practices to deliver exceptional outcomes.
            </p>
            
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">
                  <TargetIcon className="icon-pulse icon-glow icon-hover" size={40} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To provide accessible, quality healthcare services and skilled manpower solutions that enhance lives and strengthen communities.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <EyeIcon className="icon-float icon-glow icon-hover" size={40} />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To be the leading healthcare and manpower solutions provider, recognized for excellence, innovation, and compassionate care.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Satisfied Families</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Healthcare Professionals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Support</div>
            </div>
          </div>
        </div>

        <div className="about-features">
          <h3>Why Choose Us?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <TrophyIcon className="icon-bounce icon-glow icon-hover" size={48} />
              </div>
              <h4>Certified Professionals</h4>
              <p>All our healthcare professionals are certified, experienced, and undergo regular training to maintain the highest standards.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldIcon className="icon-pulse icon-glow icon-hover" size={48} />
              </div>
              <h4>Trusted & Reliable</h4>
              <p>Background-verified staff with comprehensive insurance coverage for your peace of mind and security.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <HeartIcon className="icon-heartbeat icon-glow icon-hover" size={48} />
              </div>
              <h4>Personalized Care</h4>
              <p>Customized care plans tailored to individual needs, ensuring the best possible outcomes for every client.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <PhoneIcon className="icon-float icon-glow icon-hover" size={48} />
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock availability for emergencies and ongoing support whenever you need assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
