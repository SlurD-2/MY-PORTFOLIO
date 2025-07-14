import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h2 className='logo'>/ SLURDev /</h2>
      <div className='nav-links'>
        <Link to="/Home" className='nav-link'>Home</Link>
        <Link to="/About" className='nav-link'>About</Link>
        <Link to="/Contact" className='nav-link'>Contact</Link>
        <Link to="/Project" className='nav-link'>Project</Link>
      </div>
    </nav>
  )
}

export default NavBar