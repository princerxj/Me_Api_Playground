const Joi = require("joi");

module.exports.profileSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  education: Joi.string().max(500),

  skills: Joi.array().items(Joi.string().required()).required(),

  projects: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      link: Joi.string().uri().required(),
    })
  ),

  workExperience: Joi.array().items(
    Joi.object({
      jobTitle: Joi.string().required(),
      company: Joi.string().required(),
      location: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().optional(),
      description: Joi.string().max(1000),
    })
  ),

  links: Joi.object({
    github: Joi.string().uri().required(),
    linkedin: Joi.string().uri().required(),
    portfolio: Joi.string().uri(),
  }).required(),
});