"use client";
import React from "react";
import { StickyScroll } from "../../ui/sticky-scroll-reveal"
import { title } from "process";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer intrn at Delloite",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!"
    },
    {
      title: "Fullstack Developer intern at Paytm",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!"
    },
    {
      title: "SDE-1 at Paytm",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!"
    },
    {
      title: "Worked as a senior cloud engineer at AirBNB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur. Blanditiis, dolores pariatur. Excepturi similique animi ipsum sunt, non iste iusto mollitia tempora, deleniti, labore ab natus quos ducimus qui!"
    }
  ]
  return (
    <div>
      <StickyScroll content={experiences} />
    </div>
  )
}

export default Experience
