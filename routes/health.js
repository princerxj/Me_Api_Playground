const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/", wrapAsync(async (req, res) => {
  res.status(200).json({ status: "OK" });
}));

module.exports = router;
