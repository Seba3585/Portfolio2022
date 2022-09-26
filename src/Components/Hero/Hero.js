import React from 'react'

import './hero.css'

const Hero = ({text}) => {
  return (
    <section id='hero' className='hero'>
        <div className='container'>
            <div className='hero-display'>
                <div className='content-text'>
                    <div>
                        <h2>Hi! Welcome to my web app</h2>
                        <h2 className='highlight'>CoderHouse React Exercise1 </h2>
                    </div>
                    <p className='desc' id='media-desc'>
                        {text}
                    </p>

                </div>


            </div>
        </div> 
    </section>
  )
}

export default Hero