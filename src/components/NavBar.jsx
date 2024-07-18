import { Link } from "react-scroll";
import dj from "./../assets/4.png";
import { useContext } from "react";
import { useState } from "react";
import djdark from "./../assets/5.png";
import ThemeContext from "../context/ThemeContext";

const NavBar = () => {
  const calculateDuration = (target) => {
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.scrollY;
    const distance = Math.abs(startPosition - targetPosition);
    const baseDuration = 400;
    const additionalDuration = Math.log(distance + 1) * 100;
    let duration = baseDuration + additionalDuration;
    const minDuration = 400;
    const maxDuration = 2000;
    duration = Math.min(Math.max(duration, minDuration), maxDuration);

    return duration;
  };

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="hidden items-center fixed top-0 left-0 w-full dark:bg-[#121212] bg-white shadow-lg dark:shadow-[#e53939] z-50 md:flex px-16 dark:text-[#e0e0e0]">
      <div className="w-full grid grid-cols-3 items-center">
        <div>
          { darkMode? <img src={djdark} className="h-20 w-20 bg-black" /> : <img src={dj} className="h-20 w-20" /> }
        </div>

        <div className=" md:flex justify-center dark:text-[#e0e0e0]">
          <ul className=" flex font-poppins text-[#333333] items-center space-x-10 dark:text-[#e0e0e0] h-20">
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="home"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#home")}
              >
                Home
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="projects"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#projects")}
              >
                Projects
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="resume"
                smooth="easeInOutQuad"  
                duration={() => calculateDuration("#resume")}
              >
                Resume
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="skills"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#skills")}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex justify-end relative`}
          onClick={toggleDarkMode}
        >
          <div
            className={`hover:cursor-pointer ${
              darkMode ? `text-[#f0f0f0]` : `text-[#333333]`
            } text-xl`}
          >
            ☀
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
