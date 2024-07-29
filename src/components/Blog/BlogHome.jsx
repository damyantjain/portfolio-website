import { useEffect, useState } from "react";
import { BLOGS_URL, PUBLISHED_BLOGS } from "../../util/constants";
import BlogCardList from "./BlogCardList";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    var response = await fetch(PUBLISHED_BLOGS);
    if (!response.ok) {
      setPosts([]);
      return;
    } else {
      var data = await response.json();
      setPosts(data);
    }
  };

  return (
    <div>
      {/* Blog Home */}
      <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
        {/* All posts */}
        <h1 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-poppins mt-5 mb-10">
          Reads
        </h1>
        <BlogCardList posts={posts} />
      </div>
    </div>
  );
};

export default BlogHome;
