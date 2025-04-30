import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function PatientSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('patientData'));
    if (storedData && storedData.email === email && storedData.password === password) {
      alert("Login successful");
      navigate('/app');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-form">
      <h2>Patient Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Sign In</button>
        <p className="auth-link">
          New patient? <Link to="/patient/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
}

export default PatientSignin;
