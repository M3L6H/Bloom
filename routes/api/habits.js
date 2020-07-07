////////////////// Habits API Endpoints /////////////////////////////////
// Model found in models/Habit.js

/////////////// Imports
  /// Utilities
    const express = require("express");
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const passport = require("passport");

/// Keys
    const keys = require('../../config/keys');
/// Validations
    const validateNewHabitInput = require("../../validation/new_habit");
/// Models
    const Habit = require("../../models/Habit");

////////////// Main

//Test route
    router.get("/test",(req,res) => {res.json({msg:"habits"})});

// Create Habit 
// expects req body to have keys title, description, and user(id)
    router.post("/", passport.authenticate("jwt", { session: false }), (req,res)=>{
        
        const {errors,isValid} = validateNewHabitInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        let newHabit = new Habit({
            completed: false,
            title: req.body.title ,
            description: req.body.description || "",
            user: req.body.user 
        });

        newHabit.save().then((habit)=> res.json(habit)); 

    });

//View Habit
    router.get("/:id", passport.authenticate("jwt", { session: false }), (req,res)=>{
        Habit.findById(req.params.id)
            .then((habit)=> res.json(habit))
            .catch(()=>res.json(null)); 
    })

// Delete Habit
// Returns deleted habit id or "failed"
    router.delete("/:id", passport.authenticate("jwt", { session: false }), (req,res) => {
        Habit.deleteOne({_id: req.params.id})
            .then((msg) => {
                if(msg && msg.deletedCount > 0) {
                    res.json({id: req.params.id});
                } else {
                    res.json("Failed");
                }
            })
    })

// Update Habit
// Returns JSON of updated Habit or old habit if no updates are passed in body
// Expects body to contain ONLY new key:value pairs
    router.patch("/:id", passport.authenticate("jwt", { session: false }),(req,res)=>{
        Habit.findOneAndUpdate({_id:req.params.id}, req.body,{new:true, lean:true})
            .then(obj=>res.json(obj)); 
    })

module.exports = router; 