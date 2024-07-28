import { useEffect } from "react";
import { BLOGS_URL } from "../../util/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
      setBlogNotFound(true);
      return;
    }
    var data = await response.json();
    dispatch(addBlog(data));
  };

  const editedBlog = useSelector((state) => state.blog);

  return (
    <div className="mx-5 md:mx-16 lg:mx-32 xl:mx-44">
      <div>
        <TitleEditor />
        <DescriptionEditor />
        <BlogContent />
      </div>
    </div>
  );
};

export default BlogEditHome;
