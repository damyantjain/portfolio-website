import { BASE_URL } from "../../util/constants";
import { Link } from "react-router-dom";
const BlogCard = ({ post }) => {
  const handleBlogClick = () => {};

  return (
    <div>
      <Link to={post._id  }>
        <div className="flex justify-between hover:cursor-pointer">
          <div>
            <h2 className="text-xl md:text-2xl text-[#333333] dark:text-[#e0e0e0] font-bold">
              {post?.title}
            </h2>
            <p className="font-poppins text-gray-500 dark:text-gray-400">
              {post?.description}
            </p>
            <p className="mt-5 text-gray-500 text-sm dark:text-gray-400">
              {post?.date}
            </p>
          </div>
          <img
            className="w-[80px] ml-5 md:ml-8 h-[53px] md:w-[160px] md:h-[107px] object-cover"
            src={`${BASE_URL}${post?.image?.url}`}
          />
        </div>
        <div className="h-[1px] mt-10 bg-[#e2e2e2]"></div>
      </Link>
    </div>
  );
};
export default BlogCard;
