const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "❌ Access Denied: No Token Provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token from 'Bearer <token>'

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "❌ Token Expired. Please log in again." });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(400).json({ message: "❌ Invalid Token" });
    } else {
      return res.status(500).json({ message: "❌ Internal Server Error" });
    }
  }
};

module.exports = verifyToken;
