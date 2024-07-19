import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    var data = await fetch("http://localhost:1337/api/blogs");
    var response = await data.json();
    console.log(response);
  }

  return (
    <div>
      <NavBar nav={[]} />
      <div className="mx-5 md:mx-24 mb-5 lg:mx-44 dark:bg-[#121212]"></div>
    </div>
  );
};

export default Blog;
