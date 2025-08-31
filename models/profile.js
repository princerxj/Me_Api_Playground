const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education: { type: String, maxlength: 500 },

  skills: [{ type: String, required: true }],

  projects: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],

  workExperience: [
    {
      jobTitle: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: false },
      description: { type: String, maxlength: 1000 },
    },
  ],

  links: {
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    portfolio: { type: String },
  },
});

module.exports = mongoose.model("Profile", profileSchema);
