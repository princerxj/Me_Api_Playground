const Profile = require("../models/profile");

module.exports.getAllProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.render("profiles/index", { profiles });
  } catch (err) {
    next(err);
  }
};

module.exports.createProfile = async (req, res, next) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.redirect("/profiles");
  } catch (err) {
    next(err);
  }
};

module.exports.renderEditForm = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.render("profiles/edit", { profile });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteProfileById = async (req, res, next) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.redirect("/profiles");
  } catch (err) {
    next(err);
  }
};

module.exports.updateProfileById = async (req, res, next) => {
  try {
    await Profile.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/profiles");
  } catch (err) {
    next(err);
  }
};
