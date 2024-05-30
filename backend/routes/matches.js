const express = require('express');
const mongoose = require('mongoose');
const Match = mongoose.model('Match');
const User = mongoose.model('User');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

router.post('/match', jwtAuth, async (req, res) => {
    const { userId } = req.body;

    try {
        let match = await Match.findOne({ users: { $all: [req.user.id, userId] } });

        if (!match) {
            match = new Match({ users: [req.user.id, userId] });
            await match.save();

            await User.findByIdAndUpdate(req.user.id, { $push: { matches: match.id } });
            await User.findByIdAndUpdate(userId, { $push: { matches: match.id } });
        }

        res.json(match);
    } catch (err) {
        res.status(500).json({ error: 'Error creating match' });
    }
});

router.get('/', jwtAuth, async (req, res) => {
    try {
        const matches = await Match.find({ users: req.user.id }).populate('users', ['displayName', 'profilePicture']);
        res.json(matches);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching matches' });
    }
});

router.post('/chat', jwtAuth, async (req, res) => {
    const { matchId, message } = req.body;

    try {
        const match = await Match.findById(matchId);
        if (match) {
            match.chat.push({ sender: req.user.id, message });
            await match.save();
            res.json(match);
        } else {
            res.status(404).json({ error: 'Match not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error sending message' });
    }
});

module.exports = router;
