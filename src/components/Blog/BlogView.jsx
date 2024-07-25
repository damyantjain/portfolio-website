import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BLOGS_URL } from "../../util/constants";
import BlogContent from "./BlogContent";

const BlogView = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [blogNotFound, setBlogNotFound] = useState(false);

  useEffect(() => {
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
      <div className="dark:bg-[#121212] text-[#333333] dark:text-[#e0e0e0] md:mx-0 sm:mx-10 mx-5 w-full md:w-[680px]">
        <h1 className="text-[42px] font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <img src={blog.image} className="object-cover rounded-lg mt-4" />
        <BlogContent blog={blog} />
      </div>
    </div>
  );
};
export default BlogView;
