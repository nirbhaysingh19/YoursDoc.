import React, { useState } from 'react';
import './style.css';

const About = () => {
  // If you're planning to use the `menuOpen` state, you can implement it here
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>

      <div className="row">
        <div className="image">
          <img src="image/about-img.svg" alt="About Us" />
        </div>

        <div className="content">
          <h3>We take care of your healthy life</h3>
          <p>We strive to enhance operational efficiency, improve patient care, and simplify administrative processes through innovative management systems and strategies.</p>
          <p>To empower healthcare providers with cutting-edge solutions, ensuring every patient receives the care they deserve, and every facility operates at its highest potential.</p>
          <a href="#" className="btn">
            <span className="fas fa-chevron-right"></span> learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
