const express = require('express');
const passport = require('passport');
const router = express.Router();

// Spotify authentication route
router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'user-library-read']
}));

// Spotify callback route
router.get('/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/auth/failure' }), (req, res) => {
    res.redirect('/dashboard');
});

// Authentication failure route
router.get('/auth/failure', (req, res) => {
    res.send('Authentication failed. Please try again.');
});

module.exports = router;
