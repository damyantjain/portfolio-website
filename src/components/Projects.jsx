import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import projects from "../db/projects";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      ref={ref}
      className="align-middle text-center font-poppins text-4xl text-[#333333]"
    >
      <div>My Projects</div>
      <motion.div
        className="grid grid-cols-2 gap-2 lg:gap-8 mt-4 md:mt-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out transform"
            onClick={() => handleProjectClick(project.link)}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gray-100 shadow-2xl object-cover w-full rounded-xl border border-gray-200 h-56 lg:h-96">
                <img src={project.image} alt={project.name} />
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
