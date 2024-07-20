import Contact from "./Contact";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { BASE_URL, BLOGS_URL } from "../util/constants";

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
    <div className="flex flex-col min-h-screen">
      <NavBar nav={[]} />
      <div className="flex-grow mx-5 md:mx-24 mb-5 lg:mx-44 dark:bg-[#121212]">
        {/* Blog Home */}
        <div id="BlogHome" className="md:pt-32">
          {/* All posts */}
          <h1 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-poppins mt-5 mb-10">
            Reads
          </h1>
          <div className="pb-56">
            {posts.map((post) => {
              console.log(post);
              return (
                <div key={post?.id} className="pt-10">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-bold">
                        {post?.title}
                      </h2>
                      <p className="font-poppins text-gray-500 dark:text-gray-400">
                        {post?.description}
                      </p>
                      <p className="mt-5 text-gray-500 text-sm dark:text-gray-400">
                        {post?.date}
                      </p>
                    </div>
                    <img
                      className="w-[80px] ml-5 md:ml-8 h-[53px] md:w-[160px] md:h-[107px] object-cover"
                      src={`${BASE_URL}${post?.image?.url}`}
                    />
                  </div>
                  <div className="h-[1px] mt-10 bg-[#e2e2e2]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-5 mt-auto mb-5 lg:mx-44">
        <Contact />
      </div>
    </div>
  );
};

export default BlogHome;
