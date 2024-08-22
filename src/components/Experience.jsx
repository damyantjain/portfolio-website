import experience from "../db/experience";
import external_black from "../assets/svg/external_black.svg";
import external_white from "../assets/svg/external_white.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Experience = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const viewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1XGQgtPm6wX49llDd2oHPsVZFfz4CRiah/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="mt-10">
      <div className="font-poppins flex justify-between mb-10 text-2xl text-[#333333] dark:text-[#e0e0e0]">
        <div>Experience</div>
        <div>
          <button onClick={() => viewResume()}>
            <img
              className="h-8 w-8"
              src={darkMode ? external_white : external_black}
            />
          </button>
        </div>
      </div>
      <div>
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-100 to-white dark:from-[#1e1e1e] dark:to-[#2222222d] shadow-lg rounded-xl p-6 border border-gray-200 dark:border-0 mb-6"
          >
            <div className="md:flex md:flex-row">
              <div className="md:w-9/12">
                <div className="font-bold md:text-lg text-[#333333] dark:text-[#e0e0e0]">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.position}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.location}
                </div>
              </div>
              <div className="md:w-3/12 text-sm md:text-end text-gray-500 dark:text-gray-400">
                {exp.duration}
              </div>
            </div>
            <div className="mt-2 text-gray-500 dark:text-gray-400">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
