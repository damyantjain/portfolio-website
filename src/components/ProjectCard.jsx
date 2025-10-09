import { motion } from "framer-motion";
import kanbasImg from "../assets/project/kanbas.png";
import customerManagementImg from "../assets/project/customerManagement.png";
import jiffyImg from "../assets/project/jiffy.png";
import admitlyImg from "../assets/project/admitly.png";
import useFormAutoSaveImg from "../assets/project/useFormAutoSave.png";
import portfolioImg from "../assets/project/portfolio.png";
import coralcakeImg from "../assets/project/coralcake.png";
import neatmeetImg from "../assets/project/neatmeet.png";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);

  const imageMap = {
    kanbas: kanbasImg,
    customerManagement: customerManagementImg,
    jiffy: jiffyImg,
    admitly: admitlyImg,
    useFormAutoSave: useFormAutoSaveImg,
    portfolio: portfolioImg,
    coralcake: coralcakeImg,
    neatmeet: neatmeetImg,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col h-full"
    >
      <div
        className="hover:cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out transform h-full"
        onClick={() => handleProjectClick(project.link)}
      >
        <div className="flex flex-col h-full rounded-xl shadow-lg shadow-[#b3b3b3] dark:shadow-[#1a1919] overflow-hidden">
          <div className="relative w-full h-48 md:h-52 lg:h-48 xl:h-56">
            <img
              className="w-full h-full object-cover"
              src={imageMap[project.image]}
              alt={project.name}
            />
            {darkMode && (
              <div className="absolute inset-0 bg-black opacity-20"></div>
            )}
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-sm font-poppins dark:text-gray-400 text-gray-500">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;