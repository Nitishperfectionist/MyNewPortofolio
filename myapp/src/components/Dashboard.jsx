import React, { useRef } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Stats from './Stats'
import { Tools } from './Tools'

export default function Dashboard() {
  

  return (
    <>
    <Navbar   />
    <Home />
    <About />
    <Skills />
    <Tools />
    <Project/>
    <Stats />
    <Contact />
    
    
    </>
    
  )
}