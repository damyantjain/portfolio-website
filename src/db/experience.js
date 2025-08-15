const experience = [
  {
    company: "Philips",
    position: "Software Engineer Co-op",
    location: "Cambridge, MA",
    duration: "Jan 2025 – Present",
    description: [
      "Architected and engineered a side-by-side installation for PIC-iX (WinForms/.NET) enabling concurrent patch deployment, reducing production downtime by 65%.",
      "Developed a Python-based automation tool to generate Release Requirement Documents by programmatically ingesting, transforming, and validating Azure DevOps work item data, ensuring accuracy and consistency across releases.",
      "Reduced document processing time from days to minutes (99% reduction) by automating revision history, delta generation, and structured upload to DevOps",
      "Streamlined CI pipelines by enhancing GitHub workflows to run automated smoke tests and linting on pull requests.",
      "Created workflows to enhance developer experience, like flagging unused NuGet package references of .NET projects."
    ],
  },
  {
    company: "West Pharmaceutical Services",
    position: "Software Engineer (Cross platform – Full stack application developer)",
    location: "Bengaluru, India",
    duration: "Oct 2022 – July 2023",
    description: [
      "Developed C# backend services for a manufacturing platform, containerized them with Docker, and deployed to Kubernetes.",
      "Implemented GraphQL endpoints over existing manufacturing data services, enabling operators to fetch complex nested datasets (production orders, machine states, quality logs) in a single query — reducing API round trips by 40%.",
      "Re-engineered manufacturing data storage by migrating time-series production logs from MongoDB to PostgreSQL with partitioned tables, improving analytical query speed by 35% for reporting dashboards.",
      "Created a Jenkins + Azure DevOps hybrid CI/CD pipeline to run automated integration tests, build Docker images, and roll out updates to Kubernetes — reducing release lead time from 1 week to under 2 days."
    ],
  },
  {
    company: "West Pharmaceutical Services",
    position: "Associate Software Engineer",
    location: "Bengaluru, India",
    duration: "July 2020 – Sep 2022",
    description: [
      "Designed and implemented a Digital Manufacturing application using .NET framework, Xamarin.Forms and MAUI",
      "Followed MVVM architecture and Object-Oriented Programming (OOP) for creating robust application.",
      "Implemented design patterns such as Command, Decorator, and Builder to enhance the software architecture.",
      "Integrated MQTT brokers with backend services to stream live sensor data into PostgreSQL-backed queues, achieving sub-second processing for shop-floor dashboards.",
      "Implemented a SignalR-based connection to efficiently route orders across the manufacturing plant."
    ],
  },
  {
    company: "West Pharmaceutical Services",
    position: "Trainee Software Engineer",
    location: "Bengaluru, India",
    duration: "Jan 2020 – July 2020",
    description: [
      "Team lead for an Asset management application to digitize the handling of all organization's assets.",
      "Developed both frontend (MAUI) and backend (SQL) of the application, based on .NET framework.",
      "Leveraged Azure to create web apps to host APIs, blob storage for file management, and SQL database for the application."
    ],
  },
  {
    company: "Chatbotsa",
    position: "Software Developer Intern",
    location: "Cairo, Egypt",
    duration: "June 2018 - July 2018",
    description: [
      "Developed and deployed chatbots using Node.js into Facebook Messenger.",
      "Utilized Dialogflow NLP for efficient user query handling.",
    ],
  },
];

export default experience;
