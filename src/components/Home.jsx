import Typewriter from "typewriter-effect";
import SocialSidebar from "./SocialSidebar";
import profile from "../assets/profile.jpg";
import SkillsSection from "./SkillsSection";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white relative px-4 sm:px-6 pt-28 pb-20 sm:pb-32"
    >
      <SocialSidebar />

      
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-10"> 
       
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-400">
              <Typewriter
                options={{
                  strings: ["Shrishti"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 3000,
                  cursor: "",
                }}
              />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
          I’m a MERN stack web developer and React Native app developer, skilled in building fast, responsive, and scalable applications for web and mobile.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

      
        <div className="w-[200px] sm:w-[240px] md:w-[280px] h-[200px] sm:h-[240px] md:h-[280px] rounded-full overflow-hidden shadow-lg mb-10 md:mb-0">
          <img
            src={profile}
            alt="Shrishti Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <SkillsSection />
      </div>
    </section>
  );
};

export default Home;
