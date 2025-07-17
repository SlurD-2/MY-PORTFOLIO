import React from 'react'

import '../App.css';
const NavBar = () => {
  return (
    <nav>
      <label className='logo'>SlurdeV0.0</label>
       <ul>
          <li><a className='nav-link' href="#home">Home</a></li>
          <li><a className='nav-link' href="#about">About</a></li>
          <li><a className='nav-link' href="#projects">Projects</a></li>
          <li><a className='nav-link' href="#contact">Contact</a></li>
       </ul>
    </nav>
  )
}

export default NavBar