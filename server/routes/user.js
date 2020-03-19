const express = require('express');
const router = express.Router();
const _ = require('lodash');
const cloudinary = require('cloudinary').v2;
const { User, validate } = require('../models/user');

const student = [
  {
    Timestamp: '3/9/2020 9:59:43',
    name: 'Abhishek Sharma',
    department: 'CSE',
    section: 'B',
    phoneNumber: 8459056823,
  },
  {
    Timestamp: '3/9/2020 10:00:09',
    name: 'Kanishk Gupta',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9971164773,
  },
  {
    Timestamp: '3/9/2020 10:00:28',
    name: 'Manan Arora',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9013283945,
  },
  {
    Timestamp: '3/9/2020 10:04:45',
    name: 'Moksh Grover',
    department: 'CSE',
    section: 'B',
    phoneNumber: 8588040868,
  },
  {
    Timestamp: '3/9/2020 10:00:54',
    name: 'Parth Tuteja',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9654243360,
  },
  {
    Timestamp: '3/9/2020 9:58:58',
    name: 'Raghav Sharma',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9999048006,
  },
  {
    Timestamp: '3/9/2020 10:01:18',
    name: 'Rohit Prajapati',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9599923968,
  },
  {
    Timestamp: '3/9/2020 10:01:39',
    name: 'Sagar Sharma',
    department: 'CSE',
    section: 'B',
    phoneNumber: 8368688061,
  },
  {
    Timestamp: '3/9/2020 10:02:35',
    name: 'Shivam Tyagi',
    department: 'CSE',
    section: 'B',
    phoneNumber: 7532833365,
  },
  {
    Timestamp: '3/9/2020 10:02:59',
    name: 'Shridhar Rai',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9319751819,
  },
  {
    Timestamp: '3/9/2020 10:04:16',
    name: 'Sukriti Goyal',
    department: 'CSE',
    section: 'B',
    phoneNumber: 9871449779,
  },
];
router.get('/', async (req, res) => {
  const user = await User.find({});
  if (!user.length) return res.status(404).send('DB is empty!');
  res.send(user);
});

router.post('/', async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  User.collection.insert(student, function(err, docs) {
    if (err) return console.error(err);
    else {
      console.log('Inserted');
    }
  });
  await user.save();
  res.status(200).send(user);
});

router.put('/:id', (req, res) => {});

module.exports = router;
