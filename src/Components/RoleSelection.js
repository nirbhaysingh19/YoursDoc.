import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-selection">
      <h1>Welcome to YoursDoc</h1>
      <p>Please select your role:</p>
      <div className="role-buttons">
        <button 
          className="role-btn patient-btn"
          onClick={() => navigate('/patient/signin')}
        >
          I'm a Patient
        </button>
        <button 
          className="role-btn doctor-btn"
          onClick={() => navigate('/doctor/signin')}
        >
          I'm a Doctor
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;