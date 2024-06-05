// Define interfaces for data structures
export interface ProjectStruct {
    image: string;
    title: string;
    description: string;
    technologies: string[];
  }
  
  export interface ExperienceStruct {
    duration: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
  }
  
  export interface HeroStruct {
    Name?: string;
    WhatYouAre?: string;
    Summary?: string;
  }
  
  export interface ContactStruct {
    Address?: string;
    Mobile?: string;
    Email?: string;
  }
  
  export interface AboutStruct {
    image: string;
    description: string;
  }
  
  export interface HomePageStruct {
    HeroSection?: HeroStruct;
    ContactSection?: ContactStruct;
    AboutSection?: AboutStruct;
    ProjectSection: ProjectStruct[];
    ExperienceSection: ExperienceStruct[];
  }
  
  export interface Project {
    projectName: string;
    description: string;
    technologies: string[];
    github: string;
    hosted: string;
  }
  
  export interface Experience {
    years: string;
    role: string;
    company: string;
    description: string;
    stack: string[];
  }
  
  export interface PortfolioDataVal {
    template: string;
    username: string;
    whatyouare: string;
    summary: string;
    address: string;
    mobile: string;
    sociallinks: { url: string; name: string; icon: { color: string } }[];
    technology: { skill: string; color: string }[];
    ProjectSection: Project[];
    ExperienceSection: Experience[];
    stack: string[];
  }
  