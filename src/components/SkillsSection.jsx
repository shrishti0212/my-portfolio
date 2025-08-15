import { useState } from "react";
import { FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";

import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import nodeIcon from "../assets/node.svg";
import mongoIcon from "../assets/mongo.svg";
import tailwindIcon from "../assets/tailwind.svg";
import expressIcon from "../assets/express.svg";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Express.js", icon: expressIcon },
];

const cardColors = [
  "#C3C99E", "#7D9CA5", "#C2C2C2", "#C0E5D7",
  "#D8C7FF", "#F0D9FF", "#BFD7EA", "#EADFB4",
];

const SkillsSection = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section id="skills" className="bg-black py-10 overflow-hidden relative px-4 max-w-7xl mx-auto">
      <button
        onClick={() => setShowSidebar(true)}
        className="absolute right-4 top-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
      >
        See All Skills
      </button>

      <div className="whitespace-nowrap mt-12">
        <div className="inline-flex animate-scroll space-x-6 px-4">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="min-w-[140px] lg:min-w-[160px] p-4 lg:p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-md"
              style={{
                backgroundColor: cardColors[index % cardColors.length],
                color: "#1A1A1A",
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 lg:w-12 lg:h-12 mb-2" />
              <p className="text-sm lg:text-base font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[360px] lg:w-[420px] bg-black text-white shadow-lg transition-transform duration-300 z-50 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 overflow-y-auto h-full">
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-500 mb-1">
              <img src={profile} alt="Shrishti" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-base lg:text-lg">Shrishti Mishra</h3>
            <p className="text-xs lg:text-sm text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex justify-center space-x-3 text-purple-400 mb-4 text-xs lg:text-sm">
            <a href="https://github.com/shrishti0212" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shrishti-mishra-011a20263/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:imshrishti0212@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <div className="space-y-1 text-xs lg:text-sm mb-5">
            <div><span className="text-purple-300 font-medium">Age:</span> 22</div>
            <div><span className="text-purple-300 font-medium">Freelance:</span> <span className="text-green-400">Available</span></div>
            <div><span className="text-purple-300 font-medium">Address:</span> Howrah, West Bengal</div>
          </div>

          <div className="mb-4">
            <h4 className="text-purple-400 font-semibold mb-1 text-sm lg:text-base">Languages</h4>
            <div className="flex flex-wrap gap-1">
              <SkillTag label="Hindi" />
              <SkillTag label="English" />
            </div>
          </div>

          <div>
            <h4 className="text-purple-400 font-semibold mb-1 text-sm lg:text-base">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              <SkillTag label="React" />
              <SkillTag label="React Native" />
              <SkillTag label="Redux" />
              <SkillTag label="Node.js" />
              <SkillTag label="MongoDB" />
              <SkillTag label="Express.js" />
              <SkillTag label="Tailwind" />
              <SkillTag label="JavaScript" />
              <SkillTag label="TypeScript" />
              <SkillTag label="Zustand" />
              <SkillTag label="CSS" />
              <SkillTag label="HTML" />
              <SkillTag label="C++" />
              <SkillTag label="Problem Solving" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ label }) => (
  <span className="px-3 lg:px-4 py-0.5 lg:py-1 text-xs lg:text-sm rounded-full bg-purple-700 text-white hover:bg-purple-600 transition">
    {label}
  </span>
);

export default SkillsSection;
