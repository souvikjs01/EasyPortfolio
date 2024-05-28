import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaReact, 
    FaAngular, 
    FaVuejs, 
    
    FaBootstrap, 
    FaSass, 
    FaGitAlt, 
    FaDatabase, 
    FaAws, 
    FaDocker, 
     
    FaCode, 
    FaNetworkWired, 
    FaCogs, 
    FaToolbox, 
    FaServer, 
    FaCloud, 
    FaTerminal, 
    FaTasks, 
    FaBalanceScale, 
    FaComments, 
    FaUserFriends, 
    FaSearchDollar, 
    FaRocket, 
    FaClipboardCheck, 
    FaHandshake,
    
  } from 'react-icons/fa';
  
  const skillsWithIcons = [
    { skill: 'HTML', icon: <FaHtml5 />, color: '#E44D26' },
    { skill: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { skill: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { skill: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { skill: 'Angular', icon: <FaAngular />, color: '#DD0031' },
    { skill: 'Vue.js', icon: <FaVuejs />, color: '#4FC08D' },
    { skill: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
    { skill: 'Express.js', icon: <FaServer />, color: '#000000' },
    { skill: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { skill: 'Sass', icon: <FaSass />, color: '#CC6699' },
    { skill: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { skill: 'Web Design', icon: <FaCogs />, color: '#1572B6' },
    { skill: 'RESTful APIs', icon: <FaNetworkWired />, color: '#5C5C5C' },
    { skill: 'JSON', icon: <FaCode />, color: '#000000' },
    { skill: 'AJAX', icon: <FaCloud />, color: '#1572B6' },
    { skill: 'Webpack', icon: <FaToolbox />, color: '#8DD6F9' },
    { skill: 'Redux', icon: <FaTasks />, color: '#764ABC' },
    { skill: 'TypeScript', icon: <FaCode />, color: '#3178C6' },
    { skill: 'GraphQL', icon: <FaClipboardCheck />, color: '#E10098' },
    { skill: 'MongoDB', icon: <FaDatabase />, color: '#47A248' },
    { skill: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
    { skill: 'Firebase', icon: <FaCloud />, color: '#FFCA28' },
    { skill: 'AWS', icon: <FaAws />, color: '#232F3E' },
    { skill: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { skill: 'CI/CD', icon: <FaRocket />, color: '#6B459C' },
    { skill: 'Testing', icon: <FaClipboardCheck />, color: '#FF5733' },
    { skill: 'Agile', icon: <FaBalanceScale />, color: '#0093D7' },
    { skill: 'Problem Solving', icon: <FaSearchDollar />, color: '#EA5A5A' },
    { skill: 'Communication', icon: <FaComments />, color: '#4C4C4C' },
  ];
  
  const skillsWithIconsMap = new Map(skillsWithIcons.map(({ skill, icon }) => [skill, icon]));
const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className='flex flex-row flex-wrap pb-8'>
            <p className='m-2 p-2'>Add Skills</p>
        {skillsWithIcons.map(({ skill, icon, color }) => (
                <div key={skill} className='cursor-pointer hover:bg-purple-900 flex flex-row flex-wrap gap-4 bg-neutral-900 m-1 rounded-lg'>
                
                    <div className='flex items-center m-2'>
                    <span style={{color: color, fontSize:'2rem'}}>{icon}</span>
                    <span>{skill}</span>
                    </div>
                
                </div>
            ))}
        </div>
        
        <p className='m-2 p-2'>Your Skills</p>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className='relative rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
                <img src="./cross.png" alt="" className='absolute top-0 right-0 w-5 h-5'/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl '/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-7xl text-red-500'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <div>
            
            </div>
        </motion.div>
    </div>
  )
}
