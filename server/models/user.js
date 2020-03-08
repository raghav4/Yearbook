const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dp: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  whatsappNo: {
    type: String,
    default: '+919876543210',
    min: 10,
  },
  facebook: {
    type: String,
    default: 'https://facebook.com/',
  },
  linkedin: {
    type: String,
    default: 'https://linkedin.com/in/',
  },
  phoneNumber: {
    type: String,
    default: '+919876543210',
    min: 10,
  },
  email: {
    type: String,
    default: 'youremail@email.com',
  },
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    department: Joi.string().required(),
    section: Joi.string().required(),
    whatsappNo: Joi.string().min(10),
    facebook: Joi.string().uri(),
    linkedin: Joi.string().uri(),
    phoneNumber: Joi.string().min(10),
    email: Joi.string().email(),
    dp: Joi.string().uri(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
