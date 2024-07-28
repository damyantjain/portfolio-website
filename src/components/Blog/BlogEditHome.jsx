import { useEffect } from "react";
import { BLOGS_URL } from "../../util/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../../store/blogSlice";
import DescriptionEditor from "./BlogEditor/DescriptionEditor";
import TitleEditor from "./BlogEditor/TitleEditor";
import BlogContent from "./BlogEditor/BlogContent";

const BlogEditHome = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    var response = await fetch(`${BLOGS_URL}/${id}`);
    if (!response.ok) {
      console.error("Blog not found");
      return;
    }
    var data = await response.json();
    dispatch(addBlog(data));
  };

  return (
    <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44 dark:bg-[#121212] min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-5">
        Edit Blog
      </h1>
      <div className="mx-auto px-4 w-full  dark:bg-[#2222222d] rounded-xl p-6 border border-gray-200 dark:border-0 mb-6">
        <TitleEditor />
        <DescriptionEditor />
      </div>
      <BlogContent />
    </div>
  );
};

export default BlogEditHome;
