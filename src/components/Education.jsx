const Education = () => {
  const education = [
    {
      university: "Northeastern University",
      location: "Boston, Massachusetts",
      degree: "MS Computer Science",
      duration: "2023-2025",
      major: "Computer Science",
    },
    {
      university: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      degree: "B.Tech Computer Science",
      duration: "2016-2020",
      major: "Computer Science",
    },
  ];

  return (
    <div className="mt-10">
      <div className="font-poppins mb-10 text-2xl text-[#333333]">
        Education
      </div>
      <div className="md:flex md:flex-row gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br font-poppins from-gray-100 to-white shadow-lg w-full rounded-xl p-6 border border-gray-200 mb-6 "
          >
            <div className="xl:flex xl:flex-row">
              <div className="xl:w-9/12">
                <div className="font-bold md:text-lg">{edu.university}</div>
                <div className="text-sm text-gray-500">{edu.degree}</div>
                <div className="text-sm text-gray-500">{edu.location}</div>
              </div>
              <div className="xl:w-3/12 text-sm text-gray-500 xl:text-end">{edu.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
