// import routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// home route
router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json(err);
  }
});

// single post route
router.get('/post/:id', async(req, res) => {
  try {
    const postData = await Post.findByPk({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['comment']
        }
      ]
    });

    const post = postData.get({ plain: true });

    res.render('post', { ...post, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// sign up route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  
  res.render('sign-up');
});

module.exports = router;