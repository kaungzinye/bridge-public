const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromptSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    answer: { type: String }, // can be text or cover art URL
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prompt', PromptSchema);
