import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-wrap justify-end items-center gap-10 px-4 ">
      <div className="text-right text-[#333333] dark:text-[#e0e0e0]">
        <div className="font-poppins text-lg">E-mail</div>
        <div className="text-sm">jain.dam@northeastern.edu</div>
      </div>
      <div className="text-right text-[#333333] dark:text-[#e0e0e0]">
        <div className="font-poppins text-lg">City</div>
        <div className="text-sm">Boston, MA</div>
      </div>
      <div className="flex gap-10">
      <div>
        <a href="https://github.com/damyantjain" target="_blank">
          <i
            className="fa-brands fa-github fa-3x"
            style={{ color: darkMode ? "white" : "black" }}
          ></i>
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/damyant" target="_blank">
          <i
            className="fa-brands fa-linkedin fa-3x"
            style={{ color: darkMode ? "white" : "#0077B5" }}
          ></i>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Contact;
