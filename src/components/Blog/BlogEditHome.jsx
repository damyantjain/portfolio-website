import { useState, useEffect } from "react";
import { BLOGS_URL } from "../../util/constants";
import { useParams } from "react-router-dom";

const BlogEditHome = () => {
  const [blog, setBlog] = useState({});
  const [editedBlog, setEditedBlog] = useState({});

  const { id } = useParams();

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
  };

  return (
    <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
      <div>
        {/* Title  */}
        <div className="mb-5">
          <div>Title</div>
          <input
            type="text"
            value={editedBlog.title}
            onChange={(e) => setBlog({ ...editedBlog, title: e.target.value })}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
        {/* Description */}
        <div>
          <div>Description</div>
          <textarea
            type="text"
            value={editedBlog.description}
            onChange={(e) => setBlog({ ...editedBlog, description: e.target.value })}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditHome;
