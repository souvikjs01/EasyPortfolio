import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface ListItem {
  link: string;
  name: string;
  icon: any;
}
const Navbar = () => {
  const [checkLinkedin, setCheckLinkedin] = useState(true);
  const [checkGithub, setCheckGithub] = useState(true);
  const [checkInsta, setCheckInsta] = useState(true);
  const [linkedinLink, setlinkedinLink] = useState('');
  const [githubLink, setgithubLink] = useState('');
  const [instaLink, setinstaLink] = useState('');
  const [navsocialLinks, setnavsocialLinks] = useState<ListItem[]>([]);
  const addLink = (link: string, name: string, icon: any) => {
    setnavsocialLinks(prevItems => [...prevItems, {link: link, name: name, icon: icon}]);
  }

  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-pink-500 mr-1 text-3xl">Portfolio.</p>
      </div>
      <div className="lg:m-4 bg-blue-500 my-4 flex flex-wrap items-center justify-center lg:gap-4 text-2xl">
        <Popover>
          <div>
            {checkLinkedin && (
              <div className="relative">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaLinkedin className={`lg:h-12 lg:w-12 h-12 w-12 pr-2 my-2 `} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckLinkedin(!checkLinkedin)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            {!checkLinkedin && (
              <div className="relative">
                <span className='text-white opacity-20'>
                  <FaLinkedin className={`lg:h-12 lg:w-12 h-12 w-12 pr-2 my-2`} />
                </span>
                <div
                  onClick={() => setCheckLinkedin(!checkLinkedin)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">LinkedIn url - <div className='flex flex-row'><input value={linkedinLink} onChange={(e)=>{setlinkedinLink(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{addLink(linkedinLink, 'LinkedIn', <FaLinkedin />)}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>

        <Popover>
          <div>
            {checkGithub && (
              <div className="relative">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaGithub className={`lg:h-12 lg:w-12 h-12 w-12 py-2 ml-2 my-2`} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckGithub(!checkGithub)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            {!checkGithub && (
              <div className="relative">
                <span className='text-white opacity-20'>
                  <FaGithub className={`lg:h-12 lg:w-12 h-12 w-12 p-2 m-2`} />
                </span>
                <div
                  onClick={() => setCheckGithub(!checkGithub)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">GitHub url - <div className='flex flex-row'><input value={githubLink} onChange={(e)=>{setgithubLink(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{addLink(githubLink, 'GitHub', <FaGithub />)}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>

        <Popover>
          <div>
            {checkInsta && (
              <div className="relative">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaInstagram className={`lg:h-12 lg:w-12 h-12 w-12 p-2 m-2`} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckInsta(!checkInsta)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            {!checkInsta && (
              <div className="relative">
                <span className='text-white opacity-20'>
                  <FaInstagram className={`lg:h-12 lg:w-12 h-12 w-12 p-2 m-2`} />
                </span>
                <div
                  onClick={() => setCheckInsta(!checkInsta)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-6 h-6' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">Instagram url - <div className='flex flex-row'><input value={instaLink} onChange={(e)=>{setinstaLink(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{addLink(instaLink, 'Instagram', <FaInstagram />)}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
