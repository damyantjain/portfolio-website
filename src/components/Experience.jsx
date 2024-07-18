const Experience = () => {
  const experience = [
    {
      company: "West Pharmaceuticals Service",
      position: "Software Engineer",
      location: "Bangalore, India",
      duration: "July 2020 - July 2023",
      description: "Description to come here",
    },
    {
      company: "West Pharmaceutical Services",
      position: "Trainee Software Engineer",
      location: "Bangalore, India",
      duration: "Jan 2020 - July 2020",
      description: "Description to come here",
    },
    {
      company: "Chatbotsa",
      position: "Software Developer Intern",
      location: "Cairo, Egypt",
      duration: "June 1 - July 15",
      description: "Description to come here",
    },
  ];

  return (
    <div className="mt-10">
      <div className="font-poppins mb-10 text-2xl text-[#333333]">
        Experience
      </div>
      <div>
        {experience.map((exp, index) => (
          <div key={index} className="bg-gradient-to-br font-poppins key={index} from-gray-100 to-white shadow-lg rounded-xl p-6 border border-gray-200 mb-6">
            <div className="md:flex md:flex-row">
              <div className="md:w-9/12">
                <div className="font-bold md:text-lg">{exp.company}</div>
                <div className="text-sm text-gray-500">{exp.position}</div>
                <div className="text-sm text-gray-500">{exp.location}</div>
              </div>
              <div className="md:w-3/12 text-sm md:text-end text-gray-500">
                {exp.duration}
              </div>
            </div>

            <div className="mt-2">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
