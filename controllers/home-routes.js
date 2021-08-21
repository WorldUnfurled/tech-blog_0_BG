const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// display all posts
router.get('/', async (req, res) => {});

// display single post
router.get('/post/:id', async (req, res) => {});

// login
router.get('/login', async (req, res) => {});

// signup
router.get('/signup', (req, res) => {});

module.exports = router;