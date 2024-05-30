const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('./keys');

module.exports = (passport) => {
    passport.use(new SpotifyStrategy({
        clientID: keys.spotifyClientID,
        clientSecret: keys.spotifyClientSecret,
        callbackURL: '/auth/spotify/callback'
    }, async (accessToken, refreshToken, expires_in, profile, done) => {
        const newUser = {
            spotifyId: profile.id,
            displayName: profile.displayName,
            profilePicture: profile.photos[0]
        };
        try {
            let user = await User.findOne({ spotifyId: profile.id });
            if (user) {
                done(null, user);
            } else {
                user = await User.create(newUser);
                done(null, user);
            }
        } catch (err) {
            console.error(err);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};
