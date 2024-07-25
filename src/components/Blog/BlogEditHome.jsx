import { useState, useEffect } from "react";
import { BLOGS_URL } from "../../util/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../../store/blogSlice";

const BlogEditHome = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: "", description: "" });
  const [editedBlog, setEditedBlog] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    var response = await fetch(`${BLOGS_URL}/${id}`);
    if (!response.ok) {
      setBlogNotFound(true);
      return;
    }
    var data = await response.json();
    setBlog(data);
    setEditedBlog(data);
    dispatch(addBlog(data));
  };

  return (
    <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
      <div>
        {/* Title  */}
        <div className="mb-5">
          <div>Title</div>
          <input
            type="text"
            value={editedBlog?.title}
            onChange={(e) =>
              setEditedBlog({ ...editedBlog, title: e.target.value })
            }
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
        {/* Description */}
        <div>
          <div>Description</div>
          <textarea
            type="text"
            value={editedBlog?.description}
            onChange={(e) =>
              setEditedBlog({ ...editedBlog, description: e.target.value })
            }
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditHome;
