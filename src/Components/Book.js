import React, { useState } from 'react';
import './style.css';  // Ensure to import your CSS file

const Book = () => {
  // React state to store form values
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., sending data to a server)
    console.log('Form submitted', formData);
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
          />
          
          <input
            type="number"
            placeholder="Your number"
            className="book"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          
          <input
            type="email"
            placeholder="Your email"
            className="book"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          
          <input
            type="date"
            className="book"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          
          <input
            type="submit"
            value="Book Now"
            className="btn"
          />
        </form>
      </div>
    </section>
  );
};

export default Book;
