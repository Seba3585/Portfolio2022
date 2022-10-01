import React from 'react'
import './record.css'

const Record = () => {
  return (
    <section className='record' id='projects'>
      <div className='container'>
        <div className='slider-title'>
            <h6 className='subtitle'>Introduction</h6>
            <h2>About Me</h2>
        </div>

        <div className='record-container'>
         <div className='record-p'>
            <p>
              My tech journey started in 2019 where I started using SQL at work by necessity. At that time I was 21 years old and unfulfilled.
              Then I decided to expand my knowledge by learning programming fundamentals and that was the best decision ever.
            </p>
            <p>
              Today I am prepared to be part of big challenges and projects, striving to deliver high value solutions to society.
              Currently working for a small but ambitious project, with a team of 4 developers and looking for a bigger project.
            </p> 
          </div> 
          <div className='content'>
            <div>
              <h3 >+5</h3>
              <h4 id='project'>Projects Development</h4> 
            </div>
            <div>
              <h3>+2 yr</h3>
              <h4 id='project'>Development Experience</h4> 
            </div>
            <div>
              <h3>+5 yr</h3>
              <h4 id='project'>Management Experience</h4> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Record