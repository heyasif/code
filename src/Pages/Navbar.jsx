import React from 'react';
import { Link } from 'react-router-dom'; 
import QuizLogo from '../assets/Images/QuizLogo.png'; 

function Navbar() {
  return (
    <header className="header">
      <nav id="nav-menu">
        <div className="logo-cont">
          <img id="logo-img" src={QuizLogo} alt="logo" /> 
          <h1>Quiz App</h1>
        </div>
        <div className="logo-menu">
          <img className="menu-icon" src="./assets/images/menu.svg" alt="menu icon" />
        </div>
        <div className="logo-close hid">
          <img className="menu-icon" src="./assets/images/close.svg" alt="close icon" />
        </div>
        <div className="menu hid">
          <div className="nav-links">
            <Link to="/" className="nav-link home">Home</Link> 
            <Link to="/about" className="nav-link about">About</Link>
            <Link to="/services" className="nav-link services">Services</Link>
            <Link to="/contact" className="nav-link contact">Contact</Link>
          </div>
          <button id="resume-button-1" className="login-signup">
            <a href="./pages/login.html">Login/Signup</a>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
