"use client"
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Technologies from "./component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { temp1 } from "@/recoilState";
import { temp1Form } from "@/recoilState";
import Home from "../Template1Form/Home1";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
// import { useRecoilState } from "recoil";
// import { num } from "@/recoilState";
const aboutData = {
  image: "/about.jpg",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit nulla animi veritatis repellat porro dolorem maiores veniam tempore, ex quidem quis vitae et voluptas nihil earum iusto temporibus ut quia recusandae? Eveniet tempora tempore, eaque hic vel culpa sed explicabo eligendi debitis saepe. Minima porro fuga soluta error, enim provident labore repellat, reprehenderit cupiditate neque saepe aliquid dicta. Temporibus reiciendis porro harum omnis."
}
const experienceData = [
  {
    duration: "2020 - 2022",
    title: "Software Engineer II",
    company: "Google Inc.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.",
    technologies: ["GraphQL", "Redis", "AWS Lambda"]
  },
  {
    duration: "2018 - 2020",
    title: "Software Engineer I",
    company: "Amazon Inc.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.",
    technologies: ["Node.js", "React", "AWS"]
  },
  {
    duration: "2016 - 2018",
    title: "Junior Software Engineer",
    company: "Facebook Inc.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Impedit autem eligendi beatae dolorum, veritatis voluptatum esse accusantium tenetur eveniet totam porro ut dolor officia aliquam iure. Velit, nostrum? Veniam, soluta. Ratione, molestiae.",
    technologies: ["Python", "Django", "GraphQL"]
  }
]
const projectData = [
  {
    image: "/o1.jpg",
    title: "Automatic Portfolio Builder",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.",
    technologies: ["GraphQL", "C++ SMTP"]
  },
  {
    image: "/o2.jpg",
    title: "Project Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.",
    technologies: ["React", "Node.js"]
  },
  {
    image: "/o3.jpg",
    title: "Project Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptate. Recusandae culpa laborum animi labore, earum soluta impedit! Et tempora ipsa quaerat deleniti, soluta fuga adipisci, eaque non fugiat necessitatibus nisi reprehenderit at incidunt.",
    technologies: ["Python", "Django"]
  }
]
function HomePage() {

  // const [pp, setpp] = useRecoilState(num);\
  const router = useRouter();
  const [temp, settemp] = useRecoilState(temp1);
  const [tempform, settempform] = useRecoilState(temp1Form);
  const { data: session} = useSession()
  
  const clickAction = () => {
    console.log(session);
    if(session?.user) {settempform(!tempform)}
    else router.push('/login');
  }
  console.log(session);
  return (
    <div>
    {!tempform && <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <button className=" mx-2 mt-1 p-2 bg-neutral-800 rounded-lg flex flex-row " onClick={()=>settemp(!temp)}><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Back</button>
      <div className="container mx-auto px-8">
        {/* <button className="bg-blue-500" onClick={()=>setpp(pp+1)}>button value - {pp}</button> */}
        <Navbar />
        {/* <p>{session?.user?.username}</p>
        <p>{session?.user?.name}</p> */}
        <Hero Name="Shubhradip"  WhatYouAre="Software Engineer III" Summary="A passionate full stack developer"/>
        <About data={aboutData}/>
        <Technologies />
        <Experience experiences={experienceData}/>
        <Projects projects={projectData}/>
        <Contact Address="Shyamchand bagan lane Lahiribagan, pin-741404, Santipur, Nadia, West Bengal" Mobile="+916294537321" Email="shubhradipsarkar@gmail.com"/>
      </div>
      
      
      <motion.button
        className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
        onClick={clickAction}
      >
        Use This Template
      </motion.button>
      
    </div>}
    {
      tempform && <div><Home /></div>
    }
    </div>
  );
}

export default HomePage;
