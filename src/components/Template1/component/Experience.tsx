import React from 'react'
import {motion} from 'framer-motion'

export default function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2020 - 2022</p>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Software Engineer II - <span className='text-small text-purple-100'>Google Inc.</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>Redis</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>AWS Lambda</span>
                </motion.div>
            </div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:2}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2020 - 2022</p>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:2}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Software Engineer II - <span className='text-small text-purple-100'>Google Inc.</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>Redis</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>AWS Lambda</span>
                </motion.div>
            </div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:2.5}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2020 - 2022</p>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:2.5}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        Software Engineer II - <span className='text-small text-purple-100'>Google Inc.</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>GraphQL</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>Redis</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>AWS Lambda</span>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
