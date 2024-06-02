"use client";
import React from "react";
import { StickyScroll } from "../../ui/sticky-scroll-reveal"
import { motion } from "framer-motion";
const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer intrn at Delloite",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!",
      techstack: "react, next, mongodb",
      year: "2016 (six month)",
      company: "delloite"
    },
    {
      title: "Fullstack Developer intern at Paytm",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!",
      techstack: "go, rust",
      year: "2017-2018",
      company: "Paytm"
    },
    {
      title: "SDE-1 at Binance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!",
      techstack: "solana contract, solidity",
      year: "2018-2022",
      company: "Binance"
    },
    {
      title: "Worked as a senior cloud engineer at AirBNB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!",
      techstack: "AWS, K8S, Docker ",
      year: "2022-2024",
      company: "AirBNB"
    }
  ]
  return (
    <div>
       <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
      <StickyScroll content={experiences} />
    </div>
  )
}

export default Experience
