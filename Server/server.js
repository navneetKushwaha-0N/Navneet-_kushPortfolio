require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import DB connection
const adminRoutes = require("./routes/adminRoutes"); // Import admin routes
const projectShowsRoutes = require("./routes/projectShowsRoutes"); // Import project shows routes
const contactRoutes = require("./routes/contactRoutes"); // Import contact form routes
const ProjectShow = require("./models/projectShowsModel");


const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON data

// Connect to Database
connectDB(); // Establish MongoDB connection






// Function to add a dummy project
const addDummyProject = async () => {
  try {
    const existingProjects = await ProjectShow.find();
    if (existingProjects.length === 0) {
      const dummyProject = new ProjectShow({
        title: "Web Tracker",
        description: "Using React and Node.js",
        image: "https://example.com/portfolio-image.jpg",
        liveDemo: "https://portfolio.example.0rg",
        repository: "https://github.com/navneetkushwaha63/portfolio",
        category: "Web extension",
      });
      await dummyProject.save();

      console.log("✅ Dummy project added successfully");
    } else {
      console.log("✅ Dummy project already exists");
    }

    //Add more dummy projects

   /*   const dummyProject2 = new ProjectShow({
        title: "Gym Manager",
        description: "Built with Express and MongoDB",
        image: "https://example.com/task-manager.jpg",
        liveDemo: "https://task-manager.example.com",
        repository: "https://github.com/navneetkushwaha63/task-manager",
        category: "Web Development",
      });

      await dummyProject2.save();
*/
  } catch (error) {
    console.error("❌ Error adding dummy project:", error);
  }
};
// Call function to add a dummy project
addDummyProject();


// Routes
app.use("/admin", adminRoutes); // Admin routes
app.use("/api/project_shows", projectShowsRoutes); // Project shows routes
app.use("/send-email", contactRoutes); // Contact form routes

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
