import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import NavBar from "./NavBar";
import nav from "../db/nav";
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Damyant Jain</title>
        <meta name="description" content="I'm all about turning cool ideas into awesome products and exploring
            the ever-evolving tech world. With over 3 years of experience, I'm passionate about solving real-world problems. When I'm
            not coding, you can find me enjoying sports." />
        <meta
          name="keywords"
          content="Damyant Jain, portfolio, blog, React, developer, resume, programmer"
        />
        <meta property="og:title" content="Damyant Jain" />
        <meta
          property="og:description"
          content="I'm all about turning cool ideas into awesome products and exploring
            the ever-evolving tech world. With over 3 years of experience, I'm passionate about solving real-world problems. When I'm
            not coding, you can find me enjoying sports."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damyantjain.com/" />
      </Helmet>
      <NavBar nav={nav} />
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
