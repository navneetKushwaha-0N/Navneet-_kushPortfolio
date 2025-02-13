const Project = require("../models/Project");

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching projects", error });
  }
};

module.exports = { getProjects };
