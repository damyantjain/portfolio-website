const Education = () => {
  const education = [
    {
      university: "Northeastern University",
      location: "Boston",
      degree: "MS Computer Science",
      duration: "2023-2025",
      major: "Computer Science",
    },
    {
      university: "Vellore Institute of Technology",
      location: "Vellore",
      degree: "B.Tech Computer Science",
      duration: "2016-2020",
      major: "Computer Science",
    },
  ];

  return (
    <div className="mt-10">
      <div className="font-poppins mb-10 text-2xl font-bold text-[#333333]">
        Education
      </div>
      <div className="flex flex-row gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-100 to-white shadow-lg w-full rounded-xl p-6 border border-gray-200 mb-6"
          >
            <div className="font-bold">{edu.university}</div>
            <div className="text-sm text-gray-500">{edu.degree}</div>
            <div className="text-sm text-gray-500">{edu.location}</div>
            <div className="text-sm text-gray-500">{edu.duration}</div>
            <div className="text-sm text-gray-500">{edu.major}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;