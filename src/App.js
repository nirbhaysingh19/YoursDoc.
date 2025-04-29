import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/style.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Icons from './Components/icons';
import Services from './Components/Services';
import About from './Components/About';
import Doctors from './Components/Doctors';
import Book from './Components/Book';
import Reviews from './Components/Reviews';
import RoleSelection from './Components/RoleSelection';
import DoctorSignup from './Components/DoctorSignup';
import DoctorSignin from './Components/DoctorSignin';
import PatientSignup from './Components/PatientSignup';
import PatientSignin from './Components/PatientSignin';

function MainApp() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons />
      <Services />
      <About />
      <Doctors />
      <Book />
      <Reviews />
      <Footer />
    </div>
  );
}

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor/signin" element={<DoctorSignin />} />
        <Route path="/doctor/signup" element={<DoctorSignup />} />
        
        {/* Patient Routes */}
        <Route path="/patient/signin" element={<PatientSignin />} />
        <Route path="/patient/signup" element={<PatientSignup />} />

        {/* Protected Main App */}
        <Route path="/app/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
