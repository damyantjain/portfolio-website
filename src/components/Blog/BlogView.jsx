const BlogView = () => {
  const blog = {
    title: "Blog Title",
    date: "July 23, 2021",
    image: "",
    content:
      "Test content for the blog view",
  };
  return (
    <div className="p-4 bg-white dark:bg-[#121212] dark:text-white rounded-lg">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mt-4"
      />
      <p className="text-lg mt-4">{blog.content}</p>
    </div>
  );
};
export default BlogView;
