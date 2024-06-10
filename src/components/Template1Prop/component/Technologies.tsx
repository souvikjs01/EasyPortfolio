import React from 'react'
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
    { skill: 'Node.js', icon: <FaCode />, color: '#68A063' },
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
interface MyHashMap {
    [key: string]: any; // or any other type
}
const HashMap: MyHashMap = {};
skillsWithIcons.forEach((handle) => {
    HashMap[handle.skill] = handle.icon;
});
HashMap["Nothing"] = <FaCode />;
const iconVariants = (index: number): Variants => ({
    
    initial: { y: 0 },
    animate: {
        y: [10, -10],
        transition: {
            duration: index%3+1,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})
interface Technology {
    skill?: string,
    color?: any;
    icon?: string,
}
interface PropType {
    technologies?: Technology[],
}
const Technologies: React.FC<PropType> = ({ technologies }) => {
    // //console.log("titties", technologies);
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
        {technologies?.map(({ skill, color, icon }, index) => (
            skill!=='deletedItem' && (
                <motion.div 
                    key={index} // Added a key to each element
                    variants={iconVariants(index + 1)} 
                    initial='initial' 
                    animate='animate' 
                    className='m-1 rounded-2xl border-4 border-neutral-800 p-4'
                >
                    {/* {//console.log(icon)} */}
                    <div className='flex items-center m-2'>
                        {icon && <span style={{ color: color, fontSize: '3rem' }}>{HashMap[icon]}</span>}
                        <span style={{ color: color }}>{skill}</span>
                        {/* <span>{index}</span> */}
                    </div>
                </motion.div>
            )
        ))}

            
            
        </motion.div>
    </div>
  )
}

export default Technologies