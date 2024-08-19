import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BLOGS_URL } from "../../util/constants";
import BlogContent from "./BlogContent";
import { Helmet } from 'react-helmet';

const BlogView = () => {
  const { titleAndId } = useParams();
  const id = titleAndId.split('-').pop();

  const [blog, setBlog] = useState({});
  const [blogNotFound, setBlogNotFound] = useState(false);

  useEffect(() => {
    console.log("BlogView useEffect");
    getBlog();
  }, []);

  const getBlog = async () => {
    var response = await fetch(`${BLOGS_URL}/${id}`);
    if (!response.ok) {
      setBlogNotFound(true);
      return;
    }
    var data = await response.json();
    setBlog(data);
  };  

  if (blogNotFound) {
    return <div className="">
      <h1 className="text-3xl font-poppins text-[#333333] dark:text-[#e0e0e0] text-center mt-10">Blog not found</h1>
    </div>;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Helmet>
        <title>{blog.title || "Loading..."}</title>
        <meta name="description" content={blog.description || "Blog post description"} />
        <meta name="keywords" content={blog.keywords || "blog, tech, React"} />
        <meta property="og:title" content={blog.title || "Blog Post Title"} />
        <meta property="og:description" content={blog.description || "Description of the blog post."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://damyantjain.com/blog/${id}`} />
        <meta property="og:image" content={blog.image} />
      </Helmet>
      <div className="dark:bg-[#121212] text-[#333333] dark:text-[#e0e0e0] md:mx-0 sm:mx-10 mx-5 w-full md:w-[680px]">
        <h1 className="text-[42px] font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(blog.updatedAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <BlogContent blog={blog} />
      </div>
    </div>
  );
};
export default BlogView;
