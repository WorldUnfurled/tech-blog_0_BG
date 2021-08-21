const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {

        const createPost = await Post.create({ 
            title: req.body.title,
            content: req.body.content, 
            user_id: req.session.user_id 
        });

        res.json(createPost);

    } catch (err) {

        res.status(500).json(err);
        
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (!updatePost) {
            res.status(404).json({ message: 'Post not found.' });
            return;
        }

        res.json(updatePost);
    } catch (err) {
        res.status(500).json(err);
    }
});