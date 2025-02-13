const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  liveDemo: { type: String },
  repository: { type: String },
  category: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
