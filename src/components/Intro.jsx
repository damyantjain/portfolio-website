import profileImage from "./../assets/profile.jpeg";
import Typewriter from 'typewriter-effect';


const Intro = () => {
  return (
    <div className="h-screen md:h-[calc(100vh-80px)] mt-5 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row xl:mx-12 lg:gap-4 ">
        {/* About Me */}
        <div className="lg:px-10 w-full lg:w-8/12 flex flex-col items-center justify-center">
          <div className="font-poppins align-middle text-center lg:pb-8 pb-4 text-4xl md:text-6xl font-bold text-[#333333] dark:text-[#e0e0e0] leading-tight lg:leading-normal">
            Damyant Jain
          </div>
          <div className="lg:pb-8 pb-4 tracking-wider font-poppins text-2xl md:text-4xl font-bold text-[#e53939]">
            <Typewriter
              options={{
                strings: ["Programmer", "Developer", "Student", "Innovator", "Curious"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="align-middle text-center font-poppins dark:text-[#e0e0e0] text-[#333333]">
            I'm all about turning cool ideas into awesome products and exploring
            the ever-evolving tech world. With over 3 years of experience, I'm passionate about solving real-world problems. When I'm
            not coding, you can find me enjoying sports.
          </div>
        </div>
        {/* My photo */}
        <div className="p-5 w-full pt-20 lg:pt-0 lg:w-4/12 flex justify-center items-center">
          <img
            className="rounded-full shadow-2xl object-cover dark:shadow-[#e53939] h-56 w-56  lg:h-72 lg:w-72"
            src={profileImage}
            alt="Damyant Jain"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
