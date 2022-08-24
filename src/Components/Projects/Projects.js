import React from 'react'
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import {BiRightArrowAlt} from 'react-icons/bi'
import './projects.css'

const Projects = () => {

    function NewTab(link) {
        window.open(
            link, "_blank");
    }

  return (
    <section id='work'>
        <div>
            <div className='slider-title'>
                <h6 className='subtitle'>Recent work</h6>
                <h2>Projects</h2>
            </div>
            <div className='project-wrap'>
                <div className='project-content'>
                    <div onClick={() => NewTab("https://mad-wolf.vercel.app/")}>
                        <img src={Project1}></img>
                        <span>E-Commerce</span>
                    </div>
                    <div onClick={() => NewTab("https://libee-app-client.vercel.app/")}>
                        <img src={Project2}></img>
                        <span>Hotel Reservation Platform</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Projects