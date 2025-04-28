import React, { useState } from 'react';
import './style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo"><i className="fas fa-heartbeat"></i>YoursDOC.</a>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#doctors">Doctors</a>
        <a href="#book">Book</a>
        <a href="#reviews">Reviews</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div id="menu-btn" className={`fas fa-bars ${menuOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </header>
  );
};

export default Header;
