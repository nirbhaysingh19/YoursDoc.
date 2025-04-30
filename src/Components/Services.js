import React, { useState } from 'react';
import './style.css';

const Service = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="services" id="services">
      <h1 className="heading">our <span>services</span></h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>Home Checkups</h3>
          <p>Get a complete health checkup from the comfort of your home with our hospital's expert care.</p>
          <a href="#" className="btn">
            Enroll <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-ambulance"></i>
          <h3>24/7 Ambulance</h3>
          <p>24/7 Ambulance Services for Your Emergencies</p>
          <a href="https://medulance.com/ambulance-service-in-lucknow" target="_blank" rel="noopener noreferrer" className="btn">
            Book <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>Expert Doctors</h3>
          <p>Our team of expert doctors combines skill, experience, and innovation to provide exceptional care.</p>
          <a href="#" className="btn">
            Learn More <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-pills"></i>
          <h3>Medicines</h3>
          <p>A wide range of trusted medicines for all your healthcare needs.</p>
          <a href="https://www.netmeds.com/?srsltid=AfmBOop52Q94M68v18KW9rWrY9VXsEVGMnrYr2_AIgI1W4LzvM9_BeKu" target="_blank" rel="noopener noreferrer" className="btn">
  Order Now!!! <span className="fas fa-chevron-right"></span>
</a>

        
          
        </div>

        <div className="box">
          <i className="fas fa-procedures"></i>
          <h3>Bed Facility</h3>
          <p>Providing a home-like environment with premium bed facilities for every patient.</p>
          <a href="https://www.healthyjeenasikho.com/lucknow?srsltid=AfmBOoqjoJM4K1KtWLgrOp0JJTAkH98lo6Xl4j2xTHGiGxaeF8pNAWXv" target="_blank" rel="noopener noreferrer" className="btn">
            Learn More <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Total Care</h3>
          <p>From diagnosis to recovery, we are with you every step of the way.</p>
          <a href="#" className="btn">
            Learn More <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
