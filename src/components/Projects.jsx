const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "Image URL of Project 1",
      link: "Link to Project 1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "Image URL of Project 2",
      link: "Link to Project 2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      image: "Image URL of Project 3",
      link: "Link to Project 3",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      image: "Image URL of Project 4",
      link: "Link to Project 4",
    },
  ];

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
