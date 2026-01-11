import { Github, ExternalLink, Code2 } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "OpenKTU",
      description: "An open-source platform fully hosted on the frontend for KTU students to access and share study notes seamlessly.",
      tech: ["React", "Frontend-only", "Community"],
      github: "https://github.com/sabari-vijayan/openktu", // Replace with actual
      link: "#"
    },
    {
      title: "Christmas Secret Letter",
      description: "A fun, anonymous messaging platform built for TinkerHub, allowing users to send secret holiday notes to each other.",
      tech: ["MERN Stack", "Socket.io", "TinkerHub"],
      github: "https://github.com/sabari-vijayan/secret-letter", // Replace with actual
      link: "#"
    },
    {
      title: "QPI (Open Source Contributor)",
      description: "Contributed to an open-source API tool designed to generate and serve fresh, inspirational quotes to developers.",
      tech: ["Node.js", "Open Source", "API"],
      github: "https://github.com/sabari-vijayan/QPI", // Replace with actual
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-500">A collection of things I've built and contributions I've made.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                <Code2 size={24} />
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.link} className="text-gray-400 hover:text-blue-500 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, tIndex) => (
                <span 
                  key={tIndex} 
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
