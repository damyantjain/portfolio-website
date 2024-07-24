import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import BlogHome from "./components/Blog/BlogHome";
import BlogView from "./components/Blog/BlogView";
import BlogLayout from "./components/Blog/BlogLayout";
import ThemeContext from "./context/ThemeContext";
import Login from "./components/Blog/Login";
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
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            path: "",
            element: <BlogHome />,
          },
          {
            path: ":id",
            element: <BlogView />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
