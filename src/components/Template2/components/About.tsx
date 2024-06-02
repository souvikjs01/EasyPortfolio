"use client";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { Spotlight } from '@/components/ui/Spotlight'

import React from 'react'

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla rerum sapiente aliquam consequuntur commodi quod error sit suscipit quidem! Officia reprehenderit esse deserunt blanditiis earum,`;

const About = () => {
  return (
    <div className="text-center p-10 py-10 flex flex-col">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
        />
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Alex
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Fullstack Developer.
        </h3>
        <div className="text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            <TextGenerateEffect words={words} className=" text-sm font-serif font-normal opacity-70"/>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-30 h-30 sm:w-80 sm:h-80 relative overflow-hidden mt-10 sm:mt-20 md:h-96 md:w-96">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
        </div>
  </div>
  )
}

export default About
