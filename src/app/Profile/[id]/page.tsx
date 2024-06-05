"use client"
import React, { useEffect, useState } from 'react';
// import { useParams } from '';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

interface Project {
  projectName: string;
  description: string;
  technologies: string[];
  github: string;
  hosted: string;
}

interface Experience {
  years: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
}

interface portfolioDataVal {
  template: string;
  username: string;
  whatyouare: string;
  summary: string;
  address: string;
  mobile: string;
  sociallinks: { url: string; name: string; icon: { color: string } }[];
  technology: { skill: string; color: string }[];
  projects: Project[];
  experience: Experience[];
  stack: string[];
}

const UserProfile: React.FC = () => {
  const  name  = useParams().id;
  //console.log(name);
  const [portfolioDataVal, setPortfolioDataVal] = useState<portfolioDataVal | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put("/api/users/uploadInformation",{
          username: name
        });
        
        console.log(response.data.PortfolioData[0]);
        setPortfolioDataVal(response.data.PortfolioData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  if (!portfolioDataVal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{portfolioDataVal.template}</p>
      <h1>{portfolioDataVal.username}</h1>
      <h2>{portfolioDataVal.whatyouare}</h2>
      <p>{portfolioDataVal.summary}</p>
      <p>{portfolioDataVal.address}</p>
      <p>{portfolioDataVal.mobile}</p>

      <h3 className='text-2xl text-bold'>Social Links:</h3>
      <ul>
        {portfolioDataVal.sociallinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} style={{ color: link.icon.color }}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <h3 className='text-2xl text-bold'>Technologies:</h3>
      <ul>
        {portfolioDataVal.technology.map((tech, index) => (
          <li key={index} style={{ color: tech.color }}>
            {tech.skill}
          </li>
        ))}
      </ul>

      <h3 className='text-2xl text-bold'>Projects:</h3>
      <ul>
        {portfolioDataVal.projects.map((project, index) => (
          <li key={index}>
            <h4>{project.projectName}</h4>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <p>
              GitHub: <a href={project.github}>{project.github}</a>
            </p>
            <p>Hosted: {project.hosted}</p>
          </li>
        ))}
      </ul>

      <h3 className='text-2xl text-bold'>Experience:</h3>
      <ul>
        {portfolioDataVal.experience.map((exp, index) => (
          <li key={index}>
            <h4>{exp.company}</h4>
            <p>{exp.role}</p>
            <p>{exp.years}</p>
            <p>{exp.description}</p>
            {
              exp.stack.map((stk, index)=>(
                <div>{stk}</div>
              ))
            }
          </li>
        ))}
      </ul>

      {/* <h3>Stack:</h3>
      <ul>
        {portfolioDataVal.stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserProfile;
