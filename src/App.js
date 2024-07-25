import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import blogRoute from "./routes/blogRoute";
import ThemeContext from "./context/ThemeContext";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const AppLayout = () => {
  const getInitialMode = () => {
    return JSON.parse(localStorage.getItem("dark"));
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
    document.body.style.backgroundColor = darkMode ? "#121212" : "";
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
      blogRoute,
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
