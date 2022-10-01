import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import './navbar.css'



const Navbar = () => {
  return (
    <div className='header'>
        <div>
            <div className='nav_display'>
                    <div className='top-nav'>
                        <div className='title'>
                            <h2>SGF</h2>
                        </div>
                        {/* <div className='light-mode'>
                            <span><i className="ri-sun-line"></i> Light Mode</span>
                        </div> */}
                    </div>
                    <div className='nav-list'>
                        <div className='option-main'>
                            <ul className='options'>
                                <li><a href='#hero' className='link'>Home</a></li>
                                <li><a href='#projects'className='link'>About</a></li>
                                <li><a href='#background'className='link'>Experience</a></li>
                                <li><a href='#skills'className='link'>Skills</a></li>
                                <li><a href='#contact'className='link'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar