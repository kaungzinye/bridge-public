// routes/swipes.js
const express = require('express');
const mongoose = require('mongoose');
const Swipe = mongoose.model('Swipe');
const Match = mongoose.model('Match');
const User = mongoose.model('User');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

// Handle swipe action
router.post('/', jwtAuth, async (req, res) => {
  const { swipeeId } = req.body;

  try {
    // Record the swipe
    const newSwipe = new Swipe({
      swiper: req.user.id,
      swipee: swipeeId,
    });
    await newSwipe.save();

    // Check if reciprocal swipe exists
    const reciprocalSwipe = await Swipe.findOne({
      swiper: swipeeId,
      swipee: req.user.id,
    });

    if (reciprocalSwipe) {
      // Create a match
      const newMatch = new Match({
        users: [req.user.id, swipeeId],
      });
      await newMatch.save();

      await User.findByIdAndUpdate(req.user.id, { $push: { matches: newMatch.id } });
      await User.findByIdAndUpdate(swipeeId, { $push: { matches: newMatch.id } });

      res.json({ match: true, matchId: newMatch.id });
    } else {
      res.json({ match: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error processing swipe' });
  }
});

module.exports = router;