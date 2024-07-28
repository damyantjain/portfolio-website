import { deleteBlock } from "../../../store/blogSlice";
import { useDispatch } from "react-redux";

const EditorOption = ({ blockId }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    const confirmation = confirm("Are you sure you want to delete this block?");
    if (confirmation) {
      console.log("Deleting block with ID: ", blockId);
      dispatch(deleteBlock(blockId));
    }
  };

  return (
    <div>
      <i
        onClick={handleDeleteClick}
        className="fas fa-trash-alt text-red-600"
      ></i>
    </div>
  );
};
export default EditorOption;
