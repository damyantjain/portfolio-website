import { updateDescription } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const DescriptionEditor = () => {
  const dispatch = useDispatch();
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div className="mb-5">
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
        Description
      </label>
      <textarea
        value={editedBlog?.description}
        onChange={(e) => dispatch(updateDescription(e.target.value))}
        className="border-2 border-gray-300 dark:border-gray-700 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter the description"
        rows="3"
      />
    </div>
  );
};

export default DescriptionEditor;
