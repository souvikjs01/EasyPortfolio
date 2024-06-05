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
}

interface PortfolioData {
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
  const { username } = useParams<{ username: string }>();
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(`/api/users/uploadinformation/`,{
          username: {username}
        });
        const { PortfolioData } = await response.data;
        setPortfolioData(PortfolioData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [username]);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{portfolioData.username}</h1>
      <h2>{portfolioData.whatyouare}</h2>
      <p>{portfolioData.summary}</p>
      <p>{portfolioData.address}</p>
      <p>{portfolioData.mobile}</p>

      <h3>Social Links:</h3>
      <ul>
        {portfolioData.sociallinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} style={{ color: link.icon.color }}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <h3>Technologies:</h3>
      <ul>
        {portfolioData.technology.map((tech, index) => (
          <li key={index} style={{ color: tech.color }}>
            {tech.skill}
          </li>
        ))}
      </ul>

      <h3>Projects:</h3>
      <ul>
        {portfolioData.projects.map((project, index) => (
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

      <h3>Experience:</h3>
      <ul>
        {portfolioData.experience.map((exp, index) => (
          <li key={index}>
            <h4>{exp.company}</h4>
            <p>{exp.role}</p>
            <p>{exp.years}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>

      <h3>Stack:</h3>
      <ul>
        {portfolioData.stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
