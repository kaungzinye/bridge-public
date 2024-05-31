require('dotenv').config();
const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');

// Connect to MongoDB
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/bridge-database';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
