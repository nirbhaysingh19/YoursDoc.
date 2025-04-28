import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#"> <i className="fas fa-chevron-right"></i> Home</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Services</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> About</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Doctors</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Book</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Review</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Blogs</a>
        </div>

        <div className="box">
          <h3>Our Services</h3>
          <a href="#"> <i className="fas fa-chevron-right"></i> Dental Care</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Massage Therapy</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Cardiology</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Diagnosis</a>
          <a href="#"> <i className="fas fa-chevron-right"></i> Ambulance Services</a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#"> <i className="fas fa-phone"></i> +91 6392295112</a>
          <a href="#"> <i className="fas fa-phone"></i> +91 9369642296</a>
          <a href="#"> <i className="fas fa-envelope"></i> YoursDOC@gmail.com</a>
          <a href="#"> <i className="fas fa-envelope"></i> DOC@gmail.com</a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Lucknow, India</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <a href="#"> <i className="fas fa-facebook"></i> Facebook</a>
          <a href="#"> <i className="fas fa-twitter"></i> Twitter</a>
          <a href="#"> <i className="fas fa-instagram"></i> Instagram</a>
          <a href="#"> <i className="fas fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>

      <div className="credit">
        <p>&copy; 2024 YoursDoc | All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
