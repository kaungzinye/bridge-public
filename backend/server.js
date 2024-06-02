require('dotenv').config();
const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');

// Connect to MongoDB
const db = process.env.MONGO_URI || 'mongodb+srv://bridge-admin:DatabasePassword123!@bridge-cluster.63bwpie.mongodb.net/?retryWrites=true&w=majority&appName=Bridge-Cluster';

mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define the port to run the server on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
