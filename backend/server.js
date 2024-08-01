const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const mongoose = require('mongoose');
const connectdb = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectdb();
app.use('/api/goals', require('./routes/goalRoutes'));
app.listen(port, () => console.log(`Server started on port ${port}`));

// Load environment variables
