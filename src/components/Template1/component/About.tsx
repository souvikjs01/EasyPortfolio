import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></motion.h1>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Image src="/IMG_2449.jpg" alt="" height={500} width={500} className='rounded-2xl'/>
                </div>
                
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:100}} transition={{duration: 0.5}} className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit nulla animi veritatis repellat porro dolorem maiores veniam tempore, ex quidem quis vitae et voluptas nihil earum iusto temporibus ut quia recusandae? Eveniet tempora tempore, eaque hic vel culpa sed explicabo eligendi debitis saepe. Minima porro fuga soluta error, enim provident labore repellat, reprehenderit cupiditate neque saepe aliquid dicta. Temporibus reiciendis porro harum omnis.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
