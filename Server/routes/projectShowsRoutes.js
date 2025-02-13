// server/routes/projectShowsRoutes.js
const express = require("express");
const router = express.Router();
const { getAllProjectShows } = require("../controllers/projectShowsController");

router.get("/", getAllProjectShows); // Fetch all project shows

module.exports = router;
