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
       <button className=" p-2 mt-1 mx-2 bg-neutral-800 rounded-lg flex flex-row " onClick={()=>{setY(!temp2Form)}}><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> Go back</button>
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
        className="fixed bottom-6 left-6 bg-cyan-900 text-white rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}

      >
        <Button onClick={changeTemplate} className="rounded-lg bg-black p-2">
        Switch theme
        </Button>
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
