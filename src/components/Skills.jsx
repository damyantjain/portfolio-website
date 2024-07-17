const Skills = () => {
  const skillList = [
    {
      title: "Languages",
      skills: ["JavaScript", "C#", "Java", "Python", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "RESTful APIs"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Photoshop", "Illustrator"],
    },
  ];

  return (
    <div className="mt-10 md:mt-32">
      <div className="align-middle text-center font-poppins text-4xl font-bold text-[#333333]">
        Skills & Technologies
      </div>
      <div>
        {skillList.map((skillCategory, index) => {
          return (
            <div key={index} className="flex">
              <div className="w-3/12 bg-slate-300">
                <div>{skillCategory.title}</div>
              </div>
              <div className="w-9/12 bg-slate-500">
                <div className="flex">
                  {skillCategory.skills.map((skill, skillIndex) => {
                    return <div key={skillIndex}>{skill}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
