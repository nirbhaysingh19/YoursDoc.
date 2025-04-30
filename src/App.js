import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import './Components/style.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Icons from './Components/icons'
import Services from './Components/Services';
import About from './Components/About';
import Doctors from './Components/Doctors';
import Book from './Components/Book';
import Reviews from './Components/Reviews';






function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons />
      <Services />
      < About />
      <Doctors />
      
      <Book />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
