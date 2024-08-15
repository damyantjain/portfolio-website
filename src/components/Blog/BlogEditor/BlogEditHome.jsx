import { useEffect, useState } from "react";
import { BLOGS_URL } from "../../../util/constants";
import BlogCardList from "../BlogCardList";
import { useNavigate } from "react-router-dom";
import customFetch from "../../../util/customFetch";

const BlogEditHome = ({ mode }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    var response = await customFetch(BLOGS_URL);
    if (!response.ok) {
      setPosts([]);
      return;
    } else {
      var data = await response.json();
      setPosts(data);
    }
  };

  const handleNewBlog = () => {
    navigate(`/blog/edit/new`);
  };

  return (
    <div>
      {/* Blog Home */}
      <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
        {/* All posts */}
        <div className="flex justify-between items-start  mt-5 mb-10">
          <h1 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-poppins">
            Edit Blog
          </h1>
          <button
            onClick={handleNewBlog}
            className="bg-gray-800 py-2 px-3 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            New Blog
          </button>
        </div>
        <BlogCardList posts={posts} />
      </div>
    </div>
  );
};

export default BlogEditHome;
