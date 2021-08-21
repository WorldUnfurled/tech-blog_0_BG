const router = require('express').Router();
const { Post } = require('../models/');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
              user_id: req.session.user_id,
            }
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('view-all-admin', {
            layout: 'dashboard',
            posts
        })
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', (req, res) => {
    res.render('new', {
        layout: 'dashboard'
    });
});