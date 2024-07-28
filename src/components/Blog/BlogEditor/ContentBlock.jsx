import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { useSelector } from "react-redux";

const ContentBlock = () => {
  const editedBlog = useSelector((state) => state.blog.editedBlog);

  return (
    <div>
      {editedBlog?.contentBlocks?.map((contentBlock, index) => (
        <div
          key={index}
          className="mx-auto px-4 w-full  dark:bg-[#2222222d] rounded-xl p-6 border border-gray-200 dark:border-0 mb-6"
        >
          {contentBlock?.type === "text" ? (
            <TextBlock contentBlock={contentBlock} />
          ) : (
            <ImageBlock contentBlock={contentBlock} />
          )}
        </div>
      ))}
    </div>
  );
};
export default ContentBlock;
