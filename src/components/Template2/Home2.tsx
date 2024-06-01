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
      <button onClick={()=>settemp(!temp)}>{'<<<'} Back</button>
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
