import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import Record from './Components/Record/Record';
import Services from './Components/Services/Services';
import Referrals from './Components/Referrals/Referrals';
import './App.css';
import Background from './Components/Background/Background';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

function App() {
  return (
   <React.Fragment>
    <Navbar/>
    <Hero />
    <Record/>
    <Background/>
    <Services/>
    <Skills/>
    <Projects/>
    <Referrals/>
    <Contact/>
    </React.Fragment>
  )
}

export default App;
