const BlogContent = ({ blog }) => {
  return (
    <div>
      {blog?.contentBlocks?.map((block) => (
        <div key={block._id}  className="mb-10">
          {block.type === "text" && (
            <p className="text-[20px] font-serif antialiased mt-4">{block.content}</p>
          )}
          {block.type === "image" && (
            <div className="text-center flex flex-col items-center">
              <img className="" src={block.content} />
              <p className="text-sm font-poppins text-gray-500 mt-2">{block.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
