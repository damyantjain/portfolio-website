import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import dj from "./../assets/dj.png";
import { useContext } from "react";
import { useState, useEffect } from "react";
import djdark from "./../assets/dj_dark.png";
import ThemeContext from "../context/ThemeContext";
import NavBarMobile from "./NavBarMobile";
import useCalculateDuration from "../util/useCalculateDuration";
import { useNavigate } from "react-router-dom";

const NavBar = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <nav className="hidden items-center fixed top-0 left-0 w-full dark:bg-[#121212] bg-white shadow-lg dark:shadow-[#e53939] z-50 md:flex px-16 dark:text-[#e0e0e0]">
        <div className="w-full grid  grid-cols-3 items-center" style={{gridTemplateColumns: '1fr auto 1fr'}}>


          <div>
            {darkMode ? (
              <img
                onClick={() => {
                  navigate("/");
                }}
                src={djdark}
                className="h-20 w-20 bg-black hover:cursor-pointer"
              />
            ) : (
              <img
                onClick={() => {
                  navigate("/");
                }}
                src={dj}
                className="h-20 w-20 hover:cursor-pointer"
              />
            )}
          </div>

          <div className="md:flex justify-center dark:text-[#e0e0e0]">
            <ul className="flex font-poppins text-[#333333] items-center space-x-10 dark:text-[#e0e0e0] h-20">
              {nav.map((item, index) => (
                <li
                  key={index}
                  className="transition-colors hover:text-[#9d9d9d] hover:cursor-pointer"
                >
                  {item.external ? (
                    <Link to={item.link}>{item.title}</Link>
                  ) : (
                    <ScrollLink
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
          </div>


          <div className={`flex justify-end relative`}>
            <div
              onClick={toggleDarkMode}
              className={` hover:cursor-pointer ${
                darkMode ? `text-[#f0f0f0]` : `text-[#333333]`
              } text-xl`}
            >
              ☀
            </div>
          </div>


        </div>
      </nav>
      {!isOpen && (
        <div className="md:hidden shadow-lg z-50 dark:shadow-[#e53939] pt-2  px-5">
          <div className="flex items-center justify-between">
            <div>
              {darkMode ? (
                <img src={djdark} className="h-16 w-16" />
              ) : (
                <img src={dj} className="h-16 w-16" />
              )}
            </div>
            <div>
              <i
                style={{ color: darkMode ? "#f0f0f0" : "#333333" }}
                onClick={() => setIsOpen(true)}
                className="fa-solid fa-bars fa-2x"
              ></i>
            </div>
          </div>
        </div>
      )}
      <NavBarMobile nav={nav} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
