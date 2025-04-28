import React, { useState } from 'react';
import './style.css';

const Icons = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="icon-container">
      <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>Doctors at work</p>
      </div>

      <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1040+</h3>
        <p>Satisfied patients</p>
      </div>

      <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>Bed facility</p>
      </div>

      <div className="icons">
        <i className="fas fa-hospitals"></i>
        <h3>80+</h3>
        <p>Available hospitals</p>
      </div>
    </section>
  );
};

export default Icons;
