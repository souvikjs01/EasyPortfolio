import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
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
} from "react-icons/fa";

const skillsWithIcons = [
  { skill: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { skill: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { skill: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { skill: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { skill: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { skill: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
  { skill: "Node.js", icon: <FaCode />, color: "#68A063" },
  { skill: "Express.js", icon: <FaServer />, color: "#000000" },
  { skill: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { skill: "Sass", icon: <FaSass />, color: "#CC6699" },
  { skill: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { skill: "Web Design", icon: <FaCogs />, color: "#1572B6" },
  { skill: "RESTful APIs", icon: <FaNetworkWired />, color: "#5C5C5C" },
  { skill: "JSON", icon: <FaCode />, color: "#000000" },
  { skill: "AJAX", icon: <FaCloud />, color: "#1572B6" },
  { skill: "Webpack", icon: <FaToolbox />, color: "#8DD6F9" },
  { skill: "Redux", icon: <FaTasks />, color: "#764ABC" },
  { skill: "TypeScript", icon: <FaCode />, color: "#3178C6" },
  { skill: "GraphQL", icon: <FaClipboardCheck />, color: "#E10098" },
  { skill: "MongoDB", icon: <FaDatabase />, color: "#47A248" },
  { skill: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
  { skill: "Firebase", icon: <FaCloud />, color: "#FFCA28" },
  { skill: "AWS", icon: <FaAws />, color: "#232F3E" },
  { skill: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { skill: "CI/CD", icon: <FaRocket />, color: "#6B459C" },
  { skill: "Testing", icon: <FaClipboardCheck />, color: "#FF5733" },
  { skill: "Agile", icon: <FaBalanceScale />, color: "#0093D7" },
  { skill: "Problem Solving", icon: <FaSearchDollar />, color: "#EA5A5A" },
  { skill: "Communication", icon: <FaComments />, color: "#4C4C4C" },
];
import { Technology_, fetchCount } from "@/recoilState";
import { useRecoilState } from "recoil";

interface MyHashMap {
  [key: string]: any; // or any other type
}
const HashMap: MyHashMap = {};
skillsWithIcons.forEach((handle) => {
  HashMap[handle.skill] = handle.icon;
});
HashMap["Nothing"] = <FaCode />;

const iconVariants = (duration: number): Variants => ({
  initial: { y: duration % 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

interface ListItem {
  skill?: string;
  color?: any;
  icon?: string;
}
interface Technology {
  skill?: string;
  color?: any;
  icon?: string;
}
interface PropType {
  technologies_?: Technology[];
}
const Technologies: React.FC<PropType> = ({ technologies_ }) => {
  const [Technology, setTechnology] = useRecoilState<ListItem[]>(Technology_);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [Count, setCount] = useRecoilState(fetchCount);
  useEffect(() => {
    if (Count < 1) {
      if (technologies_) {
        setTechnology(technologies_);
      }
    }
  }, [technologies_]);
  const addSkill = (skill: string, color: any, icon: string) => {
    setTechnology((prevItems) => [...prevItems, { skill, color, icon }]);
  };

  const deleteSkill = (index: any) => {
    setTechnology((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        skill: "deletedItem",
        color: "deletedItem",
        icon: "deletedItem",
      };
      return updatedItems;
    });
  };

  const filteredSkills = skillsWithIcons.filter(({ skill }) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedSkills = showMore
    ? filteredSkills
    : filteredSkills.slice(0, 10);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-row flex-wrap pb-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="ml-2 my-2 p-2 bg-blue-500 bg-clip-text"
        >
          Add Skills -
        </motion.p>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="my-2 w-32 h-12 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent"
        />

        {displayedSkills.map(({ skill, icon, color }) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            onClick={() => {
              addSkill(skill, color, skill);
            }}
            key={skill}
            className="cursor-pointer hover:bg-purple-900 flex flex-row flex-wrap gap-4 bg-neutral-900 m-1 rounded-lg"
          >
            <div className="flex items-center m-2">
              <span style={{ color: color, fontSize: "2rem" }}>
                {HashMap[skill]}
              </span>
              <span>{skill}</span>
            </div>
          </motion.div>
        ))}
        {filteredSkills.length === 0 && (
          <button
            onClick={() => {
              addSkill(searchTerm, "#ffffff", "Nothing");
            }}
            className="cursor-pointer hover:bg-cyan-500 bg-cyan-900 m-2 rounded-lg p-2"
          >
            Add "{searchTerm}"
          </button>
        )}
      </div>
      {filteredSkills.length > 10 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="rounded-lg m-2 p-2 bg-blue-800 "
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="m-2 p-2"
      >
        Your Skills
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row flex-wrap pb-8"
      >
        {Technology.map(({ skill, color, icon }, index) =>
          skill !== "deletedItem" ? (
            <motion.div
              key={index}
              onClick={() => {
                deleteSkill(index);
              }}
              variants={iconVariants(index)}
              initial="initial"
              animate="animate"
              className="relative cursor-pointer hover:bg-red-500 flex flex-row flex-wrap gap-4 bg-neutral-900 m-2 rounded-lg"
            >
              <div className="flex items-center m-3">
                <span style={{ color: color, fontSize: "2rem" }}>
                  {icon && HashMap[icon]}
                </span>
                <span>{skill}</span>
              </div>
              <img
                src="./cross.png"
                alt="delete"
                className="absolute top-0 right-0 w-5 h-5"
              />
            </motion.div>
          ) : null
        )}
      </motion.div>
    </div>
  );
};

export default Technologies;
