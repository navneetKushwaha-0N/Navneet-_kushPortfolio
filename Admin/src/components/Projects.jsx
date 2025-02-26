

import { useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

export function Projects() {
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    image: "",
    liveDemo: "",
    repository: "",
    category: "",
  })

  const handleInputChange = (e) => {
    setCurrentProject({ ...currentProject, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentProject.id) {
      // Update existing project
      setProjects(projects.map((p) => (p.id === currentProject.id ? currentProject : p)))
    } else {
      // Add new project
      setProjects([...projects, { ...currentProject, id: Date.now() }])
    }
    setCurrentProject({ title: "", description: "", image: "", liveDemo: "", repository: "", category: "" })
  }

  const editProject = (project) => {
    setCurrentProject(project)
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            value={currentProject.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="category"
            value={currentProject.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="w-full p-2 border rounded"
          />
          <input
            name="image"
            value={currentProject.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />
          <input
            name="liveDemo"
            value={currentProject.liveDemo}
            onChange={handleInputChange}
            placeholder="Live Demo URL"
            className="w-full p-2 border rounded"
          />
          <input
            name="repository"
            value={currentProject.repository}
            onChange={handleInputChange}
            placeholder="Repository URL"
            className="w-full p-2 border rounded"
          />
        </div>
        <textarea
          name="description"
          value={currentProject.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="w-full p-2 border rounded mt-4"
          required
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {currentProject.id ? "Update Project" : "Add Project"}
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-end">
              <button onClick={() => editProject(project)} className="text-blue-500 mr-2">
                <FaEdit />
              </button>
              <button onClick={() => deleteProject(project.id)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

