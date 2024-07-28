import BlogHome from "../components/Blog/BlogHome";
import BlogView from "../components/Blog/BlogView";
import BlogLayout from "../components/Blog/BlogLayout";
import BlogEditHome from "../components/Blog/BlogEditHome";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../components/Blog/Login";
import BlogPreview from "../components/Blog/BlogEditor/BlogPreview";

const blogRoute = {
  path: "blog",
  element: <BlogLayout />,
  children: [
    {
      path: "",
      element: <BlogHome mode="read" />,
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
          element: <ProtectedRoute children={<BlogHome mode="edit" />} />,
        },
        {
          path: ":id",
          children: [
            {
              path: "",
              element: <ProtectedRoute children={<BlogEditHome />} />,
            },
            {
              path: "preview",
              element: <ProtectedRoute children={<BlogPreview />} />,
            },
          ],
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
