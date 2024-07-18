import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

const AppLayout = () => {


  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode }}>
      <div className={`dark:bg-[#121212] ${darkMode? "dark" : ""} `}>
        <NavBar />
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
