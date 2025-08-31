// Load environment variables first
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const cors = require("cors");

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later."
});

// DB URL
const dbUrl = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jd_assign";

// Models & routers
const Profile = require("./models/profile.js");
const profileRouter = require("./routes/profile.js");
const healthRouter = require("./routes/health.js");
const projectRouter = require("./routes/project.js");
const skillRouter = require("./routes/skill.js");

// View engine & middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(limiter);

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
  } catch (err) {
    console.error("DB Connection Error:", err);
  }
}
main();

// Routes
app.get("/", (req, res) => {
  res.render("api-routes");
});

app.use("/profiles", profileRouter);
app.use("/health", healthRouter);
app.use("/projects", projectRouter);
app.use("/skills", skillRouter);

module.exports = app;
