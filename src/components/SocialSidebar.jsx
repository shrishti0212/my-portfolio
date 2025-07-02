import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/3 z-50 hidden md:flex flex-col gap-6 text-white text-xl">
      <a href="https://github.com/shrishti0212" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-purple-400 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/shrishti-mishra-011a20263/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-purple-400 transition duration-300" />
      </a>
      <a href="mailto:imshrishti0212@gmail.com">
        <FaEnvelope className="hover:text-purple-400 transition duration-300" />
      </a>
      <a href="https://instagram.com/_.sristy" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-purple-400 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialSidebar;
