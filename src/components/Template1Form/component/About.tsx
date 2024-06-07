import React, { useEffect } from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/moving-border'
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Resume, AboutText, fetchCount } from '@/recoilState';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from 'react';

interface AboutData {
  image?: string;
  abouttext?: string;
}

// Define the prop types for the About component
interface AboutProps {
  data?: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const [checkResume, setcheckResume] = useState(false);
  const [ResumeLink_, setResumeLink_] = useRecoilState(Resume);
  const [abouttext_, setabouttext_] = useRecoilState(AboutText);
  const Count = useRecoilValue(fetchCount);
  
  useEffect(() => {
    if(Count < 1) {
      
      if(data?.abouttext) setabouttext_(data.abouttext);
      // if(data?.image)

    }
  }, [data?.abouttext])
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></motion.h1>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/2 lg:p-8'>
            
            <div className='relative flex items-center cursor-pointer justify-center group'>
            <div className='relative'>
                <Image src="/about.jpg" alt="" height={500} width={500} className='rounded-2xl group-hover:opacity-70' />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-2xl transition duration-300">
                <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">Choose Image</span>
                </div>
            </div>
            </div>

                
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:100}} transition={{duration: 0.5}} className='pb-12 flex flex-col'>
            
                <textarea value={abouttext_} onChange={(e)=>{setabouttext_(e.target.value)}} cols={30} className="mt-10 mb-5 outline-none bg-transparent tracking-tight h-24 font-light pr-16 resize-none" placeholder="Write about yourself..."></textarea>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Link href='#'>
                      <Button className='bg-black '>
                        Resume
                      </Button>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="w-full bg-transparent text-white">
                    Resume url(drive) - 
                    <div className='flex flex-row'>
                      <input value={ResumeLink_} onChange={(e)=>{setResumeLink_(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/>
                      <button>Add</button>
                    </div>
                  </PopoverContent>
                </Popover>
            </motion.div>
        </div>
    </div>
  )
}

export default About