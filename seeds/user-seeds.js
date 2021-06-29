// import User model
const { User } = require('../models');

// array of data for User class
const userData = [
  {
    username: 'Techlover4',
    password: 'Password1'
  },
  {
    username: 'codingismyjam99',
    password: 'Password2'
  },
  {
    username: 'IamtheLinuxKing92',
    password: 'Password3'
  },
  {
    username: 'OU812',
    password: 'Password4'
  }
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUsers;