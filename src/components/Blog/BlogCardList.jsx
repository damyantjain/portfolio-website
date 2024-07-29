import BlogCard from "./BlogCard";

const BlogCardList = ({ posts }) => {
  return (
    <div className="pb-56">
      {posts.map((post) => {
        return (
          <div key={post?._id} className="pt-10">
            <BlogCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default BlogCardList;
