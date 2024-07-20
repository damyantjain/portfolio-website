import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import NavBar from "./NavBar";
import nav from "../db/nav";

const Portfolio = () => {
  return (
    <div>
      <NavBar nav={nav}/>
      <div className="mx-5 md:mx-24 mb-5 lg:mx-44 dark:bg-[#121212]">
        <div id="home" className="md:pt-24">
          <Intro />
        </div>
        <div id="projects" className="md:pt-24">
          <Projects />
        </div>
        <div id="resume" className="md:pt-24">
          <Resume />
        </div>
        <div id="skills" className="md:pt-20">
          <Skills />
        </div>
        <div id="contact" className="md:pt-40">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
