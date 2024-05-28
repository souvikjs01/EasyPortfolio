import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <Image src="/o1.jpg" alt="" width={200} height={200} className=''/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Project Name: <input type="text" className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 ml-1 pl-1 w-56 h-8 bg-transparent' placeholder='Eg: Tic-Tac-Toe'/></h6>
                    <p className='mb-4 text-neutral-400'><textarea className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Write short description about the project...'/></p>
                    Technologies: <input type="text"  className='mr-2 w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: Kafka'/> <button  className='mr-2 bg-purple-900 p-1 rounded-lg hover:bg-purple-500'>Add</button>
                    
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <Image src="/o1.jpg" alt="" width={200} height={200} className=''/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Automatic Portfolio Builder</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.</p>
                    <div>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>C++ SMTP</span>
                    </div>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <Image src="/o2.jpg" alt="" width={200} height={200} className=''/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Automatic Portfolio Builder</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.</p>
                    <div>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>C++ SMTP</span>
                    </div>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <Image src="/o3.jpg" alt="" width={200} height={200} className=''/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Automatic Portfolio Builder</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.</p>
                    <div>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>C++ SMTP</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects