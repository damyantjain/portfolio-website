import Intro from "./Intro";

const Portfolio = () => {
  const adjectives = ["Developer", "Designer", "Creator", "Innovator"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return (
    <div>
      <Intro />
    </div>
  );
};

export default Portfolio;
