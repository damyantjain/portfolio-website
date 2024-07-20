import Contact from "./Contact";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { BASE_URL, POSTS_URL } from "../util/constants";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    var data = await fetch(POSTS_URL);
    var response = await data.json();
    setPosts(response?.data);
  };

  return (
    <div>
      <NavBar nav={[]} />
      <div className="mx-5 md:mx-24 mb-5 lg:mx-44 dark:bg-[#121212]">
        {/* Home */}
        <div id="BlogHome" className="md:pt-32 h-max">
          {/* All posts */}
          <h1 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-poppins mt-5 mb-10">
            Reads
          </h1>
          {posts.map((p) => {
            console.log(p);
            var post = p?.attributes;
            return (
              <div key={p?.id} className="pt-10 ">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-bold">
                      {post?.Title}
                    </h2>
                    <p className="font-poppins text-gray-500 dark:text-gray-400">
                    </p>
                    <p className="mt-5 text-gray-500 text-sm dark:text-gray-400">{post?.Date}</p>
                  </div>
                  <img className="w-[80px] ml-5 md:ml-8 h-[53px] md:w-[160px] md:h-[107px] object-cover" src={`${BASE_URL}${post?.Image?.data[0]?.attributes?.url}`} />
                </div>
                <div className="h-[1px] mt-10 bg-[#e2e2e2]"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-44 mb-5 md:mt-80">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;