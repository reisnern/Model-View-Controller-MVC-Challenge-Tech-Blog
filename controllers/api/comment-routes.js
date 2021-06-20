// import routes and models
const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments
router.get('/', async(req, res) => {
  try {
    const commentData = await Comment.findAll();

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new comment
router.post('/', async(req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      user_id: req.body.user_id,
      post_id: req.body.post_id
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;