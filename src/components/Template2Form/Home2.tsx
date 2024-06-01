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
import { useRecoilState } from 'recoil';
import { temp1Form } from "@/recoilState";
import { temp2Form } from "@/recoilState";
import { temp1 } from "@/recoilState";
import { temp2 } from "@/recoilState";
const Home = () => {
  const [X, setX] = useRecoilState(temp1Form);
  const [Y, setY] = useRecoilState(temp2Form);
  const [Z, setZ] = useRecoilState(temp1);
  const [a, seta] = useRecoilState(temp2);
  const changeTemplate = () => {
    setX(!X);
    setY(!Y);
    setZ(!Z);
    seta(!a);
  }
  
  return (
    <div className="overflow-x-hidden text-neutral-300 bg-black">
      <div className="fixed top-0 -z-10 h-full w-full">
         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       </div>
       <button onClick={()=>{setX(!temp2Form)}}>{'<<< '}Go back</button>
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
        className="fixed top-36 left-6 bg-cyan-900 text-white rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}

      >
        <button onClick={changeTemplate} className="rounded-lg bg-cyan-700 hover:bg-cyan-400 p-2">
        Switch
        </button>
      </motion.div>
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
