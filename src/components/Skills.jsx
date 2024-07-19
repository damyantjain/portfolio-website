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
    <div className="py-12">
      <div className="align-middle text-center font-poppins text-4xl text-[#333333] dark:text-[#e0e0e0]">
        Skills & Technologies
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mt-10 container mx-auto px-4 bg-gradient-to-br from-gray-100 to-white w-full dark:from-[#1e1e1e] dark:to-[#2222222d] shadow-lg rounded-xl p-6 pt-16 border border-gray-200 dark:border-0 mb-6"
      >
        {skillList.map((skillCategory, index) => (
          <div key={index} className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-4/12 lg:w-3/12 flex items-center">
                <div className="font-poppins dark:text-[#e0e0e0] text-[#333333] text-xl whitespace-nowrap">
                  {skillCategory.title}
                </div>
              </div>
              <div className="md:w-8/12 lg:w-9/12 flex flex-wrap gap-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center"
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
      </motion.div>
    </div>
  );
};

export default Skills;
