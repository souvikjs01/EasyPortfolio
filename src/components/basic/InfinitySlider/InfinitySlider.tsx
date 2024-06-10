
import React, { useEffect } from "react";
import { LuLink } from "react-icons/lu";
// import { useRef } from 'react';

interface divContent {
    imageUrl?: string;
    projectName?: string;
    description?: string;
    technologies?: string[];
    github?: string;
    hosted?: string;
}
interface PropType {
    projects?: divContent[];
}
const InfinitySlider: React.FC<PropType> = ({ projects }) => {
    return (
        <div
        className="flex justify-center content-center items-center scroller overflow-x-hidden"
        style={{ transform: "rotate(5deg)" }}
        >
        <div className="scroll_inner gap-2 flex  animate-infinite_scroll ">
            {projects &&
            projects.map(
                (
                {
                    imageUrl,
                    projectName,
                    description,
                    github,
                    hosted,
                    technologies,
                },
                index
                ) => (
                <div key={index} className=" w-64 h-64  mx-2">
                    <div className="mb-8">
                    <div className="">
                        <img
                        src="/o1.jpg"
                        alt={projectName}
                        width={200}
                        height={200}
                        className="rounded-lg"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 mt-2 font-semibold">
                        {projectName}
                        </h6>
                        <p className="mb-4 text-neutral-400">
                        {description}
                        </p>
                        <div className="flex flex-wrap">
                        {technologies?.map((tech, i) => (
                            <span
                            key={i}
                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 mt-3 pt-2">
                        {github && (
                            <a
                            href={github}
                            className="flex flex-row text-blue-500"
                            >
                            <LuLink className="text-xl" />
                            Github
                            </a>
                        )}
                        {hosted && (
                            <a
                            href={hosted}
                            className="flex flex-row text-blue-500"
                            >
                            <LuLink className="text-xl" />
                            Hosted
                            </a>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                )
            )}
            
        </div>
        
        
        
        </div>
    );
};

export default InfinitySlider;
