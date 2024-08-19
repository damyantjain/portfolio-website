import BlogHome from "../components/Blog/BlogHome";
import BlogView from "../components/Blog/BlogView";
import BlogLayout from "../components/Blog/BlogLayout";
import BlogEditor from "../components/Blog/BlogEditor/BlogEditor";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../components/Blog/Login";
import BlogPreview from "../components/Blog/BlogEditor/BlogPreview";
import BlogEditHome from "../components/Blog/BlogEditor/BlogEditHome";

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
          element: <ProtectedRoute children={<BlogEditHome />} />,
        },
        {
          path: "new",
          element: <ProtectedRoute children={<BlogEditor />} />,
        },
        {
          path: ":titleAndId",
          children: [
            {
              path: "",
              element: <ProtectedRoute children={<BlogEditor />} />,
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
      path: ":titleAndId",
      element: <BlogView />,
    },
  ],
};

export default blogRoute;
