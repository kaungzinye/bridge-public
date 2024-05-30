const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const router = express.Router();

router.get('/spotify', passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private'] }));

router.get('/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/' }), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, keys.jwtSecret, { expiresIn: '1h' });
    res.redirect(`/#/auth?token=${token}`);
});

module.exports = router;
