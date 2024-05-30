const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    spotifyId: { type: String, required: true },
    displayName: { type: String },
    profilePicture: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    prompts: [{ type: Schema.Types.ObjectId, ref: 'Prompt' }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
    likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    savedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('User', UserSchema);
