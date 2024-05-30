import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <div className=' border-nautral-900 pb-20'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-10 text-center text-4xl'>Contact</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='my-4 w-full text-purple-400'>Address:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz street'/></motion.p>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5}} className='my-4 w-full text-purple-400'>Email @:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz@abc.com'/></motion.p>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:2}} className='my-4 w-full text-purple-400'>Contact:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='+91XXXXXXXXXX'/></motion.p>
        </div>
    </div>
  )
}

export default Contact