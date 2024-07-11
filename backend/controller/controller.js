const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req,res) => {res.json({message:'get -- goal'})})

const setGoals = asyncHandler(async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('please enter text')
    }
    res.json({message:'set -- goal'})
})

const updateGoals = asyncHandler(async(req,res) => {res.json({message:`update -- ${req.params.id}`})})

const deleteGoals = asyncHandler(async(req,res) => {res.json({message:`delete -- ${req.params.id}`})})

module.exports = {getGoals , setGoals , updateGoals , deleteGoals }