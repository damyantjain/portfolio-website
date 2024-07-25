import BlogHome from "../components/Blog/BlogHome";
import BlogView from"../components/Blog/BlogView";
import BlogLayout from "../components/Blog/BlogLayout";
import BlogEditHome from "../components/Blog/BlogEditHome";
import Login from "../components/Blog/Login";

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
      element: <BlogEditHome />,
    },
    {
      path: ":id",
      element: <BlogView />,
    },
  ],
};

export default blogRoute;