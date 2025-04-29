import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signin logic here
  };

  return (
    <div className="auth-form">
      <h2>Doctor Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Sign In</button>
        <p className="auth-link">
          New doctor? <Link to="/doctor/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
}

export default DoctorSignin;
