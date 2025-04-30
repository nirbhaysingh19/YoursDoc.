import React, { useState } from 'react';
import './style.css';  // Ensure to import your CSS file

const Book = () => {
  // React state to store form values and popup visibility
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: ''
  });
  const [popupVisible, setPopupVisible] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent input over 10 digits for phone
    if (name === 'phone' && value.length > 10) return;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate 10-digit phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    console.log('Form submitted', formData);
    setPopupVisible(true);  // Show the popup
    setTimeout(() => setPopupVisible(false), 3000);  // Hide after 3 seconds

    // Optionally reset form:
    // setFormData({ name: '', phone: '', email: '', date: '' });
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">
        <span>book</span> now
      </h1>

      <div className="row">
        <div className="image">
          <img src="image/appointment-img.svg" alt="Book Appointment" />
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Book Appointment</h3>
          
          <input
            type="text"
            placeholder="Your name"
            className="book"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            placeholder="Your number"
            className="book"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}"
            maxLength="10"
            required
          />
          
          <input
            type="email"
            placeholder="Your email"
            className="book"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="date"
            className="book"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          
          <input
            type="submit"
            value="Book Now"
            className="btn"
          />
        </form>
      </div>

      {/* Popup for appointment booked */}
      {popupVisible && (
        <div className="popup">
          <p>Appointment Booked!</p>
        </div>
      )}
    </section>
  );
};

export default Book;
