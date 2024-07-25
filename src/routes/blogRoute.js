import BlogHome from "../components/Blog/BlogHome";
import BlogView from "../components/Blog/BlogView";
import BlogLayout from "../components/Blog/BlogLayout";
import BlogEditHome from "../components/Blog/BlogEditHome";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../components/Blog/Login";
import { Route, Routes } from "react-router-dom";

const blogEditRoute = [
  {
    path: "",
    element: <BlogHome />,
  },
  {
    path: ":id",
    element: <BlogEditHome />,
  },
];

const blogRoute = {
  path: "blog",
  element: <BlogLayout />,
  children: [
    {
      path: "",
      element: <BlogHome />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "edit",
      children: [
        {
          path: "",
          element: <ProtectedRoute children={<BlogHome />} />,
        },
        {
          path: ":id",
          element: <ProtectedRoute children={<BlogEditHome />} />,
        },
      ],
    },
    {
      path: ":id",
      element: <BlogView />,
    },
  ],
};

export default blogRoute;
