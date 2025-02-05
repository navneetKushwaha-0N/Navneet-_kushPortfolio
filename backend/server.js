// Load environment variables from .env file
require("dotenv").config();

// Import necessary dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON data
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files (uploaded images)

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected")) // Log success message
  .catch((err) => console.error(err)); // Log errors if connection fails

// User Schema definition for MongoDB
const userSchema = new mongoose.Schema({
  username: String, // Store username
  email: { type: String, unique: true }, // Email must be unique
  password: String, // Password will be stored in hashed format
  profilePic: String, // Store profile picture path
});

const User = mongoose.model("User", userSchema); // Create User model based on schema

// Multer Setup for Image Upload (handle profile pictures)
const storage = multer.diskStorage({
  destination: "uploads/", // Set upload directory
  filename: (req, file, cb) => {
    // Generate unique filename based on current timestamp and original file extension
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }); // Initialize multer with storage configuration

// Signup Route with Duplicate Email Check
app.post("/signup", upload.single("profilePic"), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "This email is already in use" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = req.file ? `/uploads/${req.file.filename}` : ""; // Handle profile picture upload

    // Create a new user and save to the database
    const newUser = new User({ username, email, password: hashedPassword, profilePic });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error });
  }
});

// Login Route with Token Generation (JWT)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    // Compare hashed password with the one stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate a JWT token for the user (expires in 1 hour)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      token, // Send back the generated JWT token
      user: { username: user.username, email: user.email, profilePic: user.profilePic }, // Send user details
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

// Project Schema definition for MongoDB
const projectSchema = new mongoose.Schema({
  title: String, // Project title
  description: String, // Project description
  image: String, // Image associated with the project
  liveDemo: String, // Link to live demo
  repository: String, // GitHub repository link
  category: String, // Category of the project (e.g., Web, Mobile, etc.)
});

const Project = mongoose.model("Project", projectSchema); // Create Project model based on schema

// Route to Get All Projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from the database
    res.json(projects); // Send projects as response
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
});

// Nodemailer Setup for Contact Form
const transporter = nodemailer.createTransport({
  service: "gmail", // Using Gmail for sending emails
  auth: {
    user: process.env.EMAIL_USER, // Sender email from .env
    pass: process.env.EMAIL_PASSWORD, // Sender email password from .env
  },
});

// Send email when contact form is submitted
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Mail options for the contact form
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: process.env.EMAIL_USER, // Recipient email (same as sender)
    subject: "New Contact Form Submission", // Email subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("✅ Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});


/* const sampleProjects = [
  {
    title: "Responsive Portfolio",
    description: "A responsive portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/300x200",
    liveDemo: "https://example.com/portfolio",
    repository: "https://github.com/example/portfolio",
    category: "Web Development",
  },

  {
    title: "Responsive PortfolioDesign",
    description: "A responsive portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/300x200",
    liveDemo: "https://example.com/portfolio",
    repository: "https://github.com/example/portfolio",
    category: "App Development",
  },
  
];

Project.insertMany(sampleProjects).then(() => console.log("Projects added"));

*/

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); 
