const projects = [
  {
    title: "Solo Sparks",
    description:
      "Solo Sparks is a full-stack personal growth tracker designed to help users reflect, grow, and stay motivated. It features daily mood check-ins, task-based reflections (journal, gratitude, photo, and challenge entries), and a reward system powered by Spark Points to encourage consistency. Built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with Cloudinary for seamless image uploads, the platform offers a visually engaging and structured approach to self-improvement. Users receive personalized daily tasks, track their mental and emotional well-being, and unlock rewards as they complete meaningful activities.",
    image: "/projects/solo-sparks.png",
    github: "https://github.com/shrishti0212/solo-sparks",
    demo: "https://solo-sparks-phi.vercel.app",
  },
  {
    title: "NomNomNow",
    description:
      "NomNomNow is a responsive food delivery app built with React.js and integrated with the Swiggy public API. Users can browse nearby restaurants, view menus, and add items to a cart with real-time updates and subtotal calculation. The app features dynamic search and filtering, smooth navigation using React Router, and shimmer loading effects for better performance. It highlights clean component structure, React hooks for state management, and effective API integration—making it a solid demonstration of frontend development in action.",
    image: "/projects/nomnomnow.png",
    github: "https://github.com/shrishti0212/food-app",
    demo: "https://nomnomnow-shrishti-mishras-projects.vercel.app",
  },
  {
    title: "Streamly",
    description:
      "Streamly is a fully responsive video streaming platform built with React.js, Tailwind CSS, Redux, and the YouTube Data API. It lets users search and browse videos, view details like titles and channels, and explore trending content through a dynamic feed. With smooth navigation, global state management, and a modern UI, Streamly offers a clean and scalable frontend experience inspired by YouTube.",
    image: "/projects/streamly.png",
    github: "https://github.com/shrishti0212/streamly",
    demo: "https://streamly-henna.vercel.app",
  },
  {
    title: "Netflix GPT",
    description:
      "Netflix GPT is a movie recommendation platform that combines the TMDB API with GPT-powered suggestions to offer personalized viewing ideas. Built with React, it features user authentication, search functionality, a feed of trending movies, and AI-generated recommendations based on user input. The app delivers a sleek, responsive UI and showcases smart integration of external APIs with interactive user experiences.",
    image: "/projects/netflix-gpt.png",
    github: "https://github.com/shrishti0212/netflix-gpt",
    demo: "https://netflix-gpt-delta-lyart.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform w-full flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-purple-300">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
