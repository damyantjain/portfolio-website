import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BLOGS_URL } from "../../util/constants";
import BlogContent from "./BlogContent";

const BlogView = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`${BLOGS_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="dark:bg-[#121212] text-[#333333] dark:text-[#e0e0e0] md:mx-0 sm:mx-10 mx-5 w-full md:w-[680px]">
        <h1 className="text-[42px] font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <img
          src={blog.image}
          className="object-cover rounded-lg mt-4"
        />
        <BlogContent blog={blog} />
      </div>
    </div>
  );
};
export default BlogView;
