import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  return (
    <>
     <NavBar />
      {/* home-section */}
      <section id='home' className='section'>
         <div className='home-container'>
            <p className='intro-text'>Hi, I'm</p>
            <h2 className='name'>KERT JOHN S. PAGULA</h2>
          <div className="skill-scroll-wrapper">
            <div className="skill-buttons scroll-animation">
              <button className="skill-btn">Web Developer</button>
              <button className="skill-btn">Frontend Developer</button>
              <button className="skill-btn">UI Designer</button>
            </div>
          </div>
         </div>
      </section>

      <section id='about' className='section'>
        a
      </section>
      <section id='projects' className='section'>
      </section>
      <section id='contact' className='section'>
      </section>
    </>  
  );
}

export default App;
