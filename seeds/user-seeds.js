// import User model
const { User } = require('../models');

// array of data for User class
const userData = [
  {
    username: 'Narumi',
    password: 'Password1'
  },
  {
    username: 'Hirotaka',
    password: 'Password2'
  },
  {
    username: 'Koyanagi',
    password: 'Password3'
  },
  {
    username: 'Kabakura',
    password: 'Password4'
  }
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;