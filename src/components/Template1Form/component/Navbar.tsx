"use client"
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRecoilState, useRecoilValue } from 'recoil';
import { NavbarItems, LinkedInNavbar, GithubNavbar, InstaNavbar, fetchCount } from '@/recoilState';

interface ListItem {
  link?: string;
  name?: string;
  icon?: any;
}

interface NavStruct {
  link?: string;
  name?: string;
  icon?: any;
}
interface HomePageStruct {
  NavGithub_?: NavStruct;
  NavLinkedIn_?: NavStruct;
  NavInsta_?: NavStruct;
}

const Navbar:React.FC <HomePageStruct> = ({NavGithub_, NavLinkedIn_, NavInsta_}) => {
  //console.log("github-------------->",NavGithub_);
  //console.log("linkedin------------>", NavLinkedIn_);
  //console.log("insta--------------->", NavInsta_);
  const [checkLinkedin, setCheckLinkedin] = useState(true);
  const [checkGithub, setCheckGithub] = useState(true);
  const [checkInsta, setCheckInsta] = useState(true);
  const [linkedinUrl, setlinkedinUrl] = useState('');
  const [githubUrl, setgithubUrl] = useState('');
  const [instaUrl, setinstaUrl] = useState('');
  const [linkedinLink, setlinkedinLink] = useRecoilState(LinkedInNavbar);
  const [githubLink, setgithubLink] = useRecoilState(GithubNavbar);
  const [instaLink, setinstaLink] = useRecoilState(InstaNavbar);
  const [navsocialLinks, setnavsocialLinks] = useRecoilState<ListItem[]>(NavbarItems);
  const Count = useRecoilValue(fetchCount);

  useEffect(()=>{
    if(Count < 1) {
        if(NavGithub_ && NavGithub_.link) 
        {
          setgithubLink(NavGithub_);
          ////console.log(NavGithub_.link)
          setgithubUrl(NavGithub_?.link);
        };
        if(NavLinkedIn_ && NavLinkedIn_.link) {setlinkedinLink(NavLinkedIn_); setlinkedinUrl(NavLinkedIn_?.link);};
        if(NavInsta_ && NavInsta_.link) {setinstaLink(NavInsta_); setinstaUrl(NavInsta_?.link);};
    }
}, [NavGithub_, NavInsta_, NavLinkedIn_])

  const addLink = (link: string, name: string, icon: any) => {
    setnavsocialLinks(prevItems => [...prevItems, {link: link, name: name, icon: icon}]);
  }

  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-pink-500 mr-1 text-3xl">Portfolio.</p>
      </div>
      <div className="lg:m-4 my-4 flex flex-wrap items-center justify-center lg:gap-4 text-2xl">
        <Popover>
          <div>
            {checkLinkedin && (
              <div className="relative mx-1">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaLinkedin className={`lg:h-12 lg:w-12 h-8 w-8 pr-2 my-2 `} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckLinkedin(!checkLinkedin)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            {!checkLinkedin && (
              <div className="relative mx-1">
                <span className='text-white opacity-20'>
                  <FaLinkedin className={`lg:h-12 lg:w-12 h-8 w-8 pr-2 my-2`} />
                </span>
                <div
                  onClick={() => setCheckLinkedin(!checkLinkedin)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">LinkedIn url - <div className='flex flex-row'><input value={linkedinUrl} onChange={(e)=>{setlinkedinUrl(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{setlinkedinLink({link:linkedinUrl, name:'LinkedIn', icon: 'LinkedIn'})}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>

        <Popover>
          <div>
            {checkGithub && (
              <div className="relative mx-1">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaGithub className={`lg:h-12 lg:w-12 h-8 w-8 pr-2  my-2`} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckGithub(!checkGithub)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            {!checkGithub && (
              <div className="relative mx-1">
                <span className='text-white opacity-20'>
                  <FaGithub className={`lg:h-12 lg:w-12 h-8 w-8 pr-2 my-2`} />
                </span>
                <div
                  onClick={() => setCheckGithub(!checkGithub)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">GitHub url - <div className='flex flex-row'><input value={githubUrl} onChange={(e)=>{setgithubUrl(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{setgithubLink({link:githubUrl, name:'GitHub',icon: 'Github'})}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>

        <Popover>
          <div>
            {checkInsta && (
              <div className="relative mx-1">
                <PopoverTrigger asChild>
                  <span className='text-white opacity-100 cursor-pointer'>
                    <FaInstagram className={`lg:h-12 lg:w-12 h-8 w-8 pr-2 my-2`} />
                  </span>
                </PopoverTrigger>
                <div
                  onClick={() => setCheckInsta(!checkInsta)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./cross.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            {!checkInsta && (
              <div className="relative mx-1">
                <span className='text-white opacity-20'>
                  <FaInstagram className={`lg:h-12 lg:w-12 h-8 w-8 pr-2 my-2`} />
                </span>
                <div
                  onClick={() => setCheckInsta(!checkInsta)}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <img src="./tick.png" alt="" className='w-4 h-4' />
                </div>
              </div>
            )}
            <PopoverContent className="w-full bg-transparent text-white">Instagram url - <div className='flex flex-row'><input value={instaUrl} onChange={(e)=>{setinstaUrl(e.target.value)}} type="text" className='mr-2 w-full h-8 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent'/><button onClick={()=>{setinstaLink({link:instaUrl, name: 'Instagram', icon:'Instagram'})}} className='p-2 ml-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg'>Add</button></div></PopoverContent>
          </div>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
