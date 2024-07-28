import EditorOption from "./EditorOption";
import { useDispatch } from "react-redux";
import { updateContent, updateCaption } from "../../../store/blogSlice";

const ImageBlock = ({ contentBlock }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between">
        <div>Image Block</div>
        <EditorOption blockId={contentBlock._id} />
      </div>
      <div>
        <div className="mb-3">
          <div>Url</div>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            value={contentBlock?.content}
            onChange={(e) => {
              dispatch(
                updateContent({ content: e.target.value, _id: contentBlock._id })
              );
            }}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <div>Caption</div>
          <input
            type="text"
            placeholder="Image Caption"
            value={contentBlock?.caption}
            onChange={(e) => {
              dispatch(updateCaption({ caption: e.target.value, _id: contentBlock._id }));
            }}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default ImageBlock;
