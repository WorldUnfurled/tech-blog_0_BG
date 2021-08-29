const router = require('express').Router();
const { User } = require('../../models');

// create user
router.post('/', async (req, res) => {
    try {
        const createUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = createUser.id;
            req.session.username = createUser.username;
            req.session.loggedIn = true;

            res.json(createUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// log in
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!user) {
            res.status(400).json({ message: 'User not found.' });
            return;
        }

        const validPass = user.checkPassword(req.body.password);

        if (!validPass) {
            res.status(400).json({ message: 'User not found.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
            
            res.json({ user, message: 'You have successfully logged in.' });
        });

    } catch (err) {
        res.status(400).json({ message: 'User not found.' });
    }
});

//log out
router.post('/logout', (req, res) => {
    req.session.loggedIn 
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
})

module.exports = router;