import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></motion.h1>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/2 lg:p-8'>
                <div className=' relative flex items-center justify-center'>
                    <Image src="/about.jpg" alt="" height={500} width={500} className='rounded-2xl'/>
                    <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-8 w-10 h-10" />
                </div>
                
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:100}} transition={{duration: 0.5}} className='pb-12'>
            
                <textarea cols={30} className="mt-10 outline-none bg-transparent tracking-tight h-24 font-light pr-16 resize-none" placeholder="Write about yourself..."></textarea>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            
            </motion.div>
        </div>
    </div>
  )
}