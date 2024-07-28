import EditorOption from "./EditorOption";
import { useDispatch } from "react-redux";
import { updateContent, updateCaption } from "../../../store/blogSlice";

const ImageBlock = ({ contentBlock }) => {
  const dispatch = useDispatch();
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-3">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold">
          Image Block
        </label>
        <EditorOption blockId={contentBlock._id} />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
          URL
        </label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={contentBlock?.content}
          onChange={(e) => {
            dispatch(
              updateContent({ content: e.target.value, _id: contentBlock._id })
            );
          }}
          className="border-2 border-gray-300 dark:border-gray-700 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
          Caption
        </label>
        <input
          type="text"
          placeholder="Image Caption"
          value={contentBlock?.caption}
          onChange={(e) => {
            dispatch(updateCaption({ caption: e.target.value, _id: contentBlock._id }));
          }}
          className="border-2 border-gray-300 dark:border-gray-700 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default ImageBlock;
