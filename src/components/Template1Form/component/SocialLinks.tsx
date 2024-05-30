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
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

interface SocialMediaHandle {
  name: string;
  icon: JSX.Element;
  color: string;
}

function SocialLinks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setselected] = useState<SocialMediaHandle[]>([]);
  const addHandle = (name: string, icon: any, color: string) => {
    setselected(prevItems => [...prevItems, {name: name, icon: icon, color: color}]);
  }
  const [handles, sethandles] = useState<SocialMediaHandle[]>([
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
  ]);

  const filteredHandles = handles.filter((handle) =>
    handle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className=" border-nautral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Social Media Links</h1>
      <div>
        <div className="m-2">
          Social and Coding profiles -{" "}
          <input
            type="text"
            placeholder="Search handles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full lg:w-36 h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent"
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {filteredHandles.length > 0 ? (
            filteredHandles.map((handle) => (
              <div key={handle.name} style={{ textAlign: "center" }}>
                <div
                  className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
                  title={handle.name}
                  style={{ color: handle.color, fontSize: "2em" }}
                  onClick={()=>{addHandle(handle.name, handle.icon, handle.color)}}
                >
                  {handle.icon}
                </div>
              </div>
            ))
          ) : (
            <button className="m-2 p-2 bg-cyan-700 rounded-lg hover:bg-cyan-400" onClick={()=>addHandle(searchTerm, <FaCode />, 'white')}>Add this to handles</button>
          )}
        </div>
      </div>
      <div>
        <div className="m-2 mt-12">
          Your Social and Coding profiles
          
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {selected.length > 0 ? (
            selected.map((handle) => (
              <div key={handle.name} className="text-center flex flex-row items-center">
                <div
                  className="rounded-2xl flex items-center justify-center border-4 border-neutral-800 p-4 cursor-pointer"
                  title={handle.name}
                  style={{ color: handle.color, fontSize: "2em" }}
                >
                  {handle.icon}
                </div>
                <input type="text" placeholder={`https://${handle.name}.com/XYZ...`} className="mr-2 placeholder:text-cyan-700 placeholder:text-sm flex items-center justify-center w-full h-8 ml-1 pl-1 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent"/>
              </div>
            ))
          ) : (
            <div className="m-3 text-cyan-700">No handle selected</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
