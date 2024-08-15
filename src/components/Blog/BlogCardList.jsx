import BlogCard from "./BlogCard";

const BlogCardList = ({ posts }) => {

  const sortedPosts = posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="pb-56">
      {sortedPosts.map((post) => {
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
