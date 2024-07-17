import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "Image URL of Project 1",
      link: "Link to Project 1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "Image URL of Project 2",
      link: "Link to Project 2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      image: "Image URL of Project 3",
      link: "Link to Project 3",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      image: "Image URL of Project 4",
      link: "Link to Project 4",
    },
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="align-middle text-center font-poppins text-4xl font-bold text-[#333333]"
    >
      <div>My Projects</div>
      {/* List of Projects */}
      <motion.div
        className="grid grid-cols-2 gap-2 lg:gap-8 mt-4 md:mt-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <div className="hover:cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out transform ">
            <motion.div key={index} variants={itemVariants}>
              {/* Project Image */}
              <div className="rounded-xl shadow-2xl object-cover bg-gray-200 h-56 w-full lg:h-96">
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
