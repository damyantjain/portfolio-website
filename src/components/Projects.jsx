import projects from "../db/projects";

const Projects = () => {
  return (
    <div className="align-middle text-center font-poppins text-4xl font-bold text-[#333333]">
      <div>My Projects</div>
      {/* List of Projects */}
      <div className="grid grid-cols-2 gap-2 lg:gap-8 mt-4 md:mt-20">
        {" "}
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="hover:cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out"
            >
              {/* Project Image */}
              <div className="rounded-xl shadow-2xl object-cover h-56 w-full lg:h-96">
                <img src={project.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
