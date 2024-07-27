import { updateContent } from "../../../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const TextBlock = ({ contentBlock, index }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>Text Block</div>
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
