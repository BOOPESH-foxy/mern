const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalmodel');

// Get all goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  const { id, name, department, organisation } = req.body;

  if (!id || !name || !department || !organisation) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const goal = await Goal.create({
    id,
    name,
    department,
    organisation,
  });

  res.status(201).json(goal);
});


const updateGoals = asyncHandler(async (req, res) => {
    const { id, name, department, organisation } = req.body;
  
    // Find the goal by id from the db
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }
  
    // Update the goal with the new values
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, {
      id, name, department, organisation
    }, { new: true });
  
    res.status(200).json(updatedGoal);
  });
  

// Delete a goal
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
  
    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }
  
    await Goal.deleteOne({ _id: req.params.id });
  
    res.status(200).json({ message: `Goal with id ${req.params.id} deleted` });
  });
  

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
