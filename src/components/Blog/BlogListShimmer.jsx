const Shimmer = () => {
  return (
    <div className="pt-10">
      <div className="flex justify-between">
        <div className="w-full">
          <div className="shimmer-line bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-4/12 h-4 mt-3"></div>
          <div className="shimmer-line bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-7/12  h-3 mt-3"></div>
          <div className="bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-1/12 h-3 mt-8"></div>
        </div>

        <div className="bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-[80px] ml-5 md:ml-8 h-[53px] md:w-[160px] md:h-[107px]"></div>
      </div>
      <div className="h-[1px] mt-10 bg-[#e2e2e2]"></div>
    </div>
  );
};

const BlogListShimmer = () => {
    return (
      <div>
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
};

export default BlogListShimmer;
