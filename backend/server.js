const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectdb = require('./config/db');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors'); 
// Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectdb();

// Routes
app.use('/api/goals', require('./routes/goalRoutes'));

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack.red);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`.yellow.bold));
