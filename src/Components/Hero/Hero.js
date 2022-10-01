import React from 'react'
import Seba from '../../assets/seba.jpg'
import './hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero'>
        <div className='container'>
            <div className='hero-display'>
                <div className='content-text'>
                    <div>
                        <h2>Hi! I am Sebastian</h2>
                        <h2 className='highlight'>Full Stack developer </h2>
                    </div>
                    <p className='desc' id='media-desc'>
                    Growing by the day in order to create better solutions
                    </p>
                    <div className='hero-btn'>
                            <a href="#projects">
                                <span>More about me</span>
                                <div className="liquid"></div>
                            </a>
                    </div>
                </div>
                <div className='content-img'>
                    <img src= {Seba} alt=''/>
                </div>

            </div>
        </div> 
    </section>
  )
}

export default Hero