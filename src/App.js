import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ThemeContext from "./context/ThemeContext";
import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";

const AppLayout = () => {
  const getInitialMode = () => {
    return JSON.parse(localStorage.getItem("dark"));
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode }}>
      <div className={`dark:bg-[#121212] ${darkMode ? "dark" : ""} `}>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <Navigate to="/" />
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
