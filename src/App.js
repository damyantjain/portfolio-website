import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import { createContext } from "react";

const AppLayout = () => {
  const ThemeContext = createContext({
    darkMode: false,
  });

  return (
    <ThemeContext.Provider value={{ darkMode: false }}>
      <div>
        <NavBar />
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
