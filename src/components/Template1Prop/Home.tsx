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
import SocialLinks from "./component/SocialLinks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProjectStruct {
  image?: string;
  title?: string;
  description?: string;
  technologies?: string[];
}

interface ExperienceStruct {
  duration?: string;
  title?: string;
  company?: string;
  description?: string;
  technologies?: string[];
}

interface HeroStruct {
  Name?: string;
  WhatYouAre?: string;
  Summary?: string;
}

interface ContactStruct {
  Address?: string;
  Mobile?: string;
  Email?: string;
}

interface AboutStruct {
  image?: string;
  description?: string;
}
interface TechnologyStruct {
  skill: string;
  color: any;
  icon: string;
}
interface socialLinkStruct {
  url: string;
  name: string;
  icon: any;
  color: string;
}

interface HomePageStruct {
  HeroSection?: HeroStruct;
  ContactSection?: ContactStruct;
  AboutSection?: AboutStruct;
  ProjectSection?: ProjectStruct[];
  ExperienceSection?: ExperienceStruct[];
  TechnologySection?: TechnologyStruct[];
  SocialSection?: socialLinkStruct[],
}

interface WrapAllProps {
  Data?: HomePageStruct;
}

const HomePage: React.FC<WrapAllProps> = ({ Data }) => {
  // console.log("the user data", Data?.SocialSection);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-8">
          <Navbar />
          {/* <p>{session?.user?.username}</p>
           */}
          <Hero Name={Data?.HeroSection?.Name} WhatYouAre={Data?.HeroSection?.WhatYouAre} Summary={Data?.HeroSection?.Summary}/>
          <About data={Data?.AboutSection}/>
          <Technologies technologies={Data?.TechnologySection}/>
          <Experience experiences={Data?.ExperienceSection}/>
          <Projects projects={Data?.ProjectSection}/>
          <Contact Address={Data?.ContactSection?.Address} Mobile={Data?.ContactSection?.Mobile} Email={Data?.ContactSection?.Email}/>
          <SocialLinks linked={Data?.SocialSection}/>
        </div>

        <motion.button
          className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
        >
          Update Portfolio
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
