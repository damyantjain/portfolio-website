import { Link } from "react-scroll";
import dj from "./../assets/dj_circle.png";

const NavBar = () => {
  const calculateDuration = (target) => {
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.scrollY;
    const distance = Math.abs(startPosition - targetPosition);
    const baseDuration = 400;
    const additionalDuration = Math.log(distance + 1) * 100;
    let duration = baseDuration + additionalDuration;
    const minDuration = 400;
    const maxDuration = 2000;
    duration = Math.min(Math.max(duration, minDuration), maxDuration);

    return duration;
  };

  const toggleDarkMode = () => {};

  return (
    <nav className="hidden items-center fixed top-0 left-0 w-full bg-white shadow-lg z-50 md:flex px-16">
      <div className="w-full grid grid-cols-3 items-center">
        <div>
          <img src={dj} className="h-20 w-20" />
        </div>

        <div className=" md:flex justify-center">
          <ul className=" flex font-poppins text-[#333333] items-center space-x-10 h-20">
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="home"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#home")}
              >
                Home
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="projects"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#projects")}
              >
                Projects
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="resume"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#resume")}
              >
                Resume
              </Link>
            </li>
            <li className="transition-colors hover:text-[#9d9d9d]">
              <Link
                to="skills"
                smooth="easeInOutQuad"
                duration={() => calculateDuration("#skills")}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="flex justify-end relative text-xl hover:cursor-pointer"
          onClick={toggleDarkMode}
        >
          ☀
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
