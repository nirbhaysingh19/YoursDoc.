import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', specialization: '', contact: '', timings: '',
    gender: '', age: '', email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('doctorData', JSON.stringify(formData));
    alert("Doctor signup successful (demo only)");
    navigate('/doctor/signin');
  };

  return (
    <div className="auth-form">
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Similar input fields */}
        {['name', 'specialization', 'contact', 'timings', 'age', 'email', 'password'].map((field, i) => (
          <div className="form-group" key={i}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default DoctorSignup;
