import React from 'react'
import {motion} from 'framer-motion'
interface ExperienceItem {
    title: string;
    description: string;
}
export default function Experience() {
    const [title, setTitle] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [experience, setexperience] = React.useState<ExperienceItem[]>([]);
    const addExperience = () => {
        console.log(experience);        
        setexperience(prevItems=>[...prevItems, {title: title, description: description}]);
    }
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                
                
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Title: <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className='mb-2 ml-1 pl-1 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-full h-8 bg-transparent' placeholder='Eg: Software Engineer, Data scientist, etc.'/>
                    </h6>
                    <p className='mb-4'>
                        Description: <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Description about your work experience including company, tech stacks, duration,role etc.'></textarea>
                    </p> 
                    <button onClick={addExperience} className='bg-green-900 rounded-lg px-4 py-2 hover:bg-green-700'>Add Experience</button>
                </motion.div>
            </div>
            {/* {
                experience.map(({years, role, company, description, stack}, index)=>(
                    <div>
                        <div className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                                <p className='mb-2 text-sm text-neutral-400'>{years}</p>
                            </motion.div>
                            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>
                                    {role} - <span className='text-small text-purple-100'>{company}</span>
                                </h6>
                                <p className='mb-4 text-neutral-400'>{description}</p>
                                <div className='m-2 flex flex-row flex-wrap'>
                                {stack.map((tech, index)=>(
                                    <div>
                                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>{tech}</span>
                                    </div>
                                ))}
                                </div>
                                
                                
                            </motion.div>
                        </div>
                    </div>
                ))
            } */}
            
        </div>
    </div>
  )
}
