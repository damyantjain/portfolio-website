import React from "react";
import skillList from "../db/skills";
import TechIcons from "./TechIcons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* <div className="align-middle text-center font-poppins text-4xl text-[#333333]">
        Skills & Technologies
      </div> */}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="mt-20 md:mt-20">
          {skillList.map((skillCategory, index) => (
            <div key={index} className="mb-5 md:mb-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-4/12 lg:w-3/12 flex items-center">
                  <div className="font-poppins text-[#333333] text-xl whitespace-nowrap">
                    {skillCategory.title}
                  </div>
                </div>
                <div className="md:w-8/12 lg:w-9/12 flex flex-wrap">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="mr-4 flex items-center"
                      variants={itemVariants}
                    >
                      <TechIcons
                        imageUrlName={skill.imageUrlName}
                        name={skill.name}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
