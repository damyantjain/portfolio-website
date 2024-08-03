import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import useCalculateDuration from "../util/useCalculateDuration";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NavBarMobile = ({ nav, isOpen, setIsOpen }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    toggleMenu();
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 dark:bg-[#121212]  bg-white z-50 flex flex-col justify-center items-center">
        <button
          onClick={toggleMenu}
          className="dark:text-white text-3xl font-extralight absolute top-4 right-4"
        >
          X
        </button>
        <ul className="font-poppins text-[#333333] text-2xl space-y-6 dark:text-[#e0e0e0]">
          {nav.map((item, index) => (
            <li key={index} className="transition-colors hover:text-[#9d9d9d]">
              {item.external ? (
                <Link onClick={toggleMenu} to={item.link}>{item.title}</Link>
              ) : (
                <ScrollLink
                  onClick={toggleMenu}
                  to={item.link}
                  smooth="easeInOutQuad"
                  duration={() => useCalculateDuration(`#${item.link}`)}
                >
                  {item.title}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={handleThemeToggle}
          className="mt-6 p-2 bg-gray-800 dark:bg-gray-200 dark:text-[#333333] text-[#e0e0e0]"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    );
  }
};

export default NavBarMobile;
