import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 w-[550px] h-[56px] bg-[#211F23]/40 backdrop-blur-md rounded-full z-50 shadow-md items-center justify-center">
        <ul className="flex space-x-6 font-medium">
          {["home", "skills", "academics", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-purple-300 px-4 py-2 rounded-full hover:text-white transition-all duration-300 capitalize"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] rounded-full bg-[#0F0F10]/90 backdrop-blur-md z-50 px-4 py-3 shadow-md flex items-center justify-between">
        <h1 className="text-purple-300 font-bold text-lg">Shrishti</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-purple-300">
          <FaBars size={20} />
        </button>

        {isOpen && (
          <ul className="absolute top-[56px] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0F0F10]/90 backdrop-blur-md text-white text-center py-3 rounded-xl space-y-2 shadow-xl z-50 border border-gray-700">
            {["home", "skills", "academics", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-purple-300 hover:text-white transition duration-200 capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
