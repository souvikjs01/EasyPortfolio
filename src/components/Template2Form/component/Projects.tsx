import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

interface ProjectItems {
    title: string;
    desc: string;
    url: string;
}
function Projects() {
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [project, setProject] = React.useState<ProjectItems[]>([]);
    const addProject = () => {
        setProject(prevProj => [...prevProj, {title: title, desc: desc, url: url}]);
        console.log(project);        
    }

  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <Image src="/o1.jpg" alt="" width={200} height={200} className='rounded-lg'/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Project Title: <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 ml-1 pl-1 w-56 h-8 bg-transparent' placeholder='Eg: Tic-Tac-Toe'/></h6>
                    <p className='mb-4 text-neutral-400'><textarea onChange={(e) => {
                        setDesc(e.target.value)
                    }} className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Description about the project...'/></p>
                    Project-URL: <input onChange={(e) => {
                        setUrl(e.target.value)
                    }} type="link"  className='mr-2 w-full h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: https://xyz-project-vercel.com'/>
                    <button onClick={addProject} className='mt-2 mr-2 bg-purple-900 px-4 py-2 rounded-lg hover:bg-purple-500'>Add</button>
                    
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects