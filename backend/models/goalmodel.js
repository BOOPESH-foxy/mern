const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  department: { type: String, required: true },
  organisation: { type: String, required: true },
},{ versionKey: false });

module.exports = mongoose.model('Goal', goalSchema, 'init_table');
