import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { experienceState, fetchCount } from '@/recoilState';
import { useRecoilState, useRecoilValue } from 'recoil';

interface ExperienceStruct {
    years?: string;
    role?: string;
    company?: string;
    description?: string;
    stack?: string[];
  }
  interface ExperienceItem {
    years: string;
    role: string;
    company: string;
    description: string;
    stack: string[];
  }
  
  // Define the prop types for the Experience component
  interface ExperienceProps {
    experiences_?: ExperienceStruct[];
  }
  const Experience: React.FC<ExperienceProps> = ({ experiences_ }) => {
    const [skills, setskills] = React.useState<string[]>([]);
    const [skill, setskill] = React.useState('');
    const [years, setyears] = React.useState('');
    const [role, setrole] = React.useState('');
    const [company, setcompany] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [experience, setexperience] = useRecoilState<ExperienceStruct[]>(experienceState);
    const Count = useRecoilValue(fetchCount);
    // //console.log("experience_ prop == ", experiences_)
    // //console.log("experience prop == ", experience)
    const deleteExperience = (index: number) => {
        setexperience(prevExperience => prevExperience.filter((_, i) => i !== index));
      };
    useEffect(()=>{
        if(Count < 1) {
            if(experiences_ ) setexperience(experiences_);
        }
    }, [experiences_])

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
            <div className=' bg-slate-700 lg:mx-20 bg-opacity-10 p-2 rounded-lg mb-8 flex flex-wrap lg:justify-center'>
                
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    Experience: <input value={years} onChange={(e)=>{setyears(e.target.value)}} className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 ml-1 pl-1 w-28 h-8 bg-transparent' placeholder='Eg: 2020-2021'/>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Role: <input value={role} onChange={(e)=>{setrole(e.target.value)}} type="text" className='mb-2 ml-1 pl-1 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-48 h-8 bg-transparent' placeholder='Eg: Software Engineer'/> - <span className='text-small text-purple-100'>Company: <input value={company} onChange={(e)=>{setcompany(e.target.value)}} type="text" className='mb-2 ml-1 pl-1 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 w-24 h-8 bg-transparent' placeholder='Eg: Amazon'/></span>
                    </h6>
                    <p className='mb-4 text-neutral-400'><textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Write a short description about your work experience...'></textarea></p>
                    Technologies: <input type="text" value={skill} onChange={(e)=>{setskill(e.target.value)}} className='mr-2 w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: Kafka'/> <button onClick={addSkill} className='mr-2 bg-purple-900 p-1 rounded-lg hover:bg-purple-500'>Add</button>
                    
                    <div className='flex flex-row flex-wrap mt-3'>
                        
                        {skills.map((key, index)=>(
                            
                            <span key={index} className='flex items-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>{key}</span>
                            
                        ))}
                        
                    
                    </div>
                    <button onClick={addExperience} className='bg-green-900 p-3 my-2 mx-2 rounded-lg hover:bg-green-700'>Add Experience</button>
                </motion.div>
            </div>
            {experience.map(({years, role, company, description, stack}, index)=>(
                    <div key={index}>
                        <div className='mb-8 relative flex flex-wrap lg:justify-center'>
                        <img onClick={() => deleteExperience(index)} src="/cross.png" alt="cross" width={20} height={20} className="absolute right-0 top-0"/>
                            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                                <p className='mb-2 text-sm text-neutral-400'>{years}</p>
                            </motion.div>
                            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>
                                    {role} - <span className='text-small text-purple-100'>{company}</span>
                                </h6>
                                <p className='mb-4 text-neutral-400'>{description}</p>
                                <div className='mt-2 flex flex-row flex-wrap'>
                                {stack && stack.map((tech, index)=>(
                                    <div key={index}>
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

export default Experience