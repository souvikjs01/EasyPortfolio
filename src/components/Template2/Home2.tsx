import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Link from "next/link";
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil";
import { temp2 } from "@/recoilState";
import { temp2Form } from '@/recoilState'
import Home from '../Template2Form/Home2'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"

const Home2Page = () => {
  const [temp, settemp] = useRecoilState(temp2);
  const [tempform, settempform] = useRecoilState(temp2Form);
  const { data: session} = useSession()
  const router = useRouter();
  const clickAction = () => {
    if(session?.user) {settempform(!tempform)}
    else router.push('/login');
  }
  return (
    <div>
    {!tempform && <div className=' bg-black px-10 text-white'>
      <button className=" p-2 bg-neutral-800 rounded-lg flex flex-row " onClick={()=>settemp(!temp)}><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Back</button>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      
      
      <motion.button
        className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
        onClick={clickAction}
      >
        Use This Template
      </motion.button>
      
      
    </div>
    }
    {
      tempform && <div><Home /></div>
    }

    </div>
  )
}

export default Home2Page
