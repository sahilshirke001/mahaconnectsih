const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Create a new application
router.post("/", async (req, res) => {
  try {
    const newApplication = new Application(req.body);

    const savedApplication = await newApplication.save();

    res.status(201).json(savedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to save application",
    });
  }
});

// Get all applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1,
    });

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch applications",
    });
  }
});
router.get("/test", (req, res) => {
  res.send("ROUTE WORKS");
});

module.exports = router;