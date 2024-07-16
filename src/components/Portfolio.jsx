import Intro from "./Intro";
import Projects from "./Projects";

const Portfolio = () => {
  const adjectives = ["Developer", "Designer", "Creator", "Innovator"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return (
    <div className="mx-5 md:mx-24 mb-5 md:mb-10 lg:mx-44" >
      <Intro />
      <Projects />
    </div>
  );
};

export default Portfolio;
