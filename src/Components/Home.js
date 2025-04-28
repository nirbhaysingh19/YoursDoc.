import React, { useState } from 'react';
import './style.css';


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <section className="home" id="home">
      <div className="image">
      <img src="/home-img.svg" alt="Home" />

      </div>
      <div className="content">
        <h3>Stay safe, stay healthy</h3>
        <p>
          Delivering excellence in healthcare management by bridging the gap between compassionate care and innovative solutions,
          empowering medical professionals, enhancing patient experiences, and fostering a healthier, more connected community for
          a brighter tomorrow.
        </p>
        <a href="#" className="btn">
          Contact Us <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
};

export default Home;
