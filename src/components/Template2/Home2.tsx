import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'

const Home2 = () => {
  return (
    <div className=' bg-black px-10 text-white'>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home2
