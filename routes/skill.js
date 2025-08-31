const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/top", wrapAsync(async (req, res) => {
  const profiles = await Profile.find({}, { skills: 1, _id: 0 });

  const skillCount = {};
  profiles.forEach(profile => {
    profile.skills.forEach(skill => {
      const key = skill.toLowerCase();
      skillCount[key] = (skillCount[key] || 0) + 1;
    });
  });

  const sortedSkills = Object.entries(skillCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  const topSkills = sortedSkills.slice(0, 5);

  if (req.headers.accept && req.headers.accept.includes("application/json")) {
    return res.json({ topSkills });
  }

  res.render("skills/top-skills", { topSkills });
}));

module.exports = router;
