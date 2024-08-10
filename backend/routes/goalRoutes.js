const express = require('express');
const Goal = require('../models/goalmodel');

const router = express.Router();

// Get all goals
router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a goal by ID
router.get('/:id', async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    res.json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new goal
router.post('/', async (req, res) => {
  const goal = new Goal(req.body);
  try {
    const newGoal = await goal.save();
    res.status(201).json(newGoal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a goal
router.put('/:id', async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGoal) return res.status(404).json({ message: 'Goal not found' });
    res.json(updatedGoal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a goal
router.delete('/:id', async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    res.json({ message: 'Goal deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
