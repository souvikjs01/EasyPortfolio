"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import HomePage from '@/components/Template1Prop/Home';
import App from '@/components/Middlepages/Spinners';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
interface ProjectStruct {
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
interface PortfolioDataVal {
  navgithub?: {link: string, name: string, icon: string};
  navlinkedin?: {link: string, name: string, icon: string};
  navinsta?: {link: string, name: string, icon: string};
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

const UserProfile: React.FC = () => {
  const { id: name } = useParams();
  const {data: session} = useSession();
  const [portfolioDataVal, setPortfolioDataVal] = useState<PortfolioDataVal | null>(null);
  const data:HomePageStruct = {
    NavGithubSection:{link: portfolioDataVal?.navgithub?.link, name: portfolioDataVal?.navgithub?.name, icon: portfolioDataVal?.navgithub?.icon},
    NavLinkedInSection:{link: portfolioDataVal?.navlinkedin?.link, name: portfolioDataVal?.navlinkedin?.name, icon: portfolioDataVal?.navlinkedin?.icon},
    NavInstaSection:{link: portfolioDataVal?.navinsta?.link, name: portfolioDataVal?.navinsta?.name, icon: portfolioDataVal?.navinsta?.icon},
    HeroSection: {Name: portfolioDataVal?.username, WhatYouAre: portfolioDataVal?.whatyouare, Summary: portfolioDataVal?.summary},
    ContactSection: {Address: portfolioDataVal?.address, Mobile: portfolioDataVal?.mobile, Email: portfolioDataVal?.email},
    ProjectSection: portfolioDataVal?.projects?.map(project => ({
      projectName: project.projectName,
      description: project.description,
      technologies: project.technologies,
      github: project.github,
      hosted: project.hosted
    })),
    ExperienceSection: portfolioDataVal?.experience?.map(experience => ({
      duration: experience.years,
      title: experience.role,
      company: experience.company,
      description: experience.description,
      technologies: experience.stack,
    })),
    TechnologySection: portfolioDataVal?.technology?.map(tech => ({
      skill: tech.skill,
      color:tech.color,
      icon:tech.icon,
    })),
    AboutSection: {
      abouttext: portfolioDataVal?.abouttext,
      image: '/aboutDefault.jpg',
    },
    SocialSection:portfolioDataVal?.sociallinks?.map(social=>({
      url: social.url,
      name: social.name,
      icon: social.icon,
      color: social.color,
    })),
  }
  // //console.log('--------------------------------', data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put("/api/users/uploadInformation", {
          findUser: name
        });
        // //console.log("oooooooooooooooooooooooooooooooooo",response.data.PortfolioData[0])
        setPortfolioDataVal(response.data.PortfolioData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  if (!portfolioDataVal) {
    return <div><App /></div>;
  }

  

  return (
    <div>
      {
        portfolioDataVal?.template === 'template1' && 
        <HomePage Data={data} />
      }
    </div>
  );
};

export default UserProfile;
