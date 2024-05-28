import React from 'react'
import {motion} from 'framer-motion'
interface ExperienceItem {
    years: string;
    role: string;
    company: string;
    description: string;
    stack: string[];
  }
export default function Experience() {
    const [skills, setskills] = React.useState<string[]>([]);
    const [skill, setskill] = React.useState('');
    const [years, setyears] = React.useState('');
    const [role, setrole] = React.useState('');
    const [company, setcompany] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [experience, setexperience] = React.useState<ExperienceItem[]>([]);
    const addExperience = () => {
        setexperience(prevItems=>[...prevItems, {years: years, role: role, company: company, description: description, stack:skills}]);
        setskills([]);
    }
    const addSkill = () => {
        setskills(prevItems=>[...prevItems, skill]);
    }
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    Experience: <input value={years} onChange={(e)=>{setyears(e.target.value)}} className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-24 h-8 bg-transparent' placeholder='Eg: 2020-2021'/>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Designation: <input value={role} onChange={(e)=>{setrole(e.target.value)}} type="text" className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-48 h-8 bg-transparent' placeholder='Eg: Software Engineer'/> - <span className='text-small text-purple-100'>Company: <input value={company} onChange={(e)=>{setcompany(e.target.value)}} type="text" className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-24 h-8 bg-transparent' placeholder='Eg: Amazon'/></span>
                    </h6>
                    <p className='mb-4 text-neutral-400'><textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Write a short description about your work experience...'></textarea></p>
                    Technologies: <input type="text" value={skill} onChange={(e)=>{setskill(e.target.value)}} className='mr-2 w-24 h-8 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: Kafka'/> <button onClick={addSkill} className='mr-2 bg-purple-900 p-1 rounded-lg hover:bg-purple-500'>Add</button>
                    {/* <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>Redis</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>AWS Lambda</span> */}
                    <button onClick={addExperience} className='bg-green-900 p-1 mx-2 rounded-lg hover:bg-green-700'>Add Experience</button>
                    <div className='flex flex-row flex-wrap m-3'>
                        
                        {skills.map((key, index)=>(
                            
                            <span className='flex items-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>{key}</span>
                            
                        ))}
                        
                    
                    </div>
                    
                </motion.div>
            </div>
            {
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
            }
            
        </div>
    </div>
  )
}
