const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    department: Joi.string().required(),
    section: Joi.string().required(),
  });

  return schema.validate(user);
}

exports.validate = validateUser;
exports.User = User;
