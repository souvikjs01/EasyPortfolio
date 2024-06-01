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
// import { useRecoilState } from "recoil";
// import { num } from "@/recoilState";

function Home() {
  // const [pp, setpp] = useRecoilState(num);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        {/* <button className="bg-blue-500" onClick={()=>setpp(pp+1)}>button value - {pp}</button> */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects/>
        <Contact />
      </div>
      
      <Link href={'/AddDetails'}>
      <motion.button
        className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}

      >
        Use This Template
      </motion.button>
      </Link>
    </div>
  );
}

export default Home;
