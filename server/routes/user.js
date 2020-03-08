const express = require('express');
const router = express.Router();
const _ = require('lodash');
const cloudinary = require('cloudinary').v2;
const { User, validate } = require('../models/user');

router.get('/', async (req, res) => {
  const user = await User.find({});
  if (!user.length) return res.status(404).send('DB is empty!');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User(
    _.pick(req.body, [
      'name',
      'department',
      'section',
      'whatsappNo',
      'facebook',
      'linkedin',
      'phoneNumber',
      'email',
      'dp',
    ])
  );
  await user.save();
  res.status(200).send(user);
});

router.put('/:id', (req, res) => {});

module.exports = router;
