const express = require('express');
const mongoose = require('mongoose');
const Prompt = mongoose.model('Prompt');
const User = mongoose.model('User');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

router.post('/', jwtAuth, async (req, res) => {
    const { text, answer } = req.body;
    const newPrompt = new Prompt({
        user: req.user.id,
        text,
        answer
    });

    try {
        const prompt = await newPrompt.save();
        await User.findByIdAndUpdate(req.user.id, { $push: { prompts: prompt.id } });
        res.json(prompt);
    } catch (err) {
        res.status(500).json({ error: 'Error creating prompt' });
    }
});

router.get('/', jwtAuth, async (req, res) => {
    try {
        const prompts = await Prompt.find().populate('user', ['displayName', 'profilePicture']);
        res.json(prompts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching prompts' });
    }
});

module.exports = router;
