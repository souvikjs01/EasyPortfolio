"use client"

import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Technologies from "./component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import SocialLinks from "./component/SocialLinks";
import {motion} from 'framer-motion';
import { Button } from "../ui/moving-border";
import { useRecoilState, useRecoilValue } from "recoil";
import { GithubNavbar, InstaNavbar, LinkedInNavbar, NavbarItems, temp1Form } from "@/recoilState";
import { temp2Form } from "@/recoilState";
import { temp1 } from "@/recoilState";
import { temp2 } from "@/recoilState";
// importing the profile information
import { useRouter } from "next/navigation";
import {Name, WhatYouAre, Summary, Resume, AboutText, Technology_, Address, Email, Mobile, SocialHandles, experienceState, projectState} from '@/recoilState';
import axios from "axios";
import { useSession } from "next-auth/react";
interface ProjectStruct {
    projectName?: string;
    description?: string;
    technologies?: string[];
    github?: string;
    hosted?: string;
}

interface ExperienceStruct {
  years?: string;
  role?: string;
  company?: string;
  description?: string;
  stack?: string[];
}

interface HeroStruct {
  Name?: string;
  WhatYouAre?: string;
  Summary?: string;
  Image?: string;
}

interface ContactStruct {
  Address?: string;
  Mobile?: string;
  Email?: string;
}

interface AboutStruct {
  image?: string;
  abouttext?: string;
}

interface TechnologyStruct {
  skill?: string;
  color?: any;
  icon?: string;
}
interface socialLinkStruct {
  url: string;
  name: string;
  icon: any;
  color: string;
}
interface NavStruct {
  link?: string;
  name?: string;
  icon?: any;
}
interface HomePageStruct {
  NavGithubSection?: NavStruct;
  NavLinkedInSection?: NavStruct;
  NavInstaSection?: NavStruct;
  HeroSection?: HeroStruct;
  ContactSection?: ContactStruct;
  AboutSection?: AboutStruct;
  ProjectSection?: ProjectStruct[];
  ExperienceSection?: ExperienceStruct[];
  TechnologySection?: TechnologyStruct[];
  SocialSection?: socialLinkStruct[];
}
interface fetchedfromBackend {
  navbar?: {link: string, name: string, icon: any}[];
  navgithub?: {link: string, name: string, icon: any},
  navinsta?: {link: string, name: string, icon: any},
  navlinkedin: {link: string, name: string, icon: any},
  template?: string;
  username?: string;
  whatyouare?: string;
  summary?: string;
  image?: string;
  abouttext?: string;
  address?: string;
  mobile?: string;
  sociallinks?: { url: string; name: string; icon: string,  color: string}[];
  technology?: { skill: string; color: string, icon: string}[];
  projects?: {
    projectName?: string;
    description?: string;
    technologies?: string[];
    github?: string;
    hosted?: string;
  }[];
  experience?: {
    years?: string;
    role?: string;
    company?: string;
    description?: string;
    stack?: string[];
  }[];
  stack?: string[];
  email?: string;
}
function Home() {
  const [publish, setpublish] = React.useState('Publish Portfolio');
  const [X, setX] = useRecoilState(temp1Form);
  const [Y, setY] = useRecoilState(temp2Form);
  const [Z, setZ] = useRecoilState(temp1);
  const [a, seta] = useRecoilState(temp2);
  const router = useRouter();
  const template = "template1"
  // const NavVal = useRecoilState(NavbarItems);
  const NavGithub = useRecoilValue(GithubNavbar);
  const NavLinkedIn = useRecoilValue(LinkedInNavbar);
  const NavInsta = useRecoilValue(InstaNavbar);
  const NameVal = useRecoilValue(Name);
  const WhatYouAreVal = useRecoilValue(WhatYouAre);
  const SummaryVal = useRecoilValue(Summary);
  const ResumeVal = useRecoilValue(Resume);
  const AboutTextVal = useRecoilValue(AboutText);
  const Technology_Val = useRecoilValue(Technology_);
  const AddressVal = useRecoilValue(Address);
  const EmailVal = useRecoilValue(Email);
  const MobileVal = useRecoilValue(Mobile);
  const SocialHandlesVal = useRecoilValue(SocialHandles);
  const projectStateVal = useRecoilValue(projectState);
  const experienceStateVal = useRecoilValue(experienceState);
  const {data: session} = useSession();
  const [email, setemail] = React.useState('');
  const [fetchedfromBackend, setfetchedfromBackend] = React.useState<fetchedfromBackend>();
  
  function cleanEmailAddress(email: string): string {
    // Split the email into local part and domain part
    const [localPart, domainPart] = email.split('@');

    // Define regular expressions to match allowed characters
    const localRegex = /[^a-zA-Z0-9.]/g; // Allow letters, digits, and periods in local part
    const domainRegex = /[^a-zA-Z0-9]/g; // Allow letters and digits in domain part

    // Clean the local and domain parts
    const cleanedLocalPart = localPart.replace(localRegex, '');
    const cleanedDomainPart = domainPart ? domainPart.replace(domainRegex, '') : '';

    // Combine the cleaned parts without @
    const cleanedEmail = `${cleanedLocalPart}${cleanedDomainPart}`;

    return cleanedEmail;
}

useEffect(()=>{
  if(session?.user.email){
    const cleanedEmail = cleanEmailAddress(session?.user.email);
    setemail(cleanedEmail);
  }
}, [session?.user.email]);

useEffect(() => {
  const fetchData = async() => {
    try {
      if(session?.user)
      { //console.log("finding through", cleanEmailAddress(session?.user.email));
      const profile = await axios.put('../../api/users/uploadInformation', {
        findUser: cleanEmailAddress(session?.user.email),
      })
      //console.log("profile ======= ", profile.data.PortfolioData[0]);
      setfetchedfromBackend(profile.data.PortfolioData[0]);
    }
    } catch (error) {
      
    }
  }
  fetchData();
},[]);
const data:HomePageStruct = {
  NavGithubSection:{link: fetchedfromBackend?.navgithub?.link, name: fetchedfromBackend?.navgithub?.name, icon: fetchedfromBackend?.navgithub?.icon},
  NavLinkedInSection:{link: fetchedfromBackend?.navlinkedin?.link, name: fetchedfromBackend?.navlinkedin?.name, icon: fetchedfromBackend?.navlinkedin?.icon},
  NavInstaSection:{link: fetchedfromBackend?.navinsta?.link, name: fetchedfromBackend?.navinsta?.name, icon: fetchedfromBackend?.navinsta?.icon},
  HeroSection: {Name: fetchedfromBackend?.username, WhatYouAre: fetchedfromBackend?.whatyouare, Summary: fetchedfromBackend?.summary},
  ContactSection: {Address: fetchedfromBackend?.address, Mobile: fetchedfromBackend?.mobile, Email: fetchedfromBackend?.email},
  ProjectSection: fetchedfromBackend?.projects?.map(project => ({
    projectName: project?.projectName,
    description: project?.description,
    technologies: project?.technologies,
    github: project?.github,
    hosted: project?.hosted,
  })),
  ExperienceSection: fetchedfromBackend?.experience?.map(experience => ({
    years: experience?.years,
    role: experience?.role,
    company: experience?.company,
    description: experience?.description,
    stack: experience?.stack,
  })),
  TechnologySection: fetchedfromBackend?.technology?.map(tech => ({
    skill: tech?.skill,
    color: tech?.color,
    icon: tech?.icon,
  })),
  AboutSection: {
    abouttext: fetchedfromBackend?.abouttext,
    image: '/aboutDefault.jpg',
  },
  SocialSection:fetchedfromBackend?.sociallinks?.map(social=>({
    url: social.url,
    name: social.name,
    icon: social.icon,
    color: social.color,
  })),
}
//console.log("complete data ========== ", data)
  const changeTemplate = () => {
    setX(!X);
    setY(!Y);
    setZ(!Z);
    seta(!a);
  }
  const PublishPortfolio = async () => {
    try {
      setpublish('Publishing...')
      

      const portfolio = await axios.post('../../api/users/uploadInformation', {
        navgithub:NavGithub, navlinkedin:NavLinkedIn, navinsta:NavInsta, template:template ,username: NameVal, findUser: email, whatyouare: WhatYouAreVal, summary: SummaryVal, resume: ResumeVal, abouttext: AboutTextVal, address: AddressVal, mobile: MobileVal, sociallinks: SocialHandlesVal, technology: Technology_Val, projects: projectStateVal, experience: experienceStateVal, email: EmailVal
      });
      // //console.log('uploaded', portfolio)
      router.push(`/Profile/${email}`)
    } catch (error) {
      setpublish('Try again');
      //console.log('error', error);
    } finally{
      setpublish('redirecting...');
    }
    
  }

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <button className=" p-2 bg-neutral-800 rounded-lg flex flex-row " onClick={()=>{setX(!temp1Form)}}><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> Go back</button>
      <div className="container mx-auto px-8">
        <Navbar NavGithub_={data.NavGithubSection} NavLinkedIn_={data.NavLinkedInSection} NavInsta_={data.NavInstaSection}/>
        <Hero Name_={data.HeroSection?.Name} WhatYouAre_={data.HeroSection?.WhatYouAre} Summary_={data.HeroSection?.Summary}/>
        <About data={data.AboutSection}/>
        <Technologies technologies_={data.TechnologySection}/>
        <Experience experiences_={data.ExperienceSection}/>
        <Projects projects={data.ProjectSection}/>
        <Contact Address_={data.ContactSection?.Address} Mobile_={data.ContactSection?.Mobile} Email_={data.ContactSection?.Email}/>
        <SocialLinks linked_={data.SocialSection}/>

      </div>
      
      <motion.div
        className="fixed bottom-6 left-6 bg-cyan-900 text-white rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}

      >
        <Button onClick={changeTemplate} className="rounded-lg bg-black p-2">
        Switch theme
        </Button>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 bg-cyan-900 text-white rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
        onClick={PublishPortfolio}
      >
        <Button >{publish}</Button>
      </motion.div>

      
    </div>
  );
}

export default Home;
