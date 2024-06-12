"use client";
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
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useState } from "react";
import { PiShareFatBold } from "react-icons/pi";

interface ProjectStruct {
  image?: string;
  projectName?: string;
  description?: string;
  technologies?: string[];
  github?: string;
  hosted?: string;
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
  Image?: string;
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

interface SocialLinkStruct {
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
  SocialSection?: SocialLinkStruct[];
}

interface WrapAllProps {
  Data?: HomePageStruct;
}

const HomePage: React.FC<WrapAllProps> = ({ Data }) => {
  console.log(Data);
  const { id: name } = useParams();
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};
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

  const userEmail = session?.user?.email ?? "";
  const cleanedEmail = cleanEmailAddress(userEmail);

  const isSameUser = cleanedEmail === name;

  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar
            NavGithub_={Data?.NavGithubSection}
            NavLinkedIn_={Data?.NavLinkedInSection}
            NavInsta_={Data?.NavInstaSection}
          />
          <Hero
            Name={Data?.HeroSection?.Name}
            WhatYouAre={Data?.HeroSection?.WhatYouAre}
            Summary={Data?.HeroSection?.Summary}
            Image={Data?.HeroSection?.Image}
          />
          <About data={Data?.AboutSection} />
          <Technologies technologies={Data?.TechnologySection} />
          <Experience experiences={Data?.ExperienceSection} />
          <Projects projects={Data?.ProjectSection} />
          <Contact
            Address={Data?.ContactSection?.Address}
            Mobile={Data?.ContactSection?.Mobile}
            Email={Data?.ContactSection?.Email}
          />
          <SocialLinks linked={Data?.SocialSection} />
        </div>

        {isSameUser && (
          <Link href="../../ChooseTemplate">
            <motion.button
              className="fixed bottom-6 right-6 bg-cyan-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
            >
              Update Portfolio
            </motion.button>
          </Link>

        )}
        {
          isSameUser && <div className="fixed left-6 bottom-6">
            <button
                onClick={copyToClipboard}
                className="text-white px-4 py-2 text-4xl rounded-md focus:outline-none"
            >
               {copied && (
                <span className="text-sm text-cyan-300 bg-neutral-900 bg-rounded p-2 rounded-lg" style={{color: 'cyan'}}>
                    Copied!
                </span>
            )}
            {!copied && (
              <span><PiShareFatBold /></span>
            )}
            </button>
            
          </div>
        }
      </div>
    </div>
  );
};

export default HomePage;
