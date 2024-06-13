"use client";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { Spotlight } from '@/components/ui/Spotlight'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { Name, fetchCount } from "@/recoilState";
import { WhatYouAre } from "@/recoilState";
import { Summary } from "@/recoilState";

const container = (delay:any) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla rerum sapiente aliquam consequuntur commodi quod error sit suscipit quidem! Officia reprehenderit esse deserunt blanditiis earum,`;
interface MyComponentProps {
    Name_?: string;
    WhatYouAre_?: string;
    Summary_?: string;
}
const About = ({ Name_, WhatYouAre_, Summary_}: MyComponentProps) => {
    const [name, setname] = useRecoilState(Name);
    const [whatuare, setwhatuare] = useRecoilState(WhatYouAre);
    const [summary, setsummary] = useRecoilState(Summary);
    const [Count, setCount] = useRecoilState(fetchCount)
    
    useEffect(() => {
        //console.log("faetchcount", Count)
        if(Count<1){
            if(Name_ || WhatYouAre_ || Summary_){
            if(Name_) setname(Name_);
            if(WhatYouAre_) setwhatuare(WhatYouAre_);
            if(Summary_) setsummary(Summary_);
            setCount(Count+1)
          }
        }
    }, [Name_, WhatYouAre_, Summary_]);
  return (
    <div className="text-center p-10 py-10 flex flex-col">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
        />
        {/* <p>Name is - {name}</p> */}
        <motion.div variants={container(0)} initial="hidden" animate="visible" className="pb-16">
            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" className="bg-transparent placeholder-cyan-300 h-12 font-thin text-xl sm:text-3xl w-full sm:w-[50%] lg:text-3xl outlie-none pr-16" style={{ caretColor: 'cyan' }} placeholder="Enter your name..."/>
        </motion.div>
        <motion.div variants={container(0.5)} initial="hidden" animate="visible" className="pb-12">
            <input value={whatuare} onChange={(e)=>(setwhatuare(e.target.value))} type="text" className="bg-transparent tracking-tight h-12 font-thin text-xl lg:text-3xl w-full sm:w-[50%] outline-noe pr-16"  placeholder="What's your profession"/>
        </motion.div>
        {/* <div className="text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            <TextGenerateEffect words={words} />
        </div> */}
        <motion.div variants={container(1)} initial="hidden" animate="visible" className="pb-12">
            <textarea value={summary} onChange={(e)=>{setsummary(e.target.value)}} cols={35} className="mt-10 bg-transparent tracking-tight w-full sm:w-[50%] lg:px-0 h-24 font-light pr-16 resize-none" placeholder="Write a brief summary..."></textarea>
               
        </motion.div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-80 sm:h-80 relative overflow-hidden mt-10 sm:mt-20 md:h-96 md:w-96">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
        </div>
  </div>
  )
}

export default About