const Skills = () => {
  const skillList = [
    {
      title: "Languages",
      skills: ["JavaScript", "C#", "Java", "Python"],
    },
    {
      title: "Web Development",
      skills: [
        "React.js",
        "Node.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Cloud and Tools",
      skills: [
        "AWS",
        "Azure DevOps",
        "Azure Portal",
        "Visual Studio",
        "MSSM",
        "IntelliJ",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Microsoft SQL Server", "MongoDB"],
    },
    {
      title: "Frameworks",
      skills: [
        "OOP",
        "MAUI",
        "MVVM",
        "MVC",
        "Xamarin.Forms",
        ".NET",
        "Spring",
        "Agile",
        "Scrum",
        "Sprint",
        "Junit",
      ],
    },
  ];

  return (
    <div className="mt-20 md:mt-32">
      <div className="align-middle text-center font-poppins text-4xl font-bold text-[#333333]">
        Skills & Technologies
      </div>
      <div className="mt-4 lg:mt-20">
        {skillList.map((skillCategory, index) => (
          <div key={index} className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/12">
                <div className="font-poppins font-bold text-[#333333] text-xl whitespace-nowrap">
                  {skillCategory.title}
                </div>
              </div>
              <div className="md:w-9/12">
                <div className="flex flex-wrap">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mr-4 mb-2">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
