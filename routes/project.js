const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/", wrapAsync(async (req, res) => {
  const skill = req.query.skill;
  if (!skill) {
    return res.status(400).json({ error: "Skill query is required" });
  }

  const profiles = await Profile.find({ skills: { $regex: `^${skill}$`, $options: "i" } });

  const projects = [];
  profiles.forEach(profile => {
    profile.projects.forEach(project => {
      projects.push(project);
    });
  });

  // If the client wants JSON (for API/test), return JSON
  if (req.headers.accept && req.headers.accept.includes("application/json")) {
    return res.json({ projects });
  }

  // Otherwise, render EJS for your frontend
  res.render("projects/project", { projects });
}));

module.exports = router;
