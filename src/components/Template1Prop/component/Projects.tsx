import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuLink } from "react-icons/lu";
import InfinitySlider from "@/components/basic/InfinitySlider/InfinitySlider";
// Define the type for a project
interface ProjectStruct {
  
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

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // //console.log("weeeeeeeeeeeeee got", projects)
  
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {projects &&
          projects?.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mb-8 m-2  flex flex-wrap lg:justify-center"
              
            >
              
              <div className=" w-full lg:w-1/4">
                <img
                  src="/o1.jpg"
                  alt={project?.projectName}
                  width={200}
                  height={200}
                  className=""
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.projectName}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project?.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap gap-4 mt-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex flex-row text-blue-500"
                    >
                      <LuLink className="text-xl" />
                      Github
                    </a>
                  )}
                  {project.hosted && (
                    <a
                      href={project.hosted}
                      className="flex flex-row text-blue-500"
                    >
                      <LuLink className="text-xl" />
                      Hosted
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
