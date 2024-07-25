import { useEffect, useState } from "react";
import { BLOGS_URL } from "../../util/constants";
import BlogCard from "./BlogCard";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    var data = await fetch(BLOGS_URL);
    var response = await data.json();
    var d = [...response];
    setPosts(d);
  };

  return (
    <div>
      {/* Blog Home */}
      <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
        {/* All posts */}
        <h1 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-poppins mt-5 mb-10">
          Reads
        </h1>
        <div className="pb-56">
          {posts.map((post) => {
            return (
              <div key={post?._id} className="pt-10">
                <BlogCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
