import React from 'react'
import { features } from './serviceutils'
import "./services.css"

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='content'>
          <h6 className='subtitle'>Profile Highlights</h6>
          <h2> I am passionate about tech and working in fast paced teams </h2>
        </div>
        <div className='subcontent'>
          {
            features.map((item,index) => (
              <div className='service-item' key={index}>
                <span className='service-icon'>
                  <div>{item.icon}</div>
                </span>
                <h3 className='service-title'>{item.title}</h3>
                <p className='desc'> {item.desc} </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services