import { updateTitle } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const TitleEditor = () => {
  const dispatch = useDispatch();
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div className="mb-5">
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
        Title
      </label>
      <input
        type="text"
        value={editedBlog?.title}
        onChange={(e) => dispatch(updateTitle(e.target.value))}
        className="border-2 border-gray-300 dark:border-gray-700 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter the title"
      />
    </div>
  );
};

export default TitleEditor;
