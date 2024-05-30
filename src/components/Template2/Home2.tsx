import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Link from "next/link";
import { motion } from 'framer-motion'

const Home2 = () => {
  return (
    <div className=' bg-black px-10 text-white'>
      
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      
      <Link href={'/AddDetails_2'}>
      <motion.button
        className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}

      >
        Use This Template
      </motion.button>
      </Link>
      
    </div>
  )
}

export default Home2
