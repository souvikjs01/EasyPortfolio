"use client"
import React from "react";
// import Image from 'next/image'
import {motion} from 'framer-motion'
import { useRecoilState } from "recoil";
import { Name, fetchCount, HeroImage } from "@/recoilState";
import { WhatYouAre } from "@/recoilState";
import { Summary } from "@/recoilState";
import { useEffect } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from "react";

const container = (delay:any) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})
interface MyComponentProps {
  Name_?: string;
  WhatYouAre_?: string;
  Summary_?: string;
  Image_?: string;
}
const Hero : React.FC<MyComponentProps> = ({Name_, WhatYouAre_, Summary_, Image_}) => {
  const [name, setname] = useRecoilState(Name);
  const [whatuare, setwhatuare] = useRecoilState(WhatYouAre);
  const [summary, setsummary] = useRecoilState(Summary);
  const [Count, setCount] = useRecoilState(fetchCount);
  const [buttonText, setButtonText] = useState("Upload Image")
  const [url, seturl] = useRecoilState(HeroImage);
  console.log("prop image = ", Image_);
  const handelImageUpload = async(result: any) => {
    try {
        console.log(result)
        //console.log("result", result.info.url);
        setButtonText(result.info.original_filename);
        seturl(result.info.url);
        
        // toast({
        //     title: "Image uploaded, now add description",
        //     // description: "Your messages motivate us to work harder and better",
        // })
    } catch (error) {
        // toast({
        //     variant: "destructive",
        //     title: "Uh oh! Something went wrong.",
        //     description: "Image could not be uploaded.",
            
        // })
        console.log("error uploading image", error);
    }
    
}
  useEffect(() => {
    //console.log("faetchcount", Count)
    if(Count<1){
      if(Name_ || WhatYouAre_ || Summary_ || Image_){
        if(Name_) setname(Name_);
        if(WhatYouAre_) setwhatuare(WhatYouAre_);
        if(Summary_) setsummary(Summary_);
        if(Image_) seturl(Image_);
        setCount(Count+1)
      }
    }
    

  }, [Name_, WhatYouAre_, Summary_]);
  
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-12 lg:text-8xl">Selfish Coder</motion.h1> */}
            <motion.div variants={container(0)} initial="hidden" animate="visible" className="pb-8">
                <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" className="bg-transparent placeholder-cyan-300  h-24 font-thin text-3xl w-full lg:text-6xl outlie-none pr-16" style={{ caretColor: 'cyan' }} placeholder="Enter your name..."/>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>

            <motion.div variants={container(0.5)} initial="hidden" animate="visible" className="pb-4">
                <input value={whatuare} onChange={(e)=>(setwhatuare(e.target.value))} type="text" className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-slate-500 to-violet-500
            text-3xl tracking-tight h-24 placeholder:text-2xl lg:text-3xl w-full outline-noe pr-16" style={{ caretColor: 'cyan' }}  placeholder="What you are..."/>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>

            {/* <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-900 bg-clip-text
            text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span> */}
            <motion.div variants={container(1)} initial="hidden" animate="visible" className="pb-12">
                <textarea value={summary} onChange={(e)=>{setsummary(e.target.value)}} cols={35} className="mt-6 bg-transparent tracking-tight w-full outline-none h-24 font-light pr-16 resize-none" placeholder="Write a brief summary..."></textarea>
                {/* <img src="pen.png" alt="Pen Icon" className="absolute top-0 right-0 w-10 h-10" /> */}
            </motion.div>
            


          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center content-center">
        <CldUploadWidget uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onSuccess={handelImageUpload}>
      
          {({ open }) => {
            return (
              <button className="p-2 m-2 bg-cyan-700 rounded-lg hover:bg-cyan-500" onClick={() => open()}>
                {buttonText}
              </button>
            );
          }}
        </CldUploadWidget>
        </div>
        <div className="relative flex justify-center cursor-pointer group">
        {HeroImageLocal(url)}
      </div>
        </div>
      </div>
    </div>
  );
}
function HeroImageLocal(url: string) {
  return <div className='relative'>

    

    <motion.img
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      src={url}
      alt="Image"
      height={100}
      width={100}
      style={{ height: '450px', width: 'auto', borderRadius: '10px' }}
      className='rounded-xl group-hover:opacity-70' />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-xl transition duration-300">
      <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">Choose Image</span>
    </div>
  </div>;
}

export default Hero