import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import projects from "../db/projects";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="align-middle text-4xl text-[#333333] dark:text-[#e0e0e0]"
    >
      <div className="text-center font-poppins">My Projects</div>
      <motion.div
        className="lg:grid lg:grid-cols-2 lg:gap-8 mt-4 md:mt-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
