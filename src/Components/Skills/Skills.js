import React, { useState } from 'react'
import "./skills.css"
import {FaBrain} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'
import {IoMdArrowDroprightCircle} from 'react-icons/io'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {RiTeamFill} from 'react-icons/ri'
import {FaBusinessTime} from 'react-icons/fa'

const Skills = () => {

  const [front,setFront] = useState(false)
  const [back,setBack] = useState(false)
  const [extra,setExtra] = useState(false)
  const [personal,setPersonal] = useState(false)
  const [team,setTeam] = useState(false)
  const [company,setCompany] = useState(false)



  return (
    <section id='skills' className='skill'>
        <div className='container'>
          <div className='slider-title'>
            <h6 className='subtitle'>Main abilities</h6>
            <h2>Skills</h2>
          </div>
          <div className='skill-wrapper'>
            <div className='skills-content' id='dev-skill'>
              <div className='skills-grid'>
                <div onClick={() => (setBack(false), setFront(!front))} id= 'headline'>
                  <div><FaReact className='img-skills'/></div>
                  <span>Front end development</span>
                  <div>{!front ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>
                </div>
                {front && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> CSS && HTML</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> React</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Redux</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Advanced Javascript</span>
                  </div>
                </div>
                }

                <div onClick={() => (setFront(false), setBack(!back))} id= 'headline'>
                  <div><FaNodeJs className='img-skills'/></div>
                  <span>Back end development</span>
                  <div>{!back ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>

                </div>
                {back && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>NodeJS</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Express</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>MongoDB</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>SQL</span>
                  </div>
                </div>
                }

                <div onClick={() => (setExtra(!extra))} id= 'headline'>
                  <div><FaBrain className='img-skills'/></div>
                  <span className='extend'>Extra Skills</span>
                  <div>{!extra ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>

                </div>
                {extra && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>AWS EC2/Serverless</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Ethereum Smart Contracts</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Solidity</span>
                  </div>

                </div>
                }


              </div>
            </div>
            <div className='skills-content'>
              <div className='skills-grid'>
                <div onClick={() => (setPersonal(!personal))} id= 'headline'>
                  <div><BsFillPersonCheckFill className='img-skills'/></div>
                  <span>Personal Features</span>
                  <div>{!personal ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>
                </div>
                {personal && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Determined</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Proactive</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Growth-oriented</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span> Fast-learner</span>
                  </div>
                </div>
                }

                <div onClick={() => (setTeam(!team))} id= 'headline'>
                  <div><RiTeamFill className='img-skills'/></div>
                  <span>Team Abilities</span>
                  <div>{!back ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>

                </div>
                {team && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Supportive</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Communicative</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Respectful</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Social</span>
                  </div>
                </div>
                }

                <div onClick={() => (setCompany(!company))}  id= 'headline'>
                  <div><FaBusinessTime className='img-skills'/></div>
                  <span className='extend'>Operation-related</span>
                  <div>{!company ? <IoMdArrowDroprightCircle/> : <IoMdArrowDropdownCircle/>} </div>

                </div>
                {company && 
                <div className='title-grid'> 
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Multi-cultural projects</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Global demands </span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Global Stakeholders management</span>
                  </div>
                  <div>
                    <div><GoPrimitiveDot/></div>
                    <span>Fast-paced Agile schemes</span>
                  </div>
                </div>
                }

              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills