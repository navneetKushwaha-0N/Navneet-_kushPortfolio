import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectShowcases() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/project_shows") // Change to deployed URL in production
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const groupProjectsByCategory = (projects) =>
    projects.reduce((acc, project) => {
      if (!acc[project.category]) acc[project.category] = [];
      acc[project.category].push(project);
      return acc;
    }, {});

  const projectsByCategory = groupProjectsByCategory(projects);
  const categories = Object.keys(projectsByCategory);
  const filteredProjects = selectedCategory
    ? projectsByCategory[selectedCategory]
    : projects;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#4ca1af]">My Projects</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded transition-all duration-300 ${
            selectedCategory === null ? "bg-[#4ca1af] text-white" : "bg-gray-200 hover:bg-[#4ca1af] hover:text-white"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#4ca1af] text-white"
                : "bg-gray-200 hover:bg-[#4ca1af] hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-[#4ca1af]">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {project.category}
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-100 flex justify-between">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ca1af] hover:text-[#2c3e50] flex items-center transition-all duration-300"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              )}
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ca1af] hover:text-[#2c3e50] flex items-center transition-all duration-300"
                >
                  <FaGithub className="mr-1" /> Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
