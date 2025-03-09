// server/models/project_shows.js
const mongoose = require("mongoose");

const projectShowsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  liveDemo: { type: String },
  repository: { type: String },
  category: { type: String },
});

const ProjectShows = mongoose.model("ProjectShows", projectShowsSchema);

module.exports = ProjectShows;
