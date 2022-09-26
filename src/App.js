import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css';


function App() {

  const text= "prop message"

  return (

   <React.Fragment>
    <Navbar/>
    <Hero text = {text}/>
    </React.Fragment>
  )
}

export default App;