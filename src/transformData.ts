import { PortfolioDataVal, HomePageStruct, ProjectStruct, ExperienceStruct } from './interfaces';

export const transformData = (data: PortfolioDataVal): HomePageStruct => {
  return {
    HeroSection: {
      Name: data.username,
      WhatYouAre: data.whatyouare,
      Summary: data.summary,
    },
    ContactSection: {
      Address: data.address,
      Mobile: data.mobile,
      Email: "", // Assuming Email is missing, adjust as needed
    },
    AboutSection: {
      image: "", // Assuming image is missing, adjust as needed
      description: data.summary,
    },
    ProjectSection: data.ProjectSection.map((project) => ({
      image: "", // Assuming image is missing, adjust as needed
      title: project.projectName,
      description: project.description,
      technologies: project.technologies,
    })),
    ExperienceSection: data.ExperienceSection.map((experience) => ({
      duration: experience.years,
      title: experience.role,
      company: experience.company,
      description: experience.description,
      technologies: experience.stack,
    })),
  };
};
