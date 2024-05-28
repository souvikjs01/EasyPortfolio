import React from "react";
// import Image from 'next/image'
import {motion} from 'framer-motion'

const container = (delay:any) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})
export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-12 lg:text-8xl">Selfish Coder</motion.h1> */}
            <motion.div variants={container(0)} initial="hidden" animate="visible" className="pb-16">
                <input type="text" className="bg-transparent placeholder-cyan-300 h-24 font-thin text-3xl w-full lg:text-6xl outline-none pr-16" style={{ caretColor: 'cyan' }} placeholder="Enter your name..."/>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>

            <motion.div variants={container(0.5)} initial="hidden" animate="visible" className="pb-12">
                <input type="text" className="bg-transparent tracking-tight h-24 font-thin text-3xl w-full outline-none pr-16"  placeholder="What you are..."/>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>

            {/* <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-900 bg-clip-text
            text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span> */}
            <motion.div variants={container(1)} initial="hidden" animate="visible" className="pb-12">
                <textarea cols={35} className="mt-10 outline-none bg-transparent tracking-tight px-12 lg:px-0 h-24 font-light pr-16 resize-none" placeholder="Write a brief summary..."></textarea>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>

          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center ">
                <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src="./person.jpg" alt="Image" height={100} width={100} style={{height:'450px', width:'auto', borderRadius:'10px'}}/>
            </div>
        </div>
      </div>
    </div>
  );
}