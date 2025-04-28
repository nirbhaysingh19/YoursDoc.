import React from 'react';
import './style.css';  // Make sure to import your CSS file for styles

const Doctors = () => {
  return (
    <section className="doctors" id="doctors">
      <h1 className="heading">our <span>doctors</span></h1>
      <div className="box-container">
        
        <div className="box">
          <img src="image/p1.jpg" alt="Tina" />
          <h3>Tina</h3>
          <span>expert doctor</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/p2.jpg" alt="Jack" />
          <h3>Jack</h3>
          <span>expert doctor</span>
          <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/p3.jpg" alt="Rina" />
          <h3>Rina</h3>
          <span>expert doctor</span>
          <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/p4.jpg" alt="Sam" />
          <h3>Sam</h3>
          <span>expert doctor</span>
          <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doctors;
