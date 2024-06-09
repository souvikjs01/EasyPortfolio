import React from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  Address?: string;
  Mobile?: string;
  Email?: string;
}

const Contact: React.FC<MyComponentProps> = ({ Address, Mobile, Email }) => {
  return (
    <div className="flex items-center justify-center pt-36">
      <div className="pb-0">
        <motion.h1 whileInView={{opacity:1, y:-100}} initial={{opacity:0, y: -200}} transition={{duration:1.5}} className="mt-10 text-center text-4xl">Contact</motion.h1>
        <div className="items-center tracking-tighter">
          <div className="flex flex-col items-start">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className="flex">
              <span className="my-4 ml-2 text-center content-center p-2 bg-neutral-900 rounded-lg text-purple-600">Address </span>
              <p className="p-2 my-4 ml-2">{Address}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className="flex">
              <span className="my-4 ml-2 text-center content-center p-2 bg-neutral-900 rounded-lg text-purple-600">Mobile   </span>
              <p className="my-4 ml-2 p-2">{Mobile}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className="flex">
              <span className="my-4 ml-2 text-center content-center p-2 bg-neutral-900 rounded-lg text-purple-600">Email   </span>
              <p className="my-4 p-2 ml-2 border-b border-blue-500">{Email}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
