import React from 'react'
import { motion } from 'framer-motion'

// Define the type for an experience
interface ExperienceStruct {
  duration?: string;
  title?: string;
  company?: string;
  description?: string;
  technologies?: string[];
}

// Define the prop types for the Experience component
interface ExperienceProps {
  experiences?: ExperienceStruct[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h1>
      <div>
        {experiences && experiences.map((exp, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -100 }} 
              transition={{ duration: 1 + index * 0.5 }} 
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400'>{exp.duration}</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 100 }} 
              transition={{ duration: 1 + index * 0.5 }} 
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>
                {exp.title} - <span className='text-small text-purple-100'>{exp.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{exp.description}</p>
              <div>
                {exp?.technologies?.map((tech, i) => (
                  <span 
                    key={i} 
                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
