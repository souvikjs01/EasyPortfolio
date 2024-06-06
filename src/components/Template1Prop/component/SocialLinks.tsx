import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaGitlab,
  FaDribbble,
  FaBehance,
  FaYoutube,
  FaTwitch,
  FaReddit,
  FaMedium,
  FaPinterest,
  FaSnapchat,
  FaTumblr,
  FaVimeo,
  FaWordpress,
  FaQuora,
  FaDiscord,
  FaTelegram,
  FaSlack,
  FaWeibo,
  FaTiktok,
  FaSpotify,
  FaSoundcloud,
  FaDeviantart,
  FaFlickr,
  FaKickstarter,
  FaPatreon,
  FaCode,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import { Variants, motion } from "framer-motion";


interface SocialMediaLinked {
  url?: string;
  name?: string;
  icon?: any;
  color?: string;
}
interface SocialMediaHandle {
    name: string;
    icon?: any;
    color?: string;
}

interface PropType {
    linked?: SocialMediaLinked[]
}
  
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

const SocialLinks: React.FC<PropType> = ({linked}) => {
  // console.log("oooooooooooooooooo",linked);

  
  const handles: SocialMediaHandle[] = [
    { name: "Facebook", icon: <FaFacebook />, color: "#1877F2" },
    { name: "Twitter", icon: <FaTwitter />, color: "#1DA1F2" },
    { name: "Instagram", icon: <FaInstagram />, color: "#E4405F" },
    { name: "LinkedIn", icon: <FaLinkedin />, color: "#0077B5" },
    { name: "GitHub", icon: <FaGithub />, color: "#333" },
    { name: "Stack Overflow", icon: <FaStackOverflow />, color: "#F48024" },
    { name: "GitLab", icon: <FaGitlab />, color: "#FC6D26" },
    { name: "Dribbble", icon: <FaDribbble />, color: "#EA4C89" },
    { name: "Behance", icon: <FaBehance />, color: "#1769FF" },
    { name: "YouTube", icon: <FaYoutube />, color: "#FF0000" },
    { name: "Twitch", icon: <FaTwitch />, color: "#9146FF" },
    { name: "Reddit", icon: <FaReddit />, color: "#FF4500" },
    { name: "Medium", icon: <FaMedium />, color: "#00AB6C" },
    { name: "Pinterest", icon: <FaPinterest />, color: "#E60023" },
    { name: "Snapchat", icon: <FaSnapchat />, color: "#FFFC00" },
    { name: "Tumblr", icon: <FaTumblr />, color: "#36465D" },
    { name: "Vimeo", icon: <FaVimeo />, color: "#1AB7EA" },
    { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
    { name: "Quora", icon: <FaQuora />, color: "#B92B27" },
    { name: "Discord", icon: <FaDiscord />, color: "#7289DA" },
    { name: "Telegram", icon: <FaTelegram />, color: "#0088CC" },
    { name: "Slack", icon: <FaSlack />, color: "#4A154B" },
    { name: "Weibo", icon: <FaWeibo />, color: "#E6162D" },
    { name: "TikTok", icon: <FaTiktok />, color: "#010101" },
    { name: "Spotify", icon: <FaSpotify />, color: "#1DB954" },
    { name: "SoundCloud", icon: <FaSoundcloud />, color: "#FF5500" },
    { name: "DeviantArt", icon: <FaDeviantart />, color: "#05CC47" },
    { name: "Flickr", icon: <FaFlickr />, color: "#FF0084" },
    { name: "Kickstarter", icon: <FaKickstarter />, color: "#2BDE73" },
    { name: "Patreon", icon: <FaPatreon />, color: "#F96854" },
    { name: "LeetCode", icon: <SiLeetcode />, color: "#FFA116" },
    { name: "CodeForces", icon: <SiCodeforces />, color: "#FFA110" },
    { name: "InterviewBit", icon: <FaCode />, color: "white" },
    { name: "CodeChef", icon: <SiCodechef />, color: "white" },
    { name: "GeeksForGeeks", icon: <SiGeeksforgeeks />, color: "green" },
  ];
  interface MyHashMap {
    [key: string]: any; // or any other type
  }

  const HashMap: MyHashMap = {};
  
  handles.forEach((handle) => {
    HashMap[handle.name] = handle.icon;
  });
  HashMap["Nothing"] = <FaCode />;

  //const handlesToShow = showAll ? filteredHandles : filteredHandles.slice(0, 5);

  return (
    <div className="border-nautral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Social Media Links
      </motion.h1>
      <div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          
        </motion.div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          
        </div>
      </div>
      <div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          
        </div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className="mb-10 flex flex-row flex-wrap justify-center text-center items-center">
          {linked && linked.map(({ url, name, icon, color }, index) => (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
              <div className="m-2 p-2 text-center flex flex-row items-center">
                <motion.div
                  className="rounded-2xl flex items-center justify-center border-4 border-neutral-800 p-4 cursor-pointer"
                  title={icon}
                  style={{ color: color, fontSize: "3em" }}
                  key={index} // Added a key to each element
                    variants={iconVariants(index + 1)} 
                    initial='initial' 
                    animate='animate' 
                >
                  {name && HashMap[name]}
                </motion.div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SocialLinks;
