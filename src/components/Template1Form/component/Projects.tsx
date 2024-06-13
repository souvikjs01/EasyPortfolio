import React, { useEffect } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { LuLink } from "react-icons/lu";
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchCount, projectState } from '@/recoilState';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
interface ProjectStruct {
    image?: string;
    projectName?: string;
    description?: string;
    technologies?: string[];
    github?: string;
    hosted?: string;
  }
  
  // Define the prop types for the Projects component
  interface ProjectsProps {
    projects?: ProjectStruct[];
  }
  
  const Projects: React.FC<ProjectsProps> = ({ projects }) =>{
    const [projectName, setprojectName] = useState('');
    const [description, setdescription] = useState('');
    const [technologies, settechnologies] = useState<string[]>([]);
    const [tech, settech] = useState('');
    const [Projects, setProjects] = useRecoilState(projectState);
    const [github, setgithub] = useState('');
    const [hosted, sethosted] = useState('');
    const [buttonText, setButtonText] = useState("Upload Image");

    const [projectImage, setprojectImage] = useState('/o2.jpg');

    const Count = useRecoilValue(fetchCount);
    const handelImageUpload = async (result: any) => {
        try {
          console.log(result);
          //console.log("result", result.info.url);
          setButtonText(result.info.original_filename);
          setprojectImage(result.info.url);
    
          // toast({
          //     title: "Image set to be uploaded",
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
      };
    const deleteProject = (index: number) => {
        setProjects(prevProjects => prevProjects.filter((_, i) => i !== index));
      };
    useEffect(()=>{
        if(Count < 1) {
            if(projects ) setProjects(projects);
        }
    }, [projects])
    const addTechnology = () => {
        settechnologies(prevItem => [...prevItem, tech]);
    }

    const addProject = () => {
        setProjects(prevItem => [...prevItem, {image:projectImage, projectName: projectName, description: description, technologies: technologies, github: github, hosted: hosted}]);
    }
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='bg-slate-700 lg:mx-20 bg-opacity-10 p-2 rounded-lg mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4 my-2'>
                <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onSuccess={handelImageUpload}
              >
                {
                
                ({ open }) => {
                  return (
                    <button
                      className="p-2 m-2 bg-cyan-700 rounded-lg hover:bg-cyan-500"
                      onClick={() => open()}
                    >
                      {buttonText}
                    </button>
                  );
                }}
              </CldUploadWidget>
                    <img src={projectImage} alt="" width={200} height={200} className='rounded-lg'/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Project Name - <input type="text" value={projectName} onChange={(e)=>{setprojectName(e.target.value)}} className='mb-2 text-sm outline outline-blue-500 outline-1 rounded-lg text-neutral-400 ml-1 pl-1 w-56 h-8 bg-transparent' placeholder='Eg: Tic-Tac-Toe'/></h6>
                    <p className='mb-4 text-neutral-400'><textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full ml-1 pl-1 mb-2 outline outline-blue-500 outline-1 h-32 rounded-lg text-neutral-400 bg-transparent' placeholder='Write short description about the project...'/></p>
                    Technologies - <input type="text" value={tech} onChange={(e)=>{settech(e.target.value)}}  className='mr-2 w-24 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='Eg: Kafka'/> <button onClick={addTechnology}  className='mr-2 bg-purple-900 p-1 rounded-lg hover:bg-purple-500'>Add</button>
                    
                        <div className='mt-2 flex flex-row flex-wrap'>
                            {technologies.map((techi, index)=>(
                                <div key={index} className='mt-1 mr-1'>
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
            {Projects.map(({image, projectName, description, technologies, github, hosted}, index)=>(
                <motion.div key={index} whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='mb-8 relative flex flex-wrap lg:justify-center'>
                    {image && <div className='w-full lg:w-1/4'>
                        <img src={image} alt="" width={200} height={200} className='rounded-lg'/>
                    </div>}
                    <img onClick={() => deleteProject(index)} src="/cross.png" alt="cross" width={20} height={20} className="absolute right-0 top-0"/>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{projectName}</h6>
                        <p className='mb-4 text-neutral-400'>{description}</p>
                        <div className='mt-2 flex flex-row flex-wrap'>
                            {technologies && technologies.map((techi, index)=>(
                                <div key={index} className='mt-1 mr-1'>
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