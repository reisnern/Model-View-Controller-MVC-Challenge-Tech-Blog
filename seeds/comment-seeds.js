// import Comment model
const { Comment } = require('../models');

// array of data for Comment class
const commentData = [
  {
    comment: `I found the content relatable. Eager to try this for my next project.`,
    user_id: '4',
    post_id: '1'
  },
  {
    comment: `Insomnia! I used Insomia during my studies, so I might be biased.`,
    user_id: '4',
    post_id: '2'
  },
  {
    comment: `Great arguments for both sides. I personally love them, but to each their own.`,
    user_id: '1',
    post_id: '5'
  },
  {
    comment: `Can't wait to for this albulm to come out!`,
    user_id: '3',
    post_id: '4'
  },
  {
    comment: `This artist is lit!`,
    user_id: '2',
    post_id: '2'
  }
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;