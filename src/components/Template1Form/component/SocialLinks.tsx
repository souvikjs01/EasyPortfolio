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
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { Variants, motion } from 'framer-motion';

interface SocialMediaHandle {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SocialMediaLinked {
  url: string;
  name: string;
  icon: JSX.Element;
  color: string;
}

const iconVariants = (duration: number): Variants => ({
  initial: { y: duration % 5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: 1.5,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

function SocialLinks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<SocialMediaHandle | null>(null);
  const [linked, setLinked] = useState<SocialMediaLinked[]>([]);
  const [url, setUrl] = useState("");
  const [showAll, setShowAll] = useState(false);

  const addHandle = (name: string, icon: any, color: string) => {
    setSelected({ name, icon, color });
  };

  const addLink = (url: string, name: string, color: string, icon: any) => {
    setLinked((prevItems) => [...prevItems, { url, name, icon, color }]);
    setUrl("");
  };

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

  const filteredHandles = handles.filter((handle) =>
    handle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlesToShow = showAll ? filteredHandles : filteredHandles.slice(0, 5);

  return (
    <div className="border-nautral-900 pb-20">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-10 text-center text-4xl">
        Social Media Links
      </motion.h1>
      <div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="m-2">
          Social and Coding profiles -{" "}
          <input
            type="text"
            placeholder="Search handles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full lg:w-36 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent"
          />
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 0 }} transition={{ duration: 1 }} style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {handlesToShow.length > 0 ? (
            handlesToShow.map((handle, index) => (
              <motion.div variants={iconVariants(index)} initial="initial" animate="animate" key={handle.name} style={{ textAlign: "center" }}>
                <motion.div
                  className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
                  title={handle.name}
                  style={{ color: handle.color, fontSize: "2em" }}
                  onClick={() => { addHandle(handle.name, handle.icon, handle.color); }}
                >
                  {handle.icon}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <button className="m-2 p-2 bg-cyan-700 rounded-lg hover:bg-cyan-400" onClick={() => addHandle(searchTerm, <FaCode />, 'white')}>Add this to handles</button>
          )}
        </motion.div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {!showAll && filteredHandles.length > 5 && (
            <button className="m-2 p-2 bg-cyan-700 rounded-lg hover:bg-cyan-400" onClick={() => setShowAll(true)}>Show More</button>
          )}
          {showAll && filteredHandles.length > 5 && (
            <button className="m-2 p-2 bg-cyan-700 rounded-lg hover:bg-cyan-400" onClick={() => setShowAll(false)}>Show Less</button>
          )}
        </div>
      </div>
      <div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="m-2 mt-12">
          Provide Social and Coding profile links
        </motion.div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {selected ? (
            <div key={selected.name} className="text-center flex flex-row items-center">
              <div
                className="rounded-2xl flex items-center justify-center border-4 border-neutral-800 p-4 cursor-pointer"
                title={selected.name}
                style={{ color: selected.color, fontSize: "2em" }}
              >
                {selected.icon}
              </div>
              <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder={`https://${selected.name}.com/XYZ...`} className="mr-2 placeholder:text-cyan-700 placeholder:text-sm flex items-center justify-center w-full h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent" />
              <button onClick={() => addLink(url, selected.name, selected.color, selected.icon)} className="m-2 p-2 rounded-lg bg-cyan-700 hover:bg-cyan-400">Add</button>
            </div>
          ) : (
            <div className="m-3 text-cyan-700">No handle selected</div>
          )}
        </div>
        <div className="mb-10 flex flex-row flex-wrap justify-center text-center items-center">
          {linked.map(({ url, name, icon, color }, index) => (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
              <div className="m-2 p-2 text-center flex flex-row items-center">
                <div
                  className="rounded-2xl flex items-center justify-center border-4 border-neutral-800 p-4 cursor-pointer"
                  title={name}
                  style={{ color: color, fontSize: "2em" }}
                >
                  {icon}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
