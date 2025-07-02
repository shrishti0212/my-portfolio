import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <Academics />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
