// app.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

// Load models
require('./models/User');
require('./models/Prompt');
require('./models/Match');
require('./models/Post');
require('./models/Swipe'); // Add the new Swipe model

// Passport configuration
require('./config/passport')(passport);

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/prompts', require('./routes/prompts'));
app.use('/matches', require('./routes/matches'));
app.use('/posts', require('./routes/posts'));
app.use('/swipes', require('./routes/swipes')); // Add the swipe route

// Connect to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = app;
