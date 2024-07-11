const getGoals = (req,res) => {res.json({message:'get -- goal'})}

const setGoals = (req,res) => {res.json({message:'set -- goal'})}

const updateGoals = (req,res) => {res.json({message:`update -- ${req.params.id}`})}

const deleteGoals = (req,res) => {res.json({message:`delete -- ${req.params.id}`})}

module.exports = {getGoals , setGoals , updateGoals , deleteGoals }