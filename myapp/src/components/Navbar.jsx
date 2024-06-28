
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
import resume from '../image/Nitish-Kumar-Resume.pdf'
 

import profilelogo from '../image/profilelogo.svg'

import './nav.css'
import { todrive } from './todrive'
const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
     

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='home' spy={true} smooth={true} offset={-150} duration={500} className='logo'>
                    <img src={profilelogo} id='navlogo' alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                   
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="skills" spy={true} smooth={true} offset={-150} duration={500}  onClick={closeMenu} >Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='nav-item' >
                        <a href={resume} onClick={()=>todrive()} download="Nitish-Kumar-Resume" target="_blank" >Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar