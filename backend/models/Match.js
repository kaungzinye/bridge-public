// models/Match.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  chat: [{
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
  }],
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Match', matchSchema);
