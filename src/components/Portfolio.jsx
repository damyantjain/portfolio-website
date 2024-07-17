import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = () => {
  const adjectives = ["Developer", "Designer", "Creator", "Innovator"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return (
    <div className="mx-5 md:mx-24 mb-5 md:mb-10 lg:mx-44">
      <div id="home" className="md:pt-24">
        <Intro />
      </div>
      <div id="projects" className="md:pt-24">
        <Projects />
      </div>
      <div id="skills" className="md:pt-24">
        <Skills />
      </div>
    </div>
  );
};

export default Portfolio;
