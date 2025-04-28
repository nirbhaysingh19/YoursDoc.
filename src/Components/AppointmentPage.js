import React, { useState } from 'react';
import './style.css';

const About = () => {
  // If you're planning to use the `menuOpen` state, you can implement it here
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="appointment-page">
      <h2>Appointment Confirmed</h2>
      <p>Thank you, {patientData.name}, your appointment has been confirmed with Dr. {doctor.name}.</p>
      <p>Specialty: {doctor.specialty}</p>
      <p>Appointment Mode: Online</p>
      <p>Medicines Purchased: {doctor.medicines.join(', ')}</p>
      <button>Download Prescription</button>
    </div>
  );
};

export default AppointmentPage;
