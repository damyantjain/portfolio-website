import { motion } from "framer-motion";
import kanbasImg from "../assets/project/kanbas.png";
import customerManagementImg from "../assets/project/customerManagement.png";
import jiffyImg from "../assets/project/jiffy.png";
import admitlyImg from "../assets/project/admitly.png";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ProjectCard = ({ project }) => {
    const { darkMode } = useContext(ThemeContext);
  
    const imageMap = {
      kanbas: kanbasImg,
      customerManagement: customerManagementImg,
      jiffy: jiffyImg,
      admitly: admitlyImg,
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
      <div className="">
        <div
          className="hover:cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out transform mt-16 lg:mt-0"
          onClick={() => handleProjectClick(project.link)}
        >
          <motion.div variants={itemVariants}>
            <div className="h-80 md:h-96 lg:h-[420px] 2xl:h-[460px]">
              <div className="relative rounded-xl shadow-lg shadow-[#b3b3b3] dark:shadow-[#1a1919] w-full h-48 md:h-64 xl:h-72 2xl:h-[340px]">
                <img
                  className="w-full h-full rounded-xl  object-cover"
                  src={imageMap[project.image]}
                  alt={project.name}
                />
  
                {darkMode && (
                  <div className="absolute rounded-xl inset-0 bg-black opacity-20"></div>
                )}
              </div>
              <div className="px-3 md:px-5 justify-start text- items-start">
                <div className="font-bold text-xl mt-4">
                  {project.title}
                </div>
                <div className="text-sm font-poppins dark:text-gray-400 text-gray-500">
                  {project.description}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default ProjectCard;