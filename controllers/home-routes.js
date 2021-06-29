// import routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// home route
router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));

    // res.status(200).json(postData);
    res.render('homepage-posts', { 
      layout: 'homepage', 
      posts, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// single post route
router.get('/posts/:id', async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Comment, include: { model: User } }
      ]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // res.status(200).json(postData);
    res.render('create-comment', { 
      layout: 'homepage', 
      ...post, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { 
    layout: 'homepage'
  });
});

// sign up route
router.get('/signup', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  
  res.render('sign-up', { 
    layout: 'homepage'
  });
});

module.exports = router;