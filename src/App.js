import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import myImage from './assests/me.png';
import project1 from './assests/dashboard.png';

function App() {
  return (
    <>
     <NavBar />
      {/* home-section */}
      <section id='home' className='section home-container'>
        <div className='home-content'>
          <p className='intro-text'>Hi, I'm</p>
          <h2 className='name'>KERT JOHN PAGULA</h2>
        <div className="skill-scroll-wrapper">
          <div className="skill-buttons scroll-animation">
            <button className="skill-btn">Web Developer</button>
            <button className="skill-btn">Frontend Developer</button>
            <button className="skill-btn">UI Designer</button>
          </div>
        </div>
        </div>
      </section>

      <section id='about' className='section about-container'>
        <div className='about-content'>
          <img className='myImage' src={myImage}></img>
            <div className='side-desc'>
              <p className='desc'>
                I am <span className="bold-name">Kert John Pagula</span> , a dedicated and passionate web developer with a 
                strong drive to create dynamic, responsive websites and applications.
          
              </p>
              <div className='divider'></div>
            </div>


        </div>
      </section>

      <section id='projects' className='section projects-container'>
        <div className='projects-content'>
          <div className='project-box'>
            <label className='project-label'>OFFSUPPSYS</label>
            <img className='project-1' src={project1}></img>
          </div>
        </div>
      </section>
      <section id='contact' className='section'>
      </section>
    </>  
  );
}

export default App;
