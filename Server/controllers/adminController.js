const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create Default Admin
const createDefaultAdmin = async () => {
  const email = "navneetkushwaha64@gmail.com";
  const password = "N12345678"; // Default password

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await Admin.create({ email, password: hashedPassword });
      console.log("✅ Default Admin Created");
    } else {
      console.log("✅ Admin Already Exists");
    }
  } catch (error) {
    console.error("❌ Error creating default admin:", error);
  }
};

// Admin Login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "❌ Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "❌ Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, message: "✅ Login successful" });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
};

module.exports = { adminLogin, createDefaultAdmin };
