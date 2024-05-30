// models/Swipe.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const swipeSchema = new Schema({
  swiper: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  swipee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Swipe', swipeSchema);
