import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import ThemeContext from "./context/ThemeContext";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const getInitialMode = () => {
    return JSON.parse(localStorage.getItem("dark"));
  }

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode }}>
      <div className={`dark:bg-[#121212] ${darkMode ? "dark" : ""} `}>
        <NavBar />
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
