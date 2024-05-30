const express = require('express');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const User = mongoose.model('User');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

// Create a new post
router.post('/', jwtAuth, async (req, res) => {
    const { albumOrSong, coverArt } = req.body;

    const newPost = new Post({
        user: req.user.id,
        albumOrSong,
        coverArt
    });

    try {
        const post = await newPost.save();
        await User.findByIdAndUpdate(req.user.id, { $push: { posts: post.id } });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: 'Error creating post' });
    }
});

// Get all posts from matched users
router.get('/feed', jwtAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('matches');
        const matchUserIds = user.matches.map(match => match._id);
        
        const posts = await Post.find({ user: { $in: matchUserIds } })
                                .populate('user', ['displayName', 'profilePicture'])
                                .sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching feed' });
    }
});

// Like a post
router.post('/like/:id', jwtAuth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (post.likes.includes(req.user.id)) {
            return res.status(400).json({ error: 'You have already liked this post' });
        }

        post.likes.push(req.user.id);
        await post.save();

        res.json(post);
    } catch (err) {
        res.status(500).json({ error: 'Error liking post' });
    }
});

// Save a post
router.post('/save/:id', jwtAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.savedPosts.includes(req.params.id)) {
            return res.status(400).json({ error: 'You have already saved this post' });
        }

        user.savedPosts.push(req.params.id);
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error saving post' });
    }
});

// Get user's profile with posts and prompts
router.get('/profile/:userId', jwtAuth, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
                               .populate('posts')
                               .populate('prompts');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching profile' });
    }
});

module.exports = router;
