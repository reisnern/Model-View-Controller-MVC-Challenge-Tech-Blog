// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// User hasMany Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// User hasMany Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

module.exports = {
  Comment,
  Post,
  User
};