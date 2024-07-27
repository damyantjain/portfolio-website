import TextBlock from "./TextBlock";
import { useSelector } from "react-redux";

const ContentBlock = () => {
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div>
      {editedBlog?.contentBlocks?.map((contentBlock, index) => (
        <div key={index} className="mb-5">
          {contentBlock?.type === "text" ? (
            <TextBlock contentBlock={contentBlock} index={index} />
          ) : (
            "Image Block"
          )}
        </div>
      ))}
    </div>
  );
};
export default ContentBlock;
