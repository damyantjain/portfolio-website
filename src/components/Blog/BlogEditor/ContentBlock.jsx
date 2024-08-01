import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderBlocks } from "../../../store/blogSlice";

const ContentBlock = () => {
  const editedBlog = useSelector((state) => state.blog.editedBlog);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedBlocks = Array.from(editedBlog.contentBlocks);
    const [movedBlock] = reorderedBlocks.splice(result.source.index, 1);
    reorderedBlocks.splice(result.destination.index, 0, movedBlock);

    dispatch(reorderBlocks(reorderedBlocks));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="contentBlocks">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {editedBlog?.contentBlocks?.map((contentBlock, index) => (
              <Draggable
                key={contentBlock._id}
                draggableId={contentBlock._id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mx-auto px-4 w-full dark:bg-[#2222222d] rounded-xl p-6 border border-gray-200 dark:border-0 mb-6"
                  >
                    {contentBlock?.type === "text" ? (
                      <TextBlock contentBlock={contentBlock} />
                    ) : (
                      <ImageBlock contentBlock={contentBlock} />
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ContentBlock;
