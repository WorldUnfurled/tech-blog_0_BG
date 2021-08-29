const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// display all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
          include: {
              model: User,
              attributes: ['username']
          }
        });
    
        const posts = postData.map(post => post.get({ plain: true }));
    
        res.render('view-all', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

// display single post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        });

        if (postData) {
            const post = postData.get({ plain: true });
            
            res.render('view-one', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.get('/login', async (req, res) => {
    req.session.loggedIn ? res.redirect('/')
    : res.render('login');
});

// signup
router.get('/signup', (req, res) => {
    req.session.loggedIn ? res.redirect('/')
    : res.render('signup');
});

module.exports = router;