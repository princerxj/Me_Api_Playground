// Basic Auth middleware
function basicAuth(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="Profile Edit"');
    return res.status(401).send('Authentication required.');
  }
  const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
  const [user, pass] = credentials;
  // Replace with your desired username and password and may be stored in .env File
  if (user === 'admin' && pass === process.env.ADMIN_PASSWORD) {
    return next();
  }
  res.set('WWW-Authenticate', 'Basic realm="Profile Edit"');
  return res.status(401).send('Invalid credentials.');
}
const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.js");
const profileController = require("../controllers/profile.js");
const wrapAsync = require("../utils/wrapAsync.js");

router
  .route("/")
  .get(wrapAsync(profileController.getAllProfiles))
  .post(wrapAsync(profileController.createProfile));

router
  .route("/:id/edit")
  .get(basicAuth, wrapAsync(profileController.renderEditForm));

router
  .route("/:id")
  .put(basicAuth, wrapAsync(profileController.updateProfileById))   // optionally protect PUT too
  .delete(basicAuth, wrapAsync(profileController.deleteProfileById)); // secured DELETE


router.route("/new").get((req, res) => {
  res.render("profiles/new");
});

module.exports = router;
