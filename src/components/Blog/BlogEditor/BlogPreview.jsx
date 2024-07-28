import BlogView from "../BlogView";

const BlogPreview = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className=" bg-[#feeb73] text-xl text-[#333333] text-center md:mx-0 sm:mx-10 mx-5 w-full md:w-[680px]">
          This is just a preview of the blog.
        </div>
      </div>
      <BlogView />
    </div>
  );
};

export default BlogPreview;
