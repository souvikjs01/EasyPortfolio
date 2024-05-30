
"use client"
import React from 'react'
import Navbar from "./component/Navbar";
import {motion} from 'framer-motion';
import { Button } from "../ui/moving-border";
import About from "./component/About"
import Technologies from "../Template1Form/component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "../Template1Form/component/Contact";
import SocialLinks from '../Template1Form/component/SocialLinks';

const Home = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 bg-black">
      <div className="fixed top-0 -z-10 h-full w-full">
         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       </div>
       <div className="container mx-auto px-8">
          <Navbar />
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Contact/>
          <SocialLinks/>
        </div>
          
         <motion.div
            className="fixed bottom-6 right-6 bg-cyan-900 text-white rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
    
          >
           <Button >Publish Portfolio</Button>
          </motion.div>
    
          
    </div>
  )
}

export default Home
