import profileImage from "./../assets/profile.jpg";

const Portfolio = () => {
  const adjectives = ["Developer", "Designer", "Creator", "Innovator"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return (
    <div className="bg-red-300">
      {/* Landing View */}
      <div className="h-screen bg-[#f0f4f4] flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:mx-24 lg:gap-4">
          {/* About Me */}
          <div className="px-10 w-full lg:w-8/12 flex flex-col items-center justify-center">
            <div className="font-poppins align-middle text-center lg:pb-8 pb-4 text-6xl font-bold text-[#333333] leading-tight lg:leading-normal">
              Damyant Jain
            </div>
            <h3 className="lg:pb-8 pb-4 tracking-wider font-poppins text-4xl font-bold text-[#e53939]">
              Programmer
            </h3>
            <div className="align-middle text-center font-poppins  text-[#333333]">
              I'm all about turning cool ideas into awesome products and
              exploring the ever-evolving tech world. With over 3 years of
              experience under my belt, I'm passionate about solving real-world
              problems. When I'm not coding, you can find me enjoying sports.
            </div>
          </div>
          {/* My photo */}
          <div className="p-5 w-full pt-20 lg:pt-0 lg:w-4/12 flex justify-center items-center">
            <img
              className="rounded-full drop-shadow-xl object-cover shadow-slate-500 h-56 w-56 lg:h-72 lg:w-72"
              src={profileImage}
              alt="Damyant Jain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
