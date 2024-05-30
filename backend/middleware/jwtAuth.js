const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, keys.jwtSecret);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};
