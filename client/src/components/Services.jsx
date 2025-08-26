import React from 'react';
import '../styles/components/Services.css';
import '../styles/components/Icons.css';
import { HomeIcon, NurseIcon, BabyIcon, MedicalIcon, BriefcaseIcon, TeamIcon } from './Icons';

const Services = () => {
  const healthcareServices = [
    {
      icon: <HomeIcon className="icon-float icon-glow icon-hover" size={56} />,
      title: 'Home Healthcare - Bedside Caregiver',
      description: 'Professional 24/7 bedside care with trained caregivers providing personalized attention and medical support in the comfort of your home.',
      features: ['24/7 Care', 'Trained Professionals', 'Medical Support', 'Personalized Care']
    },
    {
      icon: <NurseIcon className="icon-pulse icon-glow icon-hover" size={56} />,
      title: 'Home Nursing Care',
      description: 'Expert nursing services delivered at your doorstep by qualified registered nurses for post-operative care, chronic conditions, and recovery.',
      features: ['Registered Nurses', 'Post-Op Care', 'Medication Management', 'Health Monitoring']
    },
    {
      icon: <BabyIcon className="icon-bounce icon-glow icon-hover" size={56} />,
      title: 'Mother & Baby Care',
      description: 'Specialized postnatal care for new mothers and newborns, including breastfeeding support, baby care guidance, and maternal health monitoring.',
      features: ['Postnatal Care', 'Breastfeeding Support', 'Baby Care Training', 'Health Monitoring']
    },
    {
      icon: <MedicalIcon className="icon-rotate icon-glow icon-hover" size={56} />,
      title: 'Medical Equipments',
      description: 'Quality medical devices and equipment rental services including hospital beds, wheelchairs, oxygen concentrators, and monitoring devices.',
      features: ['Equipment Rental', 'Installation Support', 'Maintenance', 'Quality Assured']
    }
  ];

  const manpowerServices = [
    {
      icon: <BriefcaseIcon className="icon-float icon-glow icon-hover" size={56} />,
      title: 'Consulting',
      description: 'Expert healthcare staffing consultation to help organizations optimize their workforce, improve efficiency, and ensure quality patient care.',
      features: ['Workforce Planning', 'Quality Assurance', 'Cost Optimization', 'Compliance Support']
    },
    {
      icon: <TeamIcon className="icon-pulse icon-glow icon-hover" size={56} />,
      title: 'Recruitment & Staffing',
      description: 'Specialized recruitment services for healthcare professionals including nurses, caregivers, technicians, and administrative staff.',
      features: ['Skilled Professionals', 'Background Verification', 'Quick Placement', 'Ongoing Support']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Comprehensive Services</h2>
          <p>Delivering excellence in healthcare and manpower solutions with professional expertise and compassionate care</p>
        </div>

        <div className="services-section">
          <h3 className="section-title">Healthcare Services</h3>
          <div className="services-grid">
            {healthcareServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="services-section">
          <h3 className="section-title">Manpower Services</h3>
          <div className="services-grid manpower-grid">
            {manpowerServices.map((service, index) => (
              <div key={index} className="service-card manpower-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Get Quote</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
