import { useSelector, useDispatch } from "react-redux";
import ContentBlock from "./ContentBlock";
import { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { addBlock } from "../../../store/blogSlice";
import { BLOGS_URL } from "../../../util/constants";
import { useParams } from "react-router-dom";

const BlogContent = () => {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [blockType, setBlockType] = useState("text");
  const editedBlog = useSelector((state) => state.blog.editedBlog);
  const { id } = useParams();

  const saveBlog = async (publish) => {
    console.log(JSON.stringify({ ...editedBlog, published: publish }));
    var response = await fetch(`${BLOGS_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...editedBlog, published: publish }),
    });
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
      <div className="flex">
        <select
          onChange={(e) => setBlockType(e.target.value)}
          className="border-2 mr-3 border-gray-300 p-2 w-32"
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>
        <i
          onClick={() => dispatch(addBlock({ type: blockType, content: "" }))}
          className="fas fa-plus-circle fa-2x"
          style={{ color: darkMode ? "green" : "green" }}
        ></i>
      </div>
      <div className="mt-5 flex">
        <button
          onClick={() => saveBlog(false)}
          className="bg-green-500 text-white p-2 rounded-lg"
        >
          Save Draft
        </button>
        <button
          onClick={() => saveBlog(true)}
          className="bg-blue-500 text-white p-2 rounded-lg ml-3"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
