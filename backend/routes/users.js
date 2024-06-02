const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwtAuth = require('../middleware/jwtAuth');
const keys = require('../config/keys');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { id: user.id };
        const token = jwt.sign(payload, keys.jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { id: user.id };
        const token = jwt.sign(payload, keys.jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user data
router.get('/me', jwtAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
