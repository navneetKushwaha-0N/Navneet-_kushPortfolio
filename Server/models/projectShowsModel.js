const mongoose = require("mongoose");

// Define schema for project shows
const projectShowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL of the image
  liveDemo: { type: String }, // Link to live project
  repository: { type: String }, // GitHub Repo link
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const ProjectShow = mongoose.model("ProjectShow", projectShowSchema);

module.exports = ProjectShow;
