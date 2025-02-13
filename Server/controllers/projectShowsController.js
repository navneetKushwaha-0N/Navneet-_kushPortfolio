// server/controllers/projectShowsController.js
const ProjectShows = require("../models/project_shows");

const getAllProjectShows = async (req, res) => {
  try {
    const projectShows = await ProjectShows.find();
    res.json(projectShows);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching project shows", error });
  }
};

module.exports = { getAllProjectShows };
