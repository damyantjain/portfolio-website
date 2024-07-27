import { updateTitle } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const TitleEditor = () => {
  const dispatch = useDispatch();
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div className="mb-5">
      <div>Title</div>
      <input
        type="text"
        value={editedBlog?.title}
        onChange={(e) => dispatch(updateTitle(e.target.value))}
        className="border-2 border-gray-300 p-2 w-full"
      />
    </div>
  );
};
export default TitleEditor;
