const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {res.status(200).json({message: 'from - router' }) })

router.post('/',(req,res)=> {res.json({message: 'set goal'})})

router.put('/:id',(req,res)=>{res.json({message:`put - ${req.params.id} `})})

router.delete('/:id',(req,res)=>{res.json({message:`delete - ${req.params.id}`})})

module.exports = router