import { updateDescription } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const DescriptionEditor = () => {
  const dispatch = useDispatch();
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div className="mb-5">
      <div>Description</div>
      <textarea
        type="text"
        value={editedBlog?.description}
        onChange={(e) => dispatch(updateDescription(e.target.value))}
        className="border-2 border-gray-300 p-2 w-full"
      />
    </div>
  );
};

export default DescriptionEditor;
