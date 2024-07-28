import { updateContent } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import EditorOption from "./EditorOption";

const TextBlock = ({ contentBlock, index }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between">
        <div>Text Block</div>
        <EditorOption blockId={contentBlock._id} />
      </div>
      <textarea
        type="text"
        className="border-2 border-gray-300 p-2 w-full"
        value={contentBlock?.content}
        onChange={(e) => {
          dispatch(updateContent({ content: e.target.value, index }));
        }}
      />
    </div>
  );
};

export default TextBlock;
