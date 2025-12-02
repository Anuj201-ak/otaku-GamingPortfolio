import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      
      <nav className="nav">
        <Link to="/MainContent" className="nav-link">Home</Link>
        <Link to="/About" className="nav-link">About</Link>
        <Link to="/Skills" className="nav-link">Skills</Link>
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Experience" className="nav-link">Experience</Link>
      </nav>
      
        <Link to="/Contact" className="nav-link"><button className="contact-button">Contact me</button></Link>
    </header>
  )
}

export default Header
