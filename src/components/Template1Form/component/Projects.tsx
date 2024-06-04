import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { LuLink } from "react-icons/lu";
import { useRecoilState } from 'recoil';
import { projectState } from '@/recoilState';

interface ProjectItem {
    projectName: string;
    description: string;
    technologies: string[];
    github: string;
    hosted: string;
  }
function Projects() {
    const [projectName, setprojectName] = useState('');
    const [description, setdescription] = useState('');
    const [technologies, settechnologies] = useState<string[]>([]);
    const [tech, settech] = useState('');
    const [Projects, setProjects] = useRecoilState(projectState);
    const [github, setgithub] = useState('');
    const [hosted, sethosted] = useState('');

    const addTechnology = () => {
        settechnologies(prevItem => [...prevItem, tech]);
    }

    const addProject = () => {
        setProjects(prevItem => [...prevItem, {projectName: projectName, description: description, technologies: technologies, github: github, hosted: hosted}]);
    }
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='bg-slate-700 lg:mx-20 bg-opacity-10 p-2 rounded-lg mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4 my-2'>
                    <Image src="/o1.jpg" alt="" width={200} height={200} className='rounded-lg'/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Project Name - <input type="text" value={projectName} onChange={(e)=>{setprojectName(e.target.value)}} className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 ml-1 pl-1 w-56 h-8 bg-transparent' placeholder='Eg: Tic-Tac-Toe'/></h6>
                    <p className='mb-4 text-neutral-400'><textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Write short description about the project...'/></p>
                    Technologies - <input type="text" value={tech} onChange={(e)=>{settech(e.target.value)}}  className='mr-2 w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: Kafka'/> <button onClick={addTechnology}  className='mr-2 bg-purple-900 p-1 rounded-lg hover:bg-purple-500'>Add</button>
                    
                        <div className='mt-2 flex flex-row flex-wrap'>
                            {technologies.map((techi)=>(
                                <div className='mt-1 mr-1'>
                                    <span className=' rounded bg-neutral-900  px-2 py-1 text-sm font-medium text-purple-600'>{techi}</span>
                                </div>
                            ))}
                        </div>
                        <div className='mt-2'>
                            Github Link - <input type="text" name="" value={github} onChange={(e)=>{setgithub(e.target.value)}} className='mr-2 w-full lg:w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/>
                            Hosted Link - <input type="text" name="" value={hosted} onChange={(e)=>{sethosted(e.target.value)}} className='mr-2 w-full lg:w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/>
                        </div>
                        <button onClick={addProject}  className='bg-green-900 p-3 my-2 mx-2 rounded-lg hover:bg-green-700'>Add Project</button>
                    
                </div>
            </motion.div>
            {Projects.map(({projectName, description, technologies, github, hosted})=>(
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <Image src="/o1.jpg" alt="" width={200} height={200} className='rounded-lg'/>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{projectName}</h6>
                        <p className='mb-4 text-neutral-400'>{description}</p>
                        <div className='mt-2 flex flex-row flex-wrap'>
                            {technologies.map((techi)=>(
                                <div className='mt-1 mr-1'>
                                    <span className=' rounded bg-neutral-900  px-2 py-1 text-sm font-medium text-purple-600'>{techi}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row flex-wrap gap-4 mt-3 pt-2'>
                            {github && (<a href={github} className='flex flex-row text-blue-500'><LuLink className='text-xl'/>Github</a>)}
                            {hosted && (<a href={hosted} className='flex flex-row text-blue-500'><LuLink className='text-xl'/>Hosted</a>)}
                        </div>
                        
                    </div>
                </motion.div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Projects