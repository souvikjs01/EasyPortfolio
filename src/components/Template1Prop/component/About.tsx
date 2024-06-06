import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Define the type for the about data
interface AboutData {
  image?: string;
  abouttext?: string;
}

// Define the prop types for the About component
interface AboutProps {
  data?: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  console.log("in about section", data);
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className='my-20 text-center text-4xl'
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>
      {data && 
      < div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }} 
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            {data.image && <Image src={data.image} alt="About Image" height={500} width={500} className='rounded-2xl'/>}
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.5 }} 
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{data.abouttext}</p>
          </div>
        </motion.div>
      </div>
}
    </div>
  )
}

export default About
