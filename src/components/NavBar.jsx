import { Link } from "react-scroll";

const NavBar = () => {
  const calculateDuration = (target) => {
    const distance = Math.abs(
      window.pageYOffset - document.querySelector(target).offsetTop
    );
    return distance < 300 ? 300 : distance / 2;
  };

  return (
    <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white shadow-lg z-50 justify-center">
      <ul className="flex font-poppins text-[#333333] items-center space-x-10 h-20">
        <li className="transistion-colors hover:text-[#9d9d9d]">
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
            to="skills"
            smooth="easeInOutQuad"
            duration={() => calculateDuration("#skills")}
          >
            Skills
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
      </ul>
    </nav>
  );
};

export default NavBar;
