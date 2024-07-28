import { updateContent } from "../../../store/blogSlice";
import { useDispatch } from "react-redux";
import EditorOption from "./EditorOption";

const TextBlock = ({ contentBlock }) => {
  const dispatch = useDispatch();
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-3">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold">
          Text Block
        </label>
        <EditorOption blockId={contentBlock._id} />
      </div>
      <textarea
        className="border-2 border-gray-300 dark:border-gray-700 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
        value={contentBlock?.content}
        onChange={(e) => {
          dispatch(
            updateContent({ content: e.target.value, _id: contentBlock._id })
          );
        }}
        placeholder="Enter text here"
        rows="5"
      />
    </div>
  );
};

export default TextBlock;
