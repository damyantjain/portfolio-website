import { useSelector, useDispatch } from "react-redux";
import ContentBlock from "./ContentBlock";
import { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { addBlock } from "../../../store/blogSlice";
import { useParams } from "react-router-dom";
import { saveBlog } from "../../../util/commonAPI";

const BlogContent = () => {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [blockType, setBlockType] = useState("text");
  const editedBlog = useSelector((state) => state.blog.editedBlog);
  const { id } = useParams();

  const handleSaveBlog = async (publish) => {
    var response = await saveBlog({ editedBlog, publish });
    if (!response.ok) {
      alert("Error saving blog");
      return;
    } else {
      alert("Blog saved successfully");
    }
  };

  return (
    <div>
      <ContentBlock />
      <div className="flex my-5">
        <select
          onChange={(e) => setBlockType(e.target.value)}
          className="border-2 mr-3 border-gray-300 p-2 w-32 rounded-lg"
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>
        <i
          onClick={() => dispatch(addBlock({ type: blockType, content: "" }))}
          className="fas fa-plus-circle fa-2x cursor-pointer"
          style={{ color: darkMode ? "green" : "green" }}
        ></i>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => handleSaveBlog(false)}
          className="flex-1 bg-gray-800 text-white py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Save Draft
        </button>
        <button
          onClick={() => handleSaveBlog(true)}
          className="flex-1 bg-gray-800 text-white py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
