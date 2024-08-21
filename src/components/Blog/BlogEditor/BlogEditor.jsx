import { useEffect } from "react";
import { BLOGS_URL } from "../../../util/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, resetEditedBlog } from "../../../store/blogSlice";
import DescriptionEditor from "./DescriptionEditor";
import TitleEditor from "./TitleEditor";
import BlogContent from "./BlogContent";
import PreviewImageEditor from "./PreviewImageEditor";
import { useNavigate } from "react-router-dom";
import { saveBlog } from "../../../util/commonAPI";
import KeywordsEditor from "./KeywordsEditor";

const BlogEditHome = () => {
  const navigate = useNavigate();
  const { titleAndId } = useParams();
  const id = titleAndId?.split("-").pop();
  const dispatch = useDispatch();
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  const handlePreviewClick = async () => {
    var response = await saveBlog({ editedBlog, publish: false });
    console.log("response", response);
    if (!response.ok) {
      return;
    } else {
      if (!id) {
        var data = await response.json();
        console.log("Redirecting to neww preview", data._id);
        navigate(`/blog/edit/${data._id}/preview`, { replace: true });
      } else {
        console.log("Redirecting to preview");
        navigate(`preview`);
      }
    }
  };

  useEffect(() => {
    if (titleAndId) {
      getBlog();
    } else {
      dispatch(
        addBlog({
          title: "New Blog",
          description: "Some description",
          author: "Damyant Jain",
        })
      );
    }
    return () => {
      dispatch(resetEditedBlog());
    };
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
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Edit Blog
        </h1>
        <button
          onClick={handlePreviewClick}
          className="bg-gray-800 py-2 px-3 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Save & Preview
        </button>
      </div>
      <div className="mx-auto px-4 w-full dark:bg-[#2222222d] rounded-xl p-6 border border-gray-200 dark:border-0 mb-6">
        <TitleEditor />
        <DescriptionEditor />
        <PreviewImageEditor />
        <KeywordsEditor />
      </div>
      <BlogContent />
    </div>
  );
};

export default BlogEditHome;
