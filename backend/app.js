// Load environment variables from a .env file into process.env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Load models
require('./models/User');
require('./models/Prompt');
require('./models/Match');
require('./models/Post');
require('./models/Swipe');

// Passport configuration
require('./config/passport')(passport);

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());

// Import routes
const authRoutes = require('./routes/auth');
const promptRoutes = require('./routes/prompts');
const matchRoutes = require('./routes/matches');
const postRoutes = require('./routes/posts');
const swipeRoutes = require('./routes/swipes');

// Use routes
app.use('/auth', authRoutes);
app.use('/prompts', promptRoutes);
app.use('/matches', matchRoutes);
app.use('/posts', postRoutes);
app.use('/swipes', swipeRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;
