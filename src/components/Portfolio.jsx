import Intro from "./Intro";

const Portfolio = () => {
  const adjectives = ["Developer", "Designer", "Creator", "Innovator"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return (
    <div className="bg-red-300">
      <Intro />
    </div>
  );
};

export default Portfolio;
