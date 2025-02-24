const express = require("express");
const { adminLogin } = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Admin Login Route
router.post("/login", adminLogin);

// Protected Route to Get Admin Details (Optional)
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "✅ Admin Verified", adminId: req.user.id });
});

module.exports = router;
